import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, Flex } from '@mantine/core';
import classes from './publicaciones-carousel.module.css';
import { PUBLICACIONES } from '../../constants';
import { publicacion } from '../../types';
import { Link } from 'react-router-dom';


function Card(publicacion: publicacion) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            className={classes.card}
        >
            <div>
                <Text className={classes.fecha} size="xs">
                    {publicacion.fecha}
                </Text>
                <Title order={2} className={classes.publicaciontitle}>
                    {publicacion.titulo}
                </Title>
                <br />
                <Text>
                    {publicacion.descripcion}
                </Text>
            </div>
            <Flex className={classes.link} justify='center'>
                <Button color={'violet'}>
                    Leer
                </Button>
            </Flex>
        </Paper>
    );
}

export function PublicacionesCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = PUBLICACIONES.map((item) => (
        <Carousel.Slide key={item.id}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <div className={classes.wrapper}>
            <Flex className={classes.encabezado} justify='space-between'>
                <Title className={classes.title}>Últimas publicaciones</Title>
                <Button 
                    visibleFrom='sm' 
                    className={classes.boton} 
                    color={'violet'}
                    component={Link}
                    to={'/publicaciones'}
                >
                    Publicaciones
                </Button>
            </Flex>
            <br />
            <Carousel
                slideSize={{ base: '100%', sm: '50%' }}
                slideGap={{ base: 0, sm: 'md' }}
                align="start"
                controlSize={50}
                slidesToScroll={mobile ? 1 : 2}
            >
                {slides}
            </Carousel>
            <Button hiddenFrom='sm' className={classes.botonabajo} color={'violet'}>Publicaciones</Button>
        </div>
    );
}
