import { cursos, publicaciones } from "../constants"
import { ICurso } from "../types/ICurso"


export function cursosLoader() {
    return cursos
}

export function proximosLoader() {
    return cursos.filter((curso: ICurso) => !curso.realizado)
}

export function realizadosLoader() {
    return cursos.filter((curso: ICurso) => curso.realizado)
}

export function publicacionesLoader() {
    return publicaciones
}