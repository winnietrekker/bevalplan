import React, { useState } from "react";

import FormDrawer from '../components/FormDrawer.jsx';
import Preview from '../components/Preview/Preview.jsx';

import { MyContext } from "../context/MyContext.jsx";
import data2 from "../assets/data.jsx";
import other_data from "../assets/data_2.jsx";

export default function Overview () {
    const [data, setData] = useState(data2);
    const [otherData, setOtherData] = useState(other_data);

    return (
        <div className="container-fluid d-block d-lg-flex p-0 app-container">
            <MyContext.Provider value={{ data, setData, otherData, setOtherData }}>
                <FormDrawer />
                <Preview />
            </MyContext.Provider>
        </div>
    );
};

