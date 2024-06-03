import { useLoaderData } from "react-router-dom";


export function Cursos(){
    const cursos = useLoaderData()
    return(
        <>
           <p>{JSON.stringify(cursos)}</p>
        </>
    )
}