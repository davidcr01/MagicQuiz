import React from "react";
import { useState, useEffect } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Button } from "@mui/material";

export const Preguntas = () => {
    const [enviado,setEnviado] = useState(0);
    const [puntuacion,setPuntuacion] = useState(0);
    const [datos,setdatos] = useState(0);

    const enviar = () => {
        //comprobar puntuacion:

        //cambiar estado a enviado
        setEnviado(1);
        setdatos(datos+1);
    }
    useEffect(() => {
        setEnviado(0);
        setPuntuacion(0);
        
    }, [])

    if(enviado === 1){
        return(
            <>
            <Header titulo="Test de prueba"/>
             <h2>Tu puntuación es de: {puntuacion}</h2>
            <Footer/>
            </>
        )
        
    }
    else{
        return (
            <>
            <Header titulo="Test de prueba"/>
            {/* //Header */}
            <h1>Test-Prueba</h1>
            {/* //Cada pregunta */}
            <form onSubmit={enviar}>
                <article style={{border: "solid 1px black"}}>
                    {/* <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}> */}
                        <div style={{width: "max-content", margin: "0 auto"}}>
                        <h2>Marca los personajes de DBZ</h2>
                        </div>
                        <div style={{width: "max-content", margin: "0 auto"}}>
                        <input type="checkbox" name="goku"/>Goku <br/>
                        <input type="checkbox" name="goku"/>Vegeta777 <br/>
                        <input type="checkbox" name="goku"/>Gohan <br/>
                        </div>
                        <br/>
                    {/* </div> */}
                </article>

                <br/>

                <article style={{border: "solid 1px black"}}>
                <div style={{width: "max-content", margin: "0 auto"}}>
                    <h2>¿Hay un dragon en DBZ?</h2>
                    </div>
                    <div style={{width: "max-content", margin: "0 auto"}}>
                    <input type="radio" name="goku2"/>Verdadero <br/>
                    <input type="radio" name="goku2"/>Falso <br/>
                    </div>
                    <br/>
                </article>
                
                <br/>
            <Button variant="contained" onClick={()=>enviar()}>Enviar</Button>
            </form>
            {/* //Boton enviar */}
            {/* <input type="submit" value="Enviar" /> */}
            <Footer/>
            </>
        )
    }
}