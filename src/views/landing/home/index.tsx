import { Drawer, IconButton } from "@mui/material";
import { ElipseLeft, ElipseRigth, Logo, MenuIcon, Start } from "assets";
import { Button, Carrousel } from "components";
import { useState } from "react";
import "./styles.css"


export const Home = () => {

    const [open, setOpen] = useState(false);

    const handleDMouseEnter = (e: any) => {
        const buttonPrev = document.querySelector('.prev-btn-custom') as HTMLElement
        const buttonNext = document.querySelector('.next-btn-custom') as HTMLElement
        buttonPrev.style.display = 'block'
        buttonNext.style.display = 'block'
        setTimeout(() => {
            buttonPrev.style.opacity = '0.1'
            buttonNext.style.opacity = '0.1'
        }, 5);
        setTimeout(() => {
            buttonPrev.style.opacity = '0.2'
            buttonNext.style.opacity = '0.2'
        }, 10);
        setTimeout(() => {
            buttonPrev.style.opacity = '0.4'
            buttonNext.style.opacity = '0.4'
        }, 20);
        setTimeout(() => {
            buttonPrev.style.opacity = '0.8'
            buttonNext.style.opacity = '0.8'
        }, 25);
        setTimeout(() => {
            buttonPrev.style.opacity = '01'
            buttonNext.style.opacity = '01'
        }, 30);
    }
    const handleDMouseLeave = (e: any) => {
        const buttonPrev = document.querySelector('.prev-btn-custom') as HTMLElement
        const buttonNext = document.querySelector('.next-btn-custom') as HTMLElement
        buttonPrev.style.transition = 'all 0.5s ease-in-out'
        buttonNext.style.opacity = '0'
        setTimeout(() => {
            buttonPrev.style.opacity = '1'
            buttonNext.style.opacity = '1'
        }, 5);
        setTimeout(() => {
            buttonPrev.style.opacity = '0.8'
            buttonNext.style.opacity = '0.8'
        }, 10);
        setTimeout(() => {
            buttonPrev.style.opacity = '0.4'
            buttonNext.style.opacity = '0.4'
        }, 20);
        setTimeout(() => {
            buttonPrev.style.opacity = '0.2'
            buttonNext.style.opacity = '0.2'
        }, 25);
        setTimeout(() => {
            buttonPrev.style.opacity = '0'
            buttonNext.style.opacity = '0'
            buttonPrev.style.display = 'none'
            buttonNext.style.display = 'none'
        }, 30);

    }
    return (
        <div className="home">
            <nav className="nav-home">
                <Logo className="logo-home" />
                <div className="content-buttons-home">
                    <Button color="purple" width={152.88} height={45} text={"log in"} />
                    <Button color="red" width={221.08} height={45} text={"Request invite "} />
                </div>
                <IconButton className="menu-icon">
                    <MenuIcon onClick={() => setOpen(true)} />
                </IconButton>
            </nav>
            <ElipseLeft className="elipse-left-home" />
            <ElipseRigth className="elipse-rigth-home" />
            <Start className="start-one-home start" />
            <Start className="start-two-home" />
            <Start className="start-three-home" />
            <div className="content-data__home">
                <div className="title-home">
                    Entertainment tech made easy
                </div>
                <div className="info-home">
                    Empowering artists own the end to end process
                    of their services via one single platform
                </div>
            </div>
            <div className="content-carrousel" onMouseEnter={handleDMouseEnter} onMouseLeave={handleDMouseLeave}>
                <Carrousel />
            </div>

            <Drawer
                anchor={"right"}
                open={open}
                classes={{
                    paper: "drawer-home",
                }}
                onClose={() => setOpen(false)}
            >
                {
                    <div className="content-menu-mobile">
                        <div className="title-mobile-menu">
                            Join now!
                        </div>
                        <div className="buttons-mobile-menu" >

                            <Button color="purple" width={149.37} height={43} text={"log in"} />
                            <Button color="red" width={149.37} height={43} text={"Request invite "} />
                        </div>
                    </div>
                }
            </Drawer>
        </div>);
};
