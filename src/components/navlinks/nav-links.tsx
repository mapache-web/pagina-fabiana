import { Anchor, Center, Menu } from "@mantine/core";
import { useEffect, useState } from "react";
import { TbChevronDown } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";


const nav = [
  { link: '/', label: 'Inicio' },
  { link: "/sobre-mi", label: 'Sobre mi' },
  { link: '/contacto', label: 'Contacto' },
  {
    link: '#1',
    label: 'Cursos',
    links: [
      { link: '/cursos/proximos', label: 'Próximos cursos' },
      { link: '/cursos/realizados', label: 'Cursos realizados' },
      { link: '/cursos', label: "Todos los cursos" }
    ],
  }
];

export function NavLinks(component: string, linkClassName?: string){
  const {pathname} = useLocation()
  const [active, setActive] = useState(pathname);
  useEffect(() => {
    setActive(pathname)
  })
  switch(component){
    case "header":
      return nav.map(
        (item) => {
          const menuItems = item.links?.map((item) => (
            <Menu.Item 
              component={Link}
              to={item.link}
              key={item.link}
            >
              {item.label}
            </Menu.Item>
          ));
          if (menuItems) return (
             <Menu key={item.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
              <Menu.Target>
                <a
                  className={linkClassName}
                  data-active={active === item.link || undefined}
                >
                  <Center>
                    <span>{item.label}</span>
                    <TbChevronDown />
                  </Center>
                </a>
              </Menu.Target>
              <Menu.Dropdown>{menuItems}</Menu.Dropdown>
            </Menu>
           
          )
          else return(
            <Link
              key={item.label}
              to={item.link}
              className={linkClassName}
              data-active={active === item.link || undefined}
            >
              {item.label}
            </Link>
          )
        }
      )
    case "footer":
      return nav.map(
        (item) => {
          const menuItems = item.links?.map((item) => (
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
          ));
          if (menuItems) return menuItems
          else return (
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
        }
      )
  }
}
