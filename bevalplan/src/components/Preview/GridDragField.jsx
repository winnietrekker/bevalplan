import React, { useState, useContext } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable
} from "@dnd-kit/core";
import PreviewTile from "../Cards/PreviewTile.jsx";
import { MyContext } from "../../context/MyContext.jsx";
import PreviewTitle from "./PreviewTitle.jsx";


const GRID_SIZE = 10;
const GRID_WIDTH = 950;
const GRID_HEIGHT = 675;
const TILE_WIDTH = 200;
const TILE_HEIGHT = 200;


function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

function snapToGridAndClamp(x, y, grid = GRID_SIZE) {
  const snappedX = Math.round(x / grid) * grid;
  const snappedY = Math.round(y / grid) * grid;
  // Clamp so tile stays within grid
  return {
    x: clamp(snappedX, 0, GRID_WIDTH - TILE_WIDTH),
    y: clamp(snappedY, 0, GRID_HEIGHT - TILE_HEIGHT),
  };
}

export default function GridDragField() {
  const {data, setData, otherData, setOtherData} = useContext(MyContext);

  const handleDragEnd = (event) => {
    const { active, delta } = event;
    setData(prevData =>
      prevData.map(data => ({
        ...data,
        options: data.options.map(option => {
          if (option.id === active.id) {
            const newX = option.position.x + delta.x;
            const newY = option.position.y + delta.y;
            return {
              ...option,
              position: snapToGridAndClamp(newX, newY)
            };
          }
          return option;
        })
      }))
    );
    setOtherData(prevData =>
      prevData.map(data => ({
        ...data,
        values: data.values.map(value => {
          console.log("Checking value:", value.id, "against active:", active.id);
          if (value.id === active.id) {
            const newX = value.position.x + delta.x;
            const newY = value.position.y + delta.y;
            return {
              ...value,
              position: snapToGridAndClamp(newX, newY)
            };
          }
          return value;
        })
      }))
    );
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <DroppableField>
        {otherData.map((dataItem) =>
          <PreviewTitle key={dataItem.title.id} title={dataItem.title} />
        )}
        {otherData.map((dataItem) =>
          dataItem.values.map((value) => (
            <DraggableOption key={value.id} id={value.id} item={value} />
          ))
        )}
        {data.map((dataItem) =>
          <PreviewTitle key={dataItem.title.id} title={dataItem.title} />
        )}
        {data.map((dataItem) =>
          dataItem.options.map((option) => (
            <DraggableOption key={option.id} id={option.id} item={option} />
          ))
        )}
      </DroppableField>
    </DndContext>
  );
}

function DroppableField({ children }) {
  useDroppable({ id: "field" });

  const gridBackground = `
    linear-gradient(to right, #ccc 1px, transparent 1px),
    linear-gradient(to bottom, #ccc 1px, transparent 1px)
  `;

  return (
    <div
      style={{
        position: "relative",
        width: 950,
        height: 675,
        backgroundImage: gridBackground,
        backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        border: "1px solid #aaa",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
}

function DraggableOption({ id, item }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const translate = transform
    ? {
        x: item.position.x + transform.x,
        y: item.position.y + transform.y,
      }
    : item.position;

  return (
    <PreviewTile
      option={{ ...item, id }}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        position: "absolute",
        left: translate.x,
        top: translate.y,
        cursor: "grab",
      }}
    />
  );
}
