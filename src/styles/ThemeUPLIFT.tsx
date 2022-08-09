import { createTheme, ThemeProvider } from '@mui/material';
import { ReactElement } from 'react';

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 90.4596
                },
            },

        },

    },
});

interface ThemeProps {
    children?: ReactElement | ReactElement[];
}

export default function ThemeUPLIFT({ children }: ThemeProps) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
