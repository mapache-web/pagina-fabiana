import { IPublicacion } from "../types/IPublicacion"


export const publicaciones: IPublicacion[] = [
    {
        fechapub: new Date("03/06/2024"),
        titulo: "Publicación de ejemplo",
        descripcion: "Este es un ejemplo de curso proximo para probar si la página funciona bien",
        subtitulos: [
            "subtitulo 1",
            "subtitulo 2"
        ],
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