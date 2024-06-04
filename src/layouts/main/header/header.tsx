import { Container, Group, Burger, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { navLinks } from '../../../constants';


export function Header() {
  const {pathname} = useLocation()
  const [active, setActive] = useState(pathname);
  useEffect(() => {
    setActive(pathname)
  })
  const [opened, { toggle, close }] = useDisclosure(false);
  const items = navLinks.map(
    (item) => {
      return(
        <Link
          key={item.label}
          to={item.link}
          className={classes.link}
          data-active={active === item.link || undefined}
        >
          {item.label}
        </Link>
      )
    }
  )
  const navigate = useNavigate();
  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Text 
          size="xl"
          onClick={() => navigate('')}
          className={classes.logo}
          >
            Fabiana Barroso Psicoanalista
          </Text>
          <Group gap={5}
          >
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
      </Drawer>
    </>
  );
}