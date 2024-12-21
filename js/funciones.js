import { editando, IDcita, buttonSubmit, setEditando } from "./variable.js";
import { citas } from "./Clases/AdminCitas.js";
import { notificaciones } from "./Clases/Notificaciones.js";

export function RegistrarPaciente(e){
    e.preventDefault();

    const nombrePaciente = (document.querySelector('#paciente').value.trim());
    const nombrePropietario = (document.querySelector('#propietario').value.trim());
    const emailContacto = (document.querySelector('#email').value.trim()).toLowerCase();
    const fecha = (document.querySelector('#fecha').value.trim());
    const sintomas = (document.querySelector('#sintomas').value.trim());

    const Paciente = {
        nombrePaciente, 
        nombrePropietario,
        emailContacto,
        fecha,
        sintomas,
    }

    console.log(Paciente);

    if( Object.values(Paciente).includes('')){
        notificaciones.MostrarMensajes('Error','Todos los campos son obligarios');
    }
    else{
        notificaciones.MostrarMensajes('Correcto','Registro Exitoso');
        if(editando){
            Paciente.id = IDcita;
            citas.editarCita(Paciente);
            notificaciones.MostrarMensajes("Correcto","Registro Actualizado Exitosamente");
            setEditando(false);
            buttonSubmit.value = "Registrar Paciente";
        }
        else{
            Paciente.id = Date.now();
            citas.agregarCita(Paciente);
        }
    }
    console.log(citas.citas);
}

export function EditarCita(cita) {
    setEditando(true);
    buttonSubmit.value = "Editar Paciente";

    const fields = {
        paciente: 'nombrePaciente',
        propietario: 'nombrePropietario',
        email: 'emailContacto',
        fecha: 'fecha',
        sintomas: 'sintomas'
    };

    const ID = cita.id; 

    for (const [id, prop] of Object.entries(fields)) {
        const element = document.querySelector(`#${id}`);
        if (element) {
            element.value = cita[prop];
        }
    }

    return ID;
}

