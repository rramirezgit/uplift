const Button = lazy(() => import('../../components/buttons'))
const Input = lazy(() => import('../../components/input'))

import { ReactComponent as ElipseLeft } from "assets/elipses/elipse_home_left.svg";
import { ReactComponent as ElipseRigth } from "assets/elipses/elipse_home_rigth.svg";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Start } from "assets/star.svg";
import { Formik } from "formik";
import * as Yup from 'yup';


import { useState, useEffect, lazy } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store";
import { login } from "store/slices/auth";
import "./styles.css"

const Login = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state: RootState) => state.auth);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
 
    useEffect(() => {
    
      return () => {
        setLoading(false);
      };
    }, []);
    

    useEffect(() => {
        if (status === "authenticated") {
            let path = "/"
            navigate(path)
        }
    }, [status]);

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
                <Formik
                    initialValues={{
                        password: '',
                    }}
                    onSubmit={(values,formikHelpers) => {
                        setLoading(true);
                        if (values.password === "uplift123") {
                            dispatch(login())
                        } else {
                            setLoading(false);
                            formikHelpers.setErrors({ password: "Invalid password"})
                        }
                    }}
                    validationSchema={Yup.object({
                        password: Yup.string()
                            .required('Required'),
                    })}>
                    {({ submitForm, touched, values }) => (
                        <>
                            <Input
                                pholder="Password"
                                type="password"
                                className="input-login"
                                name={"password"}
                            />
                            <Button
                                loading={loading}
                                color="red"
                                type="submit"
                                className="button-login"
                                text={"Enter"}
                                onClick={submitForm}
                            />
                        </>
                    )}
                </Formik>
            </div>

        </div>);
};

export default Login;
