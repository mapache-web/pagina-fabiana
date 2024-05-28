import { useState } from 'react';
import { Container, Group, Burger, Anchor } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

const items = [
  { link: '', label: 'Inicio' },
  { link: '/sobre-mi', label: 'Sobre mi' },
  { link: '/contacto', label: 'Contacto' }
];

function Header() {

  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(items[0].link);

  const buttons = items.map((item) => (

    <Anchor 
      component={Link} 
      to={item.link}
      className={classes.link}
      data-active={active === item.link || undefined}
      onClick={() => {
        setActive(item.link);
      }}
      >
      {item.label}
    </Anchor>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>

          <h4>Fabiana Barroso Psicoanalista</h4>
          
          <Group gap={5} visibleFrom="xs">
            {buttons}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
    </>
  );
}


export default Header