import { Group, ActionIcon, Anchor } from '@mantine/core';
import classes from './footer.module.css';
import { LINKS, SOCIAL_MEDIA } from '../../../constants';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';

export function Footer() {
  const socialMedia = SOCIAL_MEDIA.map(
    (item, index) => {
      const Icon: IconType = item.component;
      return(
        <ActionIcon
          key={index}
          size={32}
          // onClick={() => }
          className={classes.icons}
        >
          <Icon
            className={classes.icon}
            size="2rem" 
          />
        </ActionIcon>
      )
    }
  )
  const links = LINKS.map(
    (item) => (
      (
        <Anchor
          component={Link}
          className={classes.link}
          to={item.link}
          key={item.label}
          lh={1}
          size="sm"
        >
          {item.label}
        </Anchor>
      )
    )
  )
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <h4>Fabiana Barroso Psicoanalista</h4>
        <Group className={classes.links}>
          {links}
        </Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          {socialMedia}
        </Group>
      </div>
    </div>
  );
}