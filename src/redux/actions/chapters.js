import { createAction } from "@reduxjs/toolkit";

export const chapterDataAction = createAction(
  `chapterData`, //nombre de la accion
  (object) => {
    return {
      payload: {
        number: object.page,
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
