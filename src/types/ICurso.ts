export interface ICurso {
    fechapub: Date
    titulo: string
    descripcion: string
    parrafos: string[]
    imgs: string[]
    realizado: boolean
    fechainicio?: Date
    fechafin?: Date
}
