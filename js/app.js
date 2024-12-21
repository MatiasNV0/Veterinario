import { RegistrarPaciente } from "./funciones.js";
import { formRegistrar } from "./selectores.js";


document.addEventListener("DOMContentLoaded", ()=>{
    formRegistrar.addEventListener('submit', RegistrarPaciente);
});
