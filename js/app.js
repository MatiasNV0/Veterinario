import { RegistrarPaciente } from "./funciones.js";
import { formRegistrar } from "./selectores.js";
import { crearDB } from "./database.js";


document.addEventListener("DOMContentLoaded", ()=>{
    formRegistrar.addEventListener('submit', RegistrarPaciente);
    crearDB();
});
