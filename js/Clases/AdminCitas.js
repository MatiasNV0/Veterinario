import { setIDcita } from "../variable.js";
import { EditarCita } from "../funciones.js";
import { notificaciones } from "./Notificaciones.js";

export default class AdminCitas {
    constructor(){
        this.citas = [];
    }

    agregarCita(cita){
        this.citas=[...this.citas, cita];
        this.mostrarCita();
    }

    mostrarCita(){
        const listaCitas = document.querySelector("#citas");

        while(listaCitas.firstChild){
            listaCitas.removeChild(listaCitas.firstChild);
        }

        if(this.citas.length === 0){
            const noPacientes = document.createElement("P");
            noPacientes.classList.add("text-xl", "mt-5", "mb-10", "text-center");
            noPacientes.textContent="No Hay Pacientes";
            listaCitas.appendChild(noPacientes);
        }


        this.citas.forEach(cita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-10', 'bg-white', 'shadow-md', 'px-5', 'py-10' ,'rounded-xl', 'p-3');
        
            const paciente = document.createElement('p');
            paciente.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            paciente.innerHTML = `<span class="font-bold uppercase">Paciente: </span> ${cita.nombrePaciente}`;
        
            const propietario = document.createElement('p');
            propietario.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            propietario.innerHTML = `<span class="font-bold uppercase">Propietario: </span> ${cita.nombrePropietario}`;
        
            const email = document.createElement('p');
            email.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            email.innerHTML = `<span class="font-bold uppercase">E-mail: </span> ${cita.emailContacto}`;
        
            const fecha = document.createElement('p');
            fecha.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            fecha.innerHTML = `<span class="font-bold uppercase">Fecha: </span> ${cita.fecha}`;
        
            const sintomas = document.createElement('p');
            sintomas.classList.add('font-normal', 'mb-3', 'text-gray-700', 'normal-case')
            sintomas.innerHTML = `<span class="font-bold uppercase">Síntomas: </span> ${cita.sintomas}`;

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('Editar','py-2', 'px-10', 'bg-indigo-600', 'hover:bg-indigo-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEditar.innerHTML = 'Editar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>'
            
            const clone = structuredClone(cita);
            
            btnEditar.onclick = (()=> {
                setIDcita(EditarCita(clone)); // Update IDcita using the function
            });

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('Borrar','py-2', 'px-10', 'bg-red-600', 'hover:bg-red-700', 'text-white', 'font-bold', 'uppercase', 'rounded-lg', 'flex', 'items-center', 'gap-2');
            btnEliminar.innerHTML = 'Eliminar <svg fill="none" class="h-5 w-5" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'

            btnEliminar.onclick = (()=> {
                this.eliminarCita(clone);
                notificaciones.MostrarMensajes("Error","Cita eliminada");
            });

            const contenedorBotones = document.createElement("DIV");
            contenedorBotones.classList.add("flex","justify-between","mt-10");

            contenedorBotones.appendChild(btnEditar);
            contenedorBotones.appendChild(btnEliminar);

            // Agregar al HTML
            divCita.appendChild(paciente);
            divCita.appendChild(propietario);
            divCita.appendChild(email);
            divCita.appendChild(fecha);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            listaCitas.appendChild(divCita);
        });   
    }

    editarCita(citaActualizada){
        this.citas=this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.mostrarCita();
    }

    eliminarCita(citaBorrar){
        this.citas=this.citas.filter( cita => cita.id !== citaBorrar.id);
        this.mostrarCita();
    }

}

export const citas = new AdminCitas();