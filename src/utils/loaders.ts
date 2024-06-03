import { ICurso } from "../types/ICurso"


export async function cursosLoader() {
    return fetch("../../data/cursos.json")
    .then((response) => response.json())
    .then((data) => data)
}

export async function proximosLoader() {
    return fetch("../../data/cursos.json")
    .then((response) => response.json())
    .then((data) => data.filter((curso: ICurso) => !curso.realizado))
}

export async function realizadosLoader() {
    return fetch("../../data/cursos.json")
    .then((response) => response.json())
    .then((data) => data.filter((curso: ICurso) => curso.realizado))
}

