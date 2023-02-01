import React from 'react';
import { Button } from "@mui/material";

const CrearPregunta = () =>{
    return (
        <div className="formuser">
        <form>
            <div className="form-group">
                <p>
                    <label className="etiq" htmlFor="pregunta">Pregunta</label>
                    <input type="text" id="pregunta"/>
                </p>
                <p>
                    <label className="etiq" htmlFor="genero">Tipo de pregunta</label>
                    <select defaultValue={0} id="genero">
                        <option value="0"  disabled>Elige un tipo</option>
                        <option value="1">Arte</option>
                        <option value="2">Música</option>
                        <option value="3">Deportes</option>
                        <option value="4">Ciencia</option>
                        <option value="5">Entretenimiento</option>
                        <option value="6">Geografía</option>
                    </select>
                </p>
                <p>
                    <label className="etiq" htmlFor="respuesta1">Respuesta 1</label>
                    <input type="text" id="respuesta1"/>
                </p>
                <p>
                    <label className="etiq" htmlFor="respuesta2">Respuesta 2</label>
                    <input type="text" id="respuesta2"/>
                </p>
                <p>
                    <label className="etiq" htmlFor="respuesta3">Respuesta 1</label>
                    <input type="text" id="respuesta3"/>
                </p>
    
            </div>
            <Button variant="contained">Enviar</Button>
                </form>
    
    </div>
    )
}
export default CrearPregunta;