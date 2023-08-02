import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const categoriesRead = createAsyncThunk("categoriesRead", async () => {
  try {
    let res = await axios(apiUrl + "api/categories");
    return { categories: res.data.categories };
  } catch (error) {
    console.log(error);
    return {
      categories: [],
    };
  }
});

const actions = { categoriesRead };
export default actions;
