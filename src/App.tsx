import './App.css'
import { Routes, Route } from "react-router-dom"
import {Inicio, Contacto, SobreMi, Error404} from './pages/index.ts'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import {theme} from './theme/theme.ts'
import {Header, Footer} from './components/index.ts'


export function App() {

  return (
    <>
      <MantineProvider theme={theme}>
        <Header></Header>
        <Routes>
          <Route path="/" element={ <Inicio /> } />
          <Route path="/sobre-mi" element={ <SobreMi /> } />
          <Route path="/contacto" element={ <Contacto /> } />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer></Footer>
      </MantineProvider>
    </>
  )
}