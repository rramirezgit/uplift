import { Button as ButtonMui } from "@mui/material";
import React from "react";
import colors from "styles/colors";

interface ButtonProps {
    variant?: "contained" | "outlined" | "text";
    color?: "purple" | "red" | "light_blue" | "yellow" | "orange" | "core_blue" | "dark_blue" | "none";
    size?: "small" | "medium" | "large";
    width?: number;
    fullWidth?: boolean;
    disabled?: boolean;
    text?: string;
    children?: string;
    height?: number;
    [key: string]: any;
}

export const Button = ({ width = 123.96, height = 47.48, text = "Button", children = "Button", variant = "contained", color = "none", ...props }: ButtonProps) => {
    return (
        <ButtonMui
            variant={variant}
            sx={{
                color: variant === "text" ? colors[color] : "",
                borderColor: colors[color],
                bgcolor: color !== "none" ? colors[color] : "",
                textTransform: "Capitalize",
                '&:hover': {
                    backgroundColor: color !== "none" ? colors[color] : "",
                    borderColor: colors[color],
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
