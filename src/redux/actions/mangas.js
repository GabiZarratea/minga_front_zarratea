import { createAction } from "@reduxjs/toolkit";

export const setFilters = createAction("mangas/setFilters");
export const setCategories = createAction("mangas/setCategories");
export const setMangas = createAction("mangas/setMangas");
export const setPagination = createAction("mangas/setPagination");
export const captureText = createAction("mangas/captureText");
export const captureChecks = createAction("mangas/captureChecks");
const mangasFilter = createAction("token", (objeto) => {
  return {
    payload: {
      title: objeto.title,
      category: objeto.category_id,
      categoriesChecked: objeto.categoriesChecked,
    },
  };
});
const actions = { mangasFilter };
export default actions;
