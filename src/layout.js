import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "./component/pages/home";
import {About}from "./component/pages/about"
import {Contact} from "./component/pages/contact"
import {Proyect} from "./component/pages/proyect"
import {Tecnologia} from "./component/pages/tecnologia"
import {Footer} from "./component/footer";
import {Navbar} from "./component/navbar";
import injectContext from "./store/appContext.js";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>


                    <Navbar/>
                <Routes>
                    <Route element={<Home/>} path="/" />
                    <Route element={<About/>} path="/about"/>
                    <Route element={<Contact/>} path="/contact"/>
                    <Route element={<Proyect/>} path="/proyect"/>
                    <Route element={<Tecnologia/>} path="/tecnologia"/>
                    




                    <Route element={<h1>Not found!</h1>} />
                </Routes>


            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
