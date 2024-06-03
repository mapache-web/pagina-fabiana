import { Container, Group, Burger, Drawer, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './header.module.css';
import { NavLinks } from '../../navlinks/nav-links';


export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <Text size="xl">Fabiana Barroso Psicoanalista</Text>
          <Group gap={5}
          >
            {NavLinks("header", classes.link)}
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