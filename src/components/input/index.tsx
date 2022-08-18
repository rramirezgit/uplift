import { InputBase } from '@mui/material';
import './styles.css'

interface InputProps {
    className?: string;
    pholder?: string;
    type?: "text" | "password" | "email" | "number" | "tel" | "search" | "url" | "date" | "time" | "datetime-local" | "month" | "week" | "color";
    onChange?: any;
}

export const Input = ({ className = "", pholder = "input", type = "text", onChange }: InputProps) => {
    return (

        <div className={`${className} input-uplift`}>
            <InputBase
                onChange={(e) => onChange(e)}
                type={type}
                sx={{
                    ml: 1,
                    flex: 1,
                    color: "white",
                    width: "100%",
                    height: "100%",
                }}
                placeholder={pholder}
                inputProps={{ 'aria-label': `${pholder}` }}
            />
        </div>
    );
};
