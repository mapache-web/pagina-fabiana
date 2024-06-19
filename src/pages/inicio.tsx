import { ScrollRestoration } from "react-router-dom";
import { 
  Contacto,
  CursosBanner, FixedButton, Hero, PublicacionesCarousel, SobreMi
} from "../components";


export function Inicio() {
  
  return (
    <>
      <Hero />
      <CursosBanner />
      <PublicacionesCarousel />
      <SobreMi />
      <FixedButton />
      <Contacto />
      <ScrollRestoration />
    </>
  )
}