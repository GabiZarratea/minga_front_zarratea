import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";
import mangaReducer from "./reducers/manga.js";

const store = configureStore({
  reducer: {
    mangas: mangasReducer,
    manga: mangaReducer
  },
})

export default store;
