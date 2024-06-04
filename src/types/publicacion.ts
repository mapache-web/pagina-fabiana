type seccion = {
    subtitulo?: string,
    parrafos: string[],
    assets: string[]
}

export type publicacion = {
    fechapub: Date
    titulo: string
    descripcion: string
    secciones: seccion[]
}