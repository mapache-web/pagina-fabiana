import { ICurso } from "../types";

export const cursos: ICurso[] = [
    {   
        fechapub: new Date("01/06/2024"),
        titulo: "Curso proximo de ejemplo",
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
        ],
        realizado: false,
        fechainicio: new Date("10/07/2024"),
        fechafin: new Date("20/08/2024")
    },
    {   
        fechapub: new Date("01/06/2024"),
        titulo: "Curso realizado de ejemplo",
        descripcion: "Este es un ejemplo de curso realizado para probar si la página funciona bien",
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
        ],
        realizado: true,
        fechainicio: new Date("10/07/2024"),
        fechafin: new Date("20/08/2024")
    }
    
]