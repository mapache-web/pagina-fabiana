import {
    Text,
    Title,
    SimpleGrid,
    TextInput,
    Textarea,
    Button,
    Group,
    ActionIcon,
} from '@mantine/core';
import classes from './contacto.module.css';
import { SOCIAL_MEDIA } from '../../constants';
import { IconType } from 'react-icons';
import { useRef } from 'react';


export function Contacto() {
    const contactoRef = useRef<HTMLDivElement | null>(null);
    const icons = SOCIAL_MEDIA.map(
        (item, index) => {
            const Icon: IconType = item.component;
            return (
                <div
                    key={index} 
                    className={classes.link}
                    // onClick={() => }
                >
                    <ActionIcon 
                        key={index} 
                        size={28}
                        variant="transparent"
                        className={classes.social}
                    >
                        <Icon 
                            className={classes.icon}
                            size="2rem" 
                        >
                        </Icon>
                    </ActionIcon>
                    <Text>{item.name}</Text>
                </div>
                
            )
        }
    );

    return (
        <div className={classes.wrapper} id='contacto' ref={contactoRef}>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
                <div>
                    <Title className={classes.title}>Contacto</Title>
                    <Text className={classes.description} mt="sm" mb={30}>
                        Dejá tu dirección de correo electrónico y te responderé a la brevedad.
                    </Text>
                    <Group className={classes.icons} mt="xl">{icons}</Group>
                </div>
                <div className={classes.form}>
                    <TextInput
                        label="Correo electrónico"
                        placeholder=""
                        required
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <TextInput
                        label="Nombre"
                        placeholder=""
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />
                    <Textarea
                        required
                        label="Tu mensaje"
                        placeholder=""
                        minRows={4}
                        mt="md"
                        classNames={{ input: classes.input, label: classes.inputLabel }}
                    />

                    <Group className={classes.controls} justify="flex-end" mt="md">
                        <Button className={classes.control}>Enviar mensaje</Button>
                    </Group>
                </div>
            </SimpleGrid>
        </div>
    );
}