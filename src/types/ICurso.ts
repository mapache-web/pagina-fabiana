export interface ICurso {
    fechapub: Date
    titulo: string
    descripcion: string
    subtitulos: string[]
    parrafos: string[]
    assets: string[]
    realizado: boolean
    fechainicio?: Date
    fechafin?: Date
}