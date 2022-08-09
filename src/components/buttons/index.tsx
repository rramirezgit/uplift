import { Button as ButtonMui } from "@mui/material";
import React from "react";
import colors from "styles/colors";

interface ButtonProps {
    variant?: "contained" | "outlined" | "text";
    color?: "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue";
    size?: "small" | "medium" | "large";
    width?: number;
    fullWidth?: boolean;
    disabled?: boolean;
    text?: string;
    children?: string;
    height?: number;
    [key: string]: any;
}

export const Button = ({ width = 30,height=10, text = "Button", children = "Button", variant = "contained", color = "purple", ...props }: ButtonProps) => {
    return (
        <ButtonMui
            variant={variant}

            sx={{
                bgcolor: colors[color],
                textTransform: "Capitalize",
                '&:hover': {
                    backgroundColor: colors[color],
                },
                width: `${width}px`,
                height: `${height}px`,

            }}
            {...props}
        >
            {text ? text : children}
        </ButtonMui>
    );
};

;
