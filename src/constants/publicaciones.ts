import { publicacion } from "../types"


export const PUBLICACIONES: publicacion[] = [
    {
        fechapub: new Date("03/06/2024"),
        titulo: "Publicación de ejemplo",
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
            }
        ]
    }
]