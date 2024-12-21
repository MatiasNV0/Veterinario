import { formRegistrar } from "../selectores.js";

export default class Notificaciones {
    MostrarMensajes(tipo,mensaje){
        const alerta = document.createElement('DIV');
        alerta.classList.add("text-center","w-full","p-3","text-white","my-5","alert","uppercase","font-bold","text-sm");

        const alertaPrevia = document.querySelector(".alert");
        alertaPrevia?.remove();

        tipo === 'Error' ? alerta.classList.add("bg-red-500") : (alerta.classList.add("bg-green-500"), formRegistrar.reset());

        alerta.textContent=mensaje;

        formRegistrar.parentElement.insertBefore(alerta, formRegistrar);

        setTimeout(()=>{
            alerta.remove();
        },3000);
    }
}

export const notificaciones = new Notificaciones();