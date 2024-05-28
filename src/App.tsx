import './App.css'
import { Routes, Route } from "react-router-dom"
import Inicio from './pages/inicio.tsx'
import Contacto from './pages/contacto.tsx'
import SobreMi from './pages/sobremi.tsx'
import Error404 from './pages/error404.tsx'
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import theme from './theme/theme.ts'
import Header from './components/header/header.tsx'


function App() {

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
      </MantineProvider>
    </>
  )
}

export default App
