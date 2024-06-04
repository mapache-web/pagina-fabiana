import { CURSOS, PUBLICACIONES } from "../constants"
import { curso } from "../types"


export function cursosLoader() {
    return CURSOS
}

export function proximosLoader() {
    return CURSOS.filter((curso: curso) => !curso.realizado)
}

export function realizadosLoader() {
    return CURSOS.filter((curso: curso) => curso.realizado)
}

export function publicacionesLoader() {
    return PUBLICACIONES
}