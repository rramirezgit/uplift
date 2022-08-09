declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: false; // removes the `xs` breakpoint
        sm: false;
        md: false;
        lg: false;
        xl: false;
        mobile: true; // adds the `mobile` breakpoint
        tablet: true;
        laptop: true;
        desktop: true;
        desktop_lg: true;
    }
    interface IconPaletteColorOptions {
        pdf?: string;
        csv?: string;
    }
    interface PaletteOptions {    
        success?: PaletteColorOptions;
        warning?: PaletteColorOptions;
        icon?: IconPaletteColorOptions;
    }
}