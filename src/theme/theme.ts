import { createTheme, Title } from '@mantine/core';
import { colors } from './colors';


export const theme = createTheme(
    {
        colors: {
            violet: colors.violeta,
            orange: colors.orange,
            cyan: colors.cyan,
            teal: colors.teal
        },
        headings: {
            fontFamily: 'Georgia, serif'
        },
        fontFamily: "Vardana, sans-serif"
    }
);