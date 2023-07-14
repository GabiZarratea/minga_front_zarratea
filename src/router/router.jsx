import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Main from "../layouts/Main";
import SignIn from "../pages/Signin";
import Index from "../pages/Index";
import Welcome from "../pages/NotAllow";
import { ProtectedRoute, ProtectedSignIn, ProtectedRouteMangaDetail, ProtectedRouteMangas, ProtectedReadManga } from "./ProtectedRoute";
import FormManga from "../pages/Manga-Form";
import Mangas from "../pages/Mangas";
import MangaDetail from "../pages/MangaDetail";
import Chapter from "../pages/chapter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/mangas",
        element: (
          <ProtectedRouteMangas>
            <Mangas />
          </ProtectedRouteMangas>
        ),
      },
      {
        path: "/manga/:id",
        element: (
          <ProtectedRouteMangaDetail>
            <MangaDetail />
          </ProtectedRouteMangaDetail>
        ),
      },
      {
        path: "/NotAllow",
        element: <Welcome />,
      },
      {
        path: "/signin",
        element: (
          <ProtectedSignIn>
            <SignIn />
          </ProtectedSignIn>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        path: "/manga-form",
        element: <FormManga />,
      },
      {
        path: "/Chapter/:id/:page",
        // element: <Chapter />,

        element: (
          <ProtectedReadManga>
            <Chapter />
          </ProtectedReadManga>
        ),
      },
    ],
  },
]);

export default router;
