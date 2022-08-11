import { ElipseLeft, ElipseRigth, Logo, Start } from "assets";
import { Button, Carrousel } from "components";
import "./styles.css"

export const Home = () => {
    return (
        <div className="home">
            <nav className="nav-home">
                <Logo className="logo-home" />
                <div className="content-buttons-home">
                    <Button color="purple" width={152.88} height={45} text={"log in"}/>
                    <Button color="red" width={221.08} height={45} text={"Request invite "} />
                </div>
            </nav>
            <ElipseLeft className="elipse-left-home" />
            <ElipseRigth className="elipse-rigth-home" />
            <Start className="start-one-home" />
            <Start className="start-two-home" />
            <Start className="start-three-home" />
                <div className="title-home">
                    Entertainment tech made easy
                </div>
                <div className="info-home">
                    Empowering artists own the end to end process
                    of their services via one single platform
                </div>
            <div className="content-carrousel">
                <Carrousel />
            </div>
        </div>);
};
