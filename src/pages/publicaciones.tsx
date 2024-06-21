import { rem, Title } from "@mantine/core"
// import { useLoaderData } from "react-router-dom"

export function Publicaciones(){
    // const publicaciones = useLoaderData()
    return(
        <div
            style={{
                marginTop: rem(56),
                minHeight: rem(400),
                padding: rem(30)
            }}
        >
            <Title c={'violet'}>
                Publicaciones
            </Title>
        </div>
    )
}