import React from "react";
import {Route, Routes } from 'react-router-dom';
import Home from "./home";
import About from "./about";
import Math from "./forms/math";
import Form from "./forms/f1";
import Total from "./forms/Totcal";
import Average from "./forms/Caltol";
const Body=()=>{
    return(
        <>
        <div className="col-md-10">
            <div className="text-center">
                <Routes>
                    <Route path="Home" element={<Home/>}> </Route>
                    <Route path="About" element={<About/>}> </Route>
                    <Route path="Math" element={<Math/>}></Route>
                    <Route path="Form" element={<Form/>}></Route>
                    <Route path="Total" element={<Total/>}></Route>
                    <Route path="Average" element={<Average/>}></Route>
                </Routes>
            </div>
        </div>
        </>
    )
}
    

export default Body;