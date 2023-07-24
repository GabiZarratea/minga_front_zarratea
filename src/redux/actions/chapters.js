import { createAction } from "@reduxjs/toolkit";

export const chapterDataAction = createAction(
  //funcion createActiondefine el objeto de datos de la accion chapterDataAction
  `chapterData`, //nombre de la accion
  (object) => {
    return {
      payload: {
        number: object.page, //number es el numero de pagina
        title: object.title,
      },
    };
  }
);
// export const mangaIdAction = createAction(
//   `mangaIdAction`, //nombre de la accion
//   (object) => {
//     return {
//       payload: {
//         mangaId: object.mangaId,
//       },
//     };
//   }
// );

// const actions = { chapterData };
// export default actions;
