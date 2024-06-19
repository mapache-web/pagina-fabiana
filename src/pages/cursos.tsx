import { rem, Title } from "@mantine/core";
import { ScrollRestoration } from "react-router-dom";
// import { useLoaderData } from "react-router-dom";


export function Cursos(){
    // const cursos = useLoaderData()
    return(
        <div
            style={{
                marginTop: rem(56),
                minHeight: rem(400),
                padding: rem(30)
            }}
        >
           <Title c={'violet'}>
                Cursos
           </Title>
           <ScrollRestoration />
        </div>
    )
}