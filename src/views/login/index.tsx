import { ElipseLeft, ElipseRigth, Logo, Start } from "assets";
import { Button, Input } from "components";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { login } from "store/slices/auth";
import "./styles.css"

export const Login = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state: RootState) => state.auth);
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [code, setCode] = useState("");

    const handleClik = () => {
        setLoading(true);
        setTimeout(() => {
            if (code === "uplift123") {
                dispatch(login())
            } else {
                setLoading(false);
            }
        }, 1500);
    }

    useEffect(() => {
        if (status === "authenticated") {
            navigate("/")
        }
    }, [status]);


    const handleChange = (e: any) => {
        setCode(e.target.value);
    }

    return (
        <div className="login">
            <nav className="nav-login">
                <Logo className="logo-login" />
            </nav>
            <ElipseLeft className="elipse-left-login" />
            <ElipseRigth className="elipse-rigth-login" />
            <Start className="start-one-login start" />
            <Start className="start-two-login" />
            <Start className="start-three-login" />
            <div className="content-data__login">

            </div>
            <div className="form-login">
                <div style={{ width: "56%" }}>
                    <div className="title-login">
                        Coming soon!!...
                    </div>
                    <div className="info-login">
                        Empowering artists own the end to end process
                        of their services via one single platform
                    </div>
                </div>
                <Input pholder="Code" type="password" className="input-login" onChange={handleChange} />
                <Button loading={loading} color="red" className="button-login" text={"Enter"} onClick={handleClik} />
            </div>

        </div>);
};
