type seccion = {
    subtitulo?: string,
    parrafos: string[],
    assets: string[]
}

export type curso = {
    id: number
    fechapub: string
    titulo: string
    descripcion: string
    secciones: seccion[]
    realizado: boolean
    fechainicio?: string
    fechafin?: string
}