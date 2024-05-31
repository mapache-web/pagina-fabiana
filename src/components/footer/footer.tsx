import { Group, ActionIcon } from '@mantine/core';
import classes from './footer.module.css';
import { NavLinks } from '../navlinks/nav-links';


export function Footer() {
  
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <h4>Fabiana Barroso Psicoanalista</h4>
        <Group className={classes.links}>
          {NavLinks("footer")}
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