import { curso } from "../types";

export const CURSOS: curso[] = [
    {   
        id: 1,
        fechapub: "01/06/2024",
        titulo: "Curso proximo de ejemplo",
        descripcion: "Este es un ejemplo de curso proximo para probar si la página funciona bien",
        secciones: [
            {
                subtitulo: "subtitulo 1",
                parrafos: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut, alias doloribus ab aliquid, minus quia esse, non iste reprehenderit cumque et placeat fugiat repellat ex corrupti amet necessitatibus illo",
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut, alias doloribus ab aliquid, minus quia esse, non iste reprehenderit cumque et placeat fugiat repellat ex corrupti amet necessitatibus illo."
                ],
                assets: [
                    "/",
                    "/"
                ]
            },
            {
                subtitulo: "subtitulo 2",
                parrafos: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut, alias doloribus ab aliquid, minus quia esse, non iste reprehenderit cumque et placeat fugiat repellat ex corrupti amet necessitatibus illo",
                ],
                assets: [
                    "/"
                ]
            }
        ],
        realizado: false,
        fechainicio: "10/07/2024",
        fechafin: "20/08/2024"
    },
    {   
        id: 2,
        fechapub: "01/06/2024",
        titulo: "Curso realizado de ejemplo",
        descripcion: "Este es un ejemplo de curso realizado para probar si la página funciona bien",
        secciones: [
            {
                subtitulo: "subtitulo 1",
                parrafos: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut, alias doloribus ab aliquid, minus quia esse, non iste reprehenderit cumque et placeat fugiat repellat ex corrupti amet necessitatibus illo."
                ],
                assets: [
                    "/"
                ]
            },
            {
                subtitulo: "subtitulo 2",
                parrafos: [
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur aut, alias doloribus ab aliquid, minus quia esse, non iste reprehenderit cumque et placeat fugiat repellat ex corrupti amet necessitatibus illo",
                ],
                assets: [
                    "/"
                ]
            }
        ],
        realizado: true,
        fechainicio: "10/07/2024",
        fechafin: "20/08/2024"
    },
    
]