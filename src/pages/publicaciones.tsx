import { useLoaderData } from "react-router-dom"

export function Publicaciones(){
    const publicaciones = useLoaderData()
    return(
        <>
            <p>{JSON.stringify(publicaciones)}</p>
        </>
    )
}