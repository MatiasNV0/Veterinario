import { formRegistrar } from './selectores.js';

export let editando = false;
export let IDcita = 0;
export const buttonSubmit = formRegistrar[5];

export function setEditando(value) {
    editando = value;
}

export function setIDcita(newID) {
    IDcita = newID;
}
