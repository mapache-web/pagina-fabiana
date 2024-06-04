type seccion = {
    subtitulo?: string,
    parrafos: string[],
    assets: string[]
}

export type curso = {
    fechapub: Date
    titulo: string
    descripcion: string
    secciones: seccion[]
    realizado: boolean
    fechainicio?: Date
    fechafin?: Date
}