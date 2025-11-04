import React, { useState } from "react";

import FormDrawer from '../components/FormDrawer.jsx';
import Preview from '../components/Preview/Preview.jsx';

import { MyContext } from "../context/MyContext.jsx";
import data2 from "../assets/data.jsx";

export default function Overview () {
    const [data, setData] = useState(data2);
    const [name, setName] = useState(["My name", true, false, false]);
    const [mostImportant, setMostImportant] = useState("My most important wishes");

    return (
        <div className="container-fluid d-block d-lg-flex p-0 app-container">
            <MyContext.Provider value={{ data, setData, name, setName, mostImportant, setMostImportant }}>
                <FormDrawer />
                <Preview />
            </MyContext.Provider>
        </div>
    );
};

