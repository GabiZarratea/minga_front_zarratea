import { configureStore } from "@reduxjs/toolkit";
import mangasReducer from "../redux/reducers/mangas.js";
import mangaReducer from "./reducers/manga.js";
import authReducer from "./reducers/auth.js";
import adminReducer from "./reducers/adminReducer.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    mangas: mangasReducer,
    manga: mangaReducer,
    admin: adminReducer,
  },
})

export default store;
