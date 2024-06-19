type seccion = {
    subtitulo?: string,
    parrafos: string[],
    assets: string[]
}

export type publicacion = {
    id: number
    fecha: string
    titulo: string
    descripcion: string
    secciones: seccion[]
}