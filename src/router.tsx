import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import { Error404, Inicio, Cursos, Publicaciones } from "./pages";
import { cursosLoader, proximosLoader, realizadosLoader } from "./utils";
import { MainLayout } from "./layouts";
import { publicacionesLoader } from "./utils/loaders";


const routes = createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route index element={<Inicio />} />
    <Route path='cursos'>
      <Route index element={<Cursos />} loader={cursosLoader} />
      <Route path="realizados" element={<Cursos />} loader={realizadosLoader}/>
      <Route path="proximos" element={<Cursos />} loader={proximosLoader}/>
    </Route>
    <Route path="publicaciones" element={<Publicaciones />} loader={publicacionesLoader} />
    <Route path='*' element={<Error404 />} />
  </Route>
);

export const router = createBrowserRouter(routes, {basename:"/pagina-fabiana/"})
