import { createReducer } from "@reduxjs/toolkit";
import { chapterDataAction } from "../actions/chapters";

let initialState = {
  //variable de estado inicial
  title: "",
  number: 1,
};
const reducer = createReducer(
  initialState,
  (
    builder //funcion builder
  ) =>
    builder.addCase(chapterDataAction, (state, action) => {
      //addcase añade un caso de accion para el builder
      const newState = {
        ...state, // operador spread copia propiedades del estado actual
        title: action.payload.title, //actualiza los valores
        number: action.payload.number, //number es el numero pagina
      };

      return newState; //return nuevo estado actualizado
    })
);
export default reducer;
