import React from "react";
import { Navigate } from "react-router-dom";
import Register from "../pages/Register";
import MangaDetails from "../pages/MangaDetail";
import SignIn from "../pages/Signin";
import Mangas from "../pages/Mangas";
import MangaForm from "../components/MangaForm";
import { LS } from "../utils/localStorageUtils";

const ProtectedRoute = () => {
  const token = LS.get("token");

  const isLoggedIn = () => {
    return token;
  };

  if (isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }

  return <Register />;
};

const ProtectedSignIn = () => {
  const token = LS.get("token");

  const isLoggedIn = () => {
    return token;
  };

  if (isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }

  return <SignIn />;
};

const ProtectedRouteMangas = () => {
  const token = LS.get("token");

  const isLoggedIn = () => {
    return token;
  };

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }

  return <Mangas />;
};

const ProtectedRouteMangaDetail = () => {
  const token = LS.get("token");

  const isLoggedIn = () => {
    return token;
  };

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }

  return <MangaDetails />;
};

const ProtectedRouteNewManga = () => {
  const token = LS.get("token");

  const isLoggedIn = () => {
    return token;
  };

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }

  return <MangaForm />;
};
//Proteccion Read Manga
const ProtectedReadManga = () => {
  const isLoggedIn = () => localStorage.getItem("token") && localStorage.getItem("user");

  if (!isLoggedIn()) {
    return <Navigate to={"/NotAllow"} />;
  }
  return isLoggedIn() && <Chapter />;
};

export { ProtectedRoute, ProtectedSignIn, ProtectedRouteMangas, ProtectedRouteMangaDetail, ProtectedRouteNewManga, ProtectedReadManga };
