import React, { useState } from "react";

import { Typography } from '@mui/material';
import FormDrawer from '../components/FormDrawer.jsx';
import PlanView from '../components/GridDragField.jsx';
import Preview from '../components/Preview.jsx';

import preview_items from "../components/preview_items.jsx";
import { MyContext } from "../context/MyContext.jsx";

export default function Overview () {
    const initialItems = preview_items.options;
    const [items, setItems] = useState(initialItems);

    return (
        <div className="container-fluid d-block d-lg-flex p-0 app-container">
            <MyContext.Provider value={{ items, setItems }}>
                <FormDrawer />
                <Preview />
            </MyContext.Provider>
        </div>
    );
};

