import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";
import mangaReducer from "./reducers/manga.js";
import chapterReducer from "./reducers/chapter.js";

const store = configureStore({
  reducer: {
    mangas: mangasReducer,
    manga: mangaReducer,
    chapter: chapterReducer,
  },
});

export default store;
