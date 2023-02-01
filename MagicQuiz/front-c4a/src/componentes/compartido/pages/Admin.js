import React from "react";
import Header from '../Layout/Header.js';
import Footer from "../Layout/Footer.js";
import CrearPregunta from "../Layout/CrearPregunta.js"

export const Admin = () => {
    return (
        <>
            <Header titulo="Crear pregunta"/>
                {/* <div className='PantallaGestionUsuarios'> */}
                    <CrearPregunta/>
            <Footer />        
        </>
    )
}