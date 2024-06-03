import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import { Contacto, Error404, Inicio, SobreMi, Cursos } from "./pages";
import { Layout } from "./components";
import { cursosLoader, proximosLoader, realizadosLoader } from "./utils";

const routes = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<Inicio />} />
    <Route path='contacto' element={<Contacto />} />
    <Route path='sobre-mi' element={<SobreMi />} />
    <Route path='cursos'>
      <Route index element={<Cursos />} loader={cursosLoader} />
      <Route path="realizados" element={<Cursos />} loader={realizadosLoader}/>
      <Route path="proximos" element={<Cursos />} loader={proximosLoader}/>
    </Route>
    <Route path='*' element={<Error404 />} />
  </Route>
);

export const router = createBrowserRouter(routes)