import { Text, Title, Button, List, Accordion } from '@mantine/core';
import classes from './cursos-banner.module.css';
import { CURSOS } from '../../constants';
import { Link } from 'react-router-dom';
import { curso } from '../../types';


function CursosLinks(cursos: curso[]){
  return (
    <>
      <List
      >
        { 
          cursos.map((curso) => 
            <List.Item
            key={curso.id}
            >
              <Link
                to={`/cursos/${curso.id}`}
                className={classes.link}
                key={curso.id}
              >
                {curso.titulo}
              </Link>
            </List.Item>
          )
        }
      </List>
    </>
  )
}

const proxCursos: curso[] = CURSOS.filter((curso: curso) => !curso.realizado)
const cursosAnteriores: curso[] = CURSOS.filter((curso: curso) => curso.realizado)

function CursosAccordion() {

  return (
    <Accordion color={'violet'} defaultValue="Próximos">
      <Accordion.Item key={"anteriores"} value={"Anteriores"}>
        <Accordion.Control>
          Anteriores
        </Accordion.Control>
        <Accordion.Panel>
          {CursosLinks(cursosAnteriores)}
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item key={"proximos"} value={"Próximos"}>
        <Accordion.Control>
          Próximos
        </Accordion.Control>
        <Accordion.Panel>
         {CursosLinks(proxCursos)}
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}

export function CursosBanner() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Cursos</Title>
        <br />
        <Text fw={500} fz="lg" mb={5}>
            xxxxxxxx, xxxxxxxxxx xxxxxxx y xxxxxxxxx
        </Text>
        <br />
        <Text fz="sm" c="dimmed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate autem fuga odit error numquam minus quas repellat, 
          ex quae nobis expedita adipisci nisi, blanditiis vero sunt fugit incidunt similique aperiam.

        </Text>
        <br />
        <Button 
          className={classes.boton} 
          color={'violet'} 
          component={Link}
          to='/cursos'
        >
          Cursos
        </Button>
      </div>
      <div className={classes.links}>
        <CursosAccordion />
      </div>
      <br />
      <br />
    </div>
  );
}