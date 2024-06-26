import { Text, Title, Image, List } from '@mantine/core';
import classes from './sobremi.module.css';
import {EXPERIENCIA} from '../../constants';
import { useRef } from 'react';


export function SobreMi() {
    const sobremiRef = useRef<HTMLDivElement | null>(null);

    return (
        <div ref={sobremiRef} id="sobremi" className={classes.wrapper}>
            <Title className={classes.title}>Sobre mi</Title>
            <br />
            <div className={classes.experiencia}>
                <div className={classes.body}>
                    <Title order={2}>Experiencia</Title>
                    <br />
                    <List spacing={8}>
                        {
                            EXPERIENCIA.map(
                                    (exp, index) => <List.Item key={index}>{exp}</List.Item>
                            )
                        }
                    </List>
                </div> 
                <Image 
                    fallbackSrc='https://placehold.co/300x300?text=Placeholder' 
                    className={classes.image} 
                />
            </div>
            <br />
            <div className={classes.libro}>
                <Image 
                    src="libro.png" 
                    className={classes.image} 
                    h={500}
                    w="auto"
                    fit="contain"
                />
                <div className={classes.body}>
                    <Title order={3}>
                        Autora del libro 
                    </Title>
                    <br />
                    <Text size="lg">
                        Anorexia Mental de la pubertad. Adolescencia, Lenguaje y Cuerpo
                    </Text>
                    <br />
                    <br />
                    <Text ta="center">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut repudiandae amet et, 
                        soluta harum tempora error, unde quibusdam accusamus fugit sequi deleniti? Eligendi, 
                        nesciunt et
                    </Text>
                </div>
            </div>
        </div>
    );
}