import { Title, Text, Anchor, Group, Button } from '@mantine/core';
import classes from './hero.module.css';


export function Hero() {

  return (
    <div className={classes.hero}>
      <div className={classes.inner}>
        <div>
          <Title className={classes.title}>
            Fabiana Barroso Piscoanalista
          </Title>
          <Text size="lg" className={classes.description}>
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
        </div>
      </div>
      <div className={classes['image-container']}>
        <div className={classes.image}></div>
        <div className={classes.background}></div>
        {/* <Overlay
          gradient="linear-gradient(90deg, rgba(0, 0, 0, 0.95) 20%, rgba(0, 0, 0, .10) 100%)"
          opacity={1}
          zIndex={0}
          className={classes.overlay}
        /> */}
      </div>
    </div>
  );
}