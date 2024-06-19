import { Title, Text, Container, Anchor, Group, Button } from '@mantine/core';
import classes from './hero.module.css';


export function Hero() {

  return (
    <Container className={classes.wrapper} size={1400}>

      <div className={classes.inner}>
        <Title className={classes.title}>
          Fabiana Barroso Piscoanalista
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c={'dimmed'} className={classes.description}>
            Licenciada en Psicología de la UBA y 40 años de trayectoria profesional
            trabajando para instituciones, en consultorio privado y en investigación.
          </Text>
          <Group className={classes.controls}>
            <Anchor href='#sobremi'>
              <Button variant='default' className={classes.control}>
                Sobre mi
              </Button>
            </Anchor>
            <Anchor href="#contacto">
              <Button variant='default' className={classes.control}>
                Contacto
              </Button>
            </Anchor>
          </Group>
        </Container>
      </div>
    </Container>
  );
}