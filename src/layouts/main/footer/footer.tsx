import { Group, ActionIcon, Anchor } from '@mantine/core';
import classes from './footer.module.css';
import { NAV_LINKS } from '../../../constants';
import { Link } from 'react-router-dom';


export function Footer() {
  const items = NAV_LINKS.map(
    (item) => (
      <Anchor
        c="dimmed"
        component={Link}
        to={item.link}
        key={item.label}
        lh={1}
        size="sm"
      >
        {item.label}
      </Anchor>
    )
  )
  
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <h4>Fabiana Barroso Psicoanalista</h4>
        <Group className={classes.links}>
          {items}
        </Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}