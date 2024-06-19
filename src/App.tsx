import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core'
import {theme} from './theme/theme.ts'
import { RouterProvider } from 'react-router-dom'
import { router } from './router.tsx'


export function App() {

  return (
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
  )
}


