import { rem, Title } from "@mantine/core";

export function Error404() {

    return (
        <div
            style={{
                marginTop: rem(56),
                minHeight: rem(400),
                padding: rem(30)
            }}
        >
            <Title c={'violet'}>
                Error 404
            </Title>
        </div>
    )

}


