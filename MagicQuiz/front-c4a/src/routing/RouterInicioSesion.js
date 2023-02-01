import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { SesionAlumnosClases} from '../componentes/compartido/pages/SesionAlumnosClases';
import { SesionAlumnos} from '../componentes/alumnos/pages/SesionAlumnos';
import { Admin } from '../componentes/compartido/pages/Admin';
import { Preguntas } from '../componentes/compartido/pages/Preguntas';
import { SesionProfesores } from '../componentes/compartido/pages/SesionProfesores';

export const RouterInicioSesion = () => {
    return (
        <BrowserRouter>

        <Routes>
            <Route path="/" element={<SesionProfesores />} />
            <Route path='/preguntas' element={<Preguntas/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path="*" element={<><h1>404 Inicio Sesión</h1></>}  />
            {/* <Route path="/otra-pagina" element={<OtraPagina />} /> */}
        </Routes>

        </BrowserRouter>
    );
}
