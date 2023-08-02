import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
import Swal from "sweetalert2";
import { LS } from "../../utils/localStorageUtils";

const manga_read = createAsyncThunk("manga_read", async () => {
  try {
    const token = LS.get("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let res = await axios(apiUrl + "api/mangas/me", headers);

    return {
      manga: res.data.response,
    };
  } catch (error) {
    next(error);
  }
});

const manga_delete = createAsyncThunk("manga_delete", async ({ id }) => {
  // funcion de utilidad de redux para crear acciones async
  try {
    const token = LS.get("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = apiUrl + "api/mangas/" + id; //construye una url
    let res = await axios.delete(url, headers); //realiza solicitud DELETE- a la url
    console.log(res);
    return {
      manga_id: id,
    };
  } catch (error) {
    return {
      manga: [],
    };
  }
});

const manga_update = createAsyncThunk("manga_update", async ({ id, data }) => {
  try {
    const token = LS.get("token");
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    let url = apiUrl + "mangas/" + id;
    let res = await axios.put(url, data, headers);
    console.log(res.data.manga);
    return {
      manga: res.data.manga,
    };
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: error.response.data.message,
    });
  }
});

const actions = { manga_read, manga_delete, manga_update };

export default actions;
