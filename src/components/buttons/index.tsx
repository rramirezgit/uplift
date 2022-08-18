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
    className?: string;
    onClick?: any;
    [key: string]: any;
}

export const Button = ({
    width,
    height = 47.48,
    text = "Button",
    children = "Button",
    variant = "contained",
    color = "none",
    className = "",
    onClick,
    ...props
}: ButtonProps) => {
    return (
        <div>
            <ButtonMui
                onClick={onClick}
                className={`${className}`}
                variant={variant}
                sx={{
                    color: variant === "text" ? colors[color] : "white",
                    borderColor: colors[color],
                    borderWidth: 1,
                    bgcolor: color !== "none" ? colors[color] : "",
                    textTransform: "Capitalize",
                    '&:hover': {
                        backgroundColor: color !== "none" ? colors[color] : "",
                        borderColor: colors[color],
                    },
                    width: !width ? "max-content" : `${width}px`,
                    height: `${height}px`,

                }}
                {...props}
            >
                {text ? text : children}
            </ButtonMui>
        </div>
    );
};

;
