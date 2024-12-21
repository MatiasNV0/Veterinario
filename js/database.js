import { citas } from "./Clases/AdminCitas.js";

export const DB = {
    value: null,
};

export function crearDB(){
    let crearDB = window.indexedDB.open('citas',1);

    crearDB.onerror = function () {
        console.log("Error");
    }

    crearDB.onsuccess = function () {
        console.log("Creada");
        DB.value = crearDB.result; 
        citas.mostrarCita();
    }

    crearDB.onupgradeneeded = function (e){
        const db = e.target.result;

        const objectStore = db.createObjectStore('citas',{
            keyPath: 'id',
            autoIncrement: true
        });

        objectStore.createIndex('nombrePaciente','nombrePaciente',{unique: false});
        objectStore.createIndex('nombrePropietario','nombrePropietario',{unique: false});
        objectStore.createIndex('emailContacto','emailContacto',{unique: false});
        objectStore.createIndex('fecha','fecha',{unique: false});
        objectStore.createIndex('sintomas','sintomas',{unique: false});
        objectStore.createIndex('id','id',{unique: false});
    }
}