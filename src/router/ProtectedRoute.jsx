import React from "react";
import { Navigate } from "react-router-dom";
import Register from "../pages/Register";
import MangaDetails from "../pages/MangaDetail";
import SignIn from "../pages/Signin";
import Mangas from "../pages/Mangas";
import MangaForm from "../components/MangaForm";
import Chapter from "../pages/chapter";

//Protección de Regitro
export const ProtectedRoute = () => {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return !isLoggedIn() && <Register />;
};

//Protección de Login
export const ProtectedSignIn = () => {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return !isLoggedIn() && <SignIn />;
};

//Protección de Mangas
export function ProtectedRouteMangas() {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return isLoggedIn() && <Mangas />;
}

//Protección de Manga Details
export function ProtectedRouteMangaDetail() {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return isLoggedIn() && <MangaDetails />;
}

//Protección de New Manga
export function ProtectedRouteNewManga() {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return isLoggedIn() && <MangaForm />;
}

//Proteccion Read Manga
export function ProtectedReadManga() {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return isLoggedIn() && <Chapter />;
}
