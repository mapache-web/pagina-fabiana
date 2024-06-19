import { useWindowScroll } from '@mantine/hooks';
import { GoArrowUp } from "react-icons/go";
import { ActionIcon, Affix, Transition, rem } from '@mantine/core';
import classes from './affix.module.css'


export function FixedButton() {
    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Affix className={classes.boton} position={{ bottom: 20, right: 20 }}>
                <Transition transition="slide-up" mounted={scroll.y > 300}>
                    {() => (
                        <ActionIcon
                            className={classes.button}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            <GoArrowUp 
                                style={{ 
                                    width: rem(32), 
                                    height: rem(32)
                                }} 
                            />
                        </ActionIcon>
                    )}
                </Transition>
            </Affix>
        </>
    );
}