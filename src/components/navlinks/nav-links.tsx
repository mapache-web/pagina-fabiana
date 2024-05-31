import { Anchor } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


interface INav{
  key: string
  link: string
  label: string
}

const nav: INav[] = [
  { key: "inicio", link: '/', label: 'Inicio' },
  { key: "sobremi", link: "/sobre-mi", label: 'Sobre mi' },
  { key: "contacto", link: '/contacto', label: 'Contacto' }
];

export function NavLinks(component: string, linkClassName?: string){
  const {pathname} = useLocation();
  const [active, setActive] = useState(pathname);
  useEffect(() => {
    setActive(pathname)
  })
  switch(component){
    case "header":
      return nav.map(
        (item) => (
          <Link
            key={item.key}
            to={item.link}
            className={linkClassName}
            data-active={active === item.link || undefined}
          >
            {item.label}
          </Link>
        )
      )
    case "footer":
      return nav.map(
        (item) => (
          <Anchor
            c="dimmed"
            component={Link}
            to={item.link}
            key={item.key}
            lh={1}
            size="sm"
          >
            {item.label}
          </Anchor>
        )
      )
  }
}
