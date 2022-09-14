import gsap from "gsap";
import { useLayoutEffect, useState } from 'react';
import { useMedia } from "hooks/useMedia";
import "./styles.css"
import eros from 'assets/imageList/erosRamazzotti.png';
import frame from 'assets/imageList/Frame1.png';
import wy from 'assets/imageList/wy.png';
import juanes from 'assets/imageList/juanes.png';
import olgaTañon from 'assets/imageList/olgaTañon.png';
import anakena from 'assets/imageList/anakena.png';
import morat from 'assets/imageList/morat.png';
import af from 'assets/imageList/af.png';
import anaTorroja from 'assets/imageList/anaTorroja.png';
import cProfetica from 'assets/imageList/cProfetica.png';

//agregar solo 12 imagenes
const images = [eros, frame, morat, wy, juanes, af, olgaTañon , anakena, anaTorroja, cProfetica, eros, juanes];

export const ImageList = ({ opacity }: any) => {

    const {mobile} = useMedia()
    const [state, setstate] = useState<any>({
        currentImg: undefined,
        currentImgProps: { x: 0, y: 0 },
        isZooming: false,
        mouse: { x: 0, y: 0 },
        delayedPlay: undefined
    });


    function playBoxes() {
        //@ts-ignore
        for (let i = 0; i < document.querySelector('.mainBoxes')?.children.length; i++) {
            //@ts-ignore
            let tl = document.querySelector('.mainBoxes').children[i].tl;
            tl.play();
            gsap.to(tl, { duration: 0.4, timeScale: 1, ease: 'sine.in', overwrite: true });
        }
    }

    useLayoutEffect(() => {

        let column = -1

        for (let i = 0; i < 12; i++) {

            if (i % 4 === 0) column++;

            let b = document.createElement('div');
            document.querySelector('.mainBoxes')?.appendChild(b);

            gsap.set(b, {
                attr: { id: 'b' + i, class: 'photoBox pb-col' + column },
                backgroundImage: 'url(' + images[i] + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                x: [60, 280, 500][column],
                width: 400,
                height: 660,
                borderRadius: 20,
                scale: 0.5,
                zIndex: 1
            });
            //@ts-ignore
            b.tl = gsap.timeline({ paused: true, repeat: -1 })
                .fromTo(b, { y: [-575, 800, 800][column], rotation: -0.05 }, { duration: [60, 45, 36][column], y: [800, -575, -575][column], rotation: 0.05, ease: 'none' })
                .progress(i % 4 / 4)
        }
        addEventListeners()

    }, []);

    const addEventListeners = () => {
        //@ts-ignore
        let _tl = gsap.timeline({ onStart: playBoxes })
            .set('.main', { perspective: 800 })
            .set('.photoBox', { opacity: 1 })
            .set('.mainBoxes', { left: mobile ? '-133px' : '-93px', xPercent: 0, width: 1200, rotationX: 0, rotationY: 0, rotationZ: 0 })
            .set('.mainClose', { autoAlpha: 0, width: 60, height: 60, left: -30, top: -31, pointerEvents: 'none' })
            .fromTo('.main', { autoAlpha: 0 }, { duration: 0.6, ease: 'power2.inOut', autoAlpha: 1 }, 0.2)
        console.log(_tl);
        document.querySelectorAll('.photoBox').forEach((node) => {
            node?.addEventListener('mouseenter', (e) => {
                //@ts-ignore
                console.log(e.currentTarget?.className.includes('pb-col0'))
                if (state.currentImg) return;
                if (state.delayedPlay) state.delayedPlay.kill();
                // pauseBoxes(e.currentTarget);
                let _t = e.currentTarget;
                gsap.to('.photoBox', { duration: 0.2, overwrite: 'auto', opacity: function (i, t) { return (t === _t) ? 1 : 0.33 } });
                gsap.fromTo(_t, { zIndex: 100 }, { duration: 0.2, scale: 0.62, overwrite: 'auto', ease: 'power3' });
            });
        });

        document.querySelectorAll('.photoBox').forEach((node) => {
            node?.addEventListener('mouseleave', function (e) {
                if (state.currentImg) return;
                let _t = e.currentTarget;

                if (gsap.getProperty(_t, 'scale') > 0.62) setstate({ ...state, delayedPlay: gsap.delayedCall(0.3, playBoxes) }); // to avoid jump, add delay when mouseout occurs as big image scales back down (not 100% reliable because the scale value sometimes evaluates too late)
                else playBoxes();

                gsap.timeline()
                    .set(_t, { zIndex: 1 })
                    .to(_t, { duration: 0.3, scale: 0.5, overwrite: 'auto', ease: 'expo' }, 0)
                    .to('.photoBox', { duration: 0.5, opacity: 1, ease: 'power2.inOut' }, 0);
            });
        });

        if (!!('ontouchstart' in window)) {
            console.log('touch device!')
            setstate({ ...state, mouse: { ...state.mouse, x: window.innerWidth - 50 } });
            setstate({ ...state, mouse: { ...state.mouse, y: window.innerWidth - 60 } });
        }
        else {
            document.querySelector('.main')?.addEventListener('mousemove', function (e: any) {
                //@ts-ignore
                setstate({ ...state, mouse: { ...state.mouse, x: e.x } });
                //@ts-ignore
                setstate({ ...state, mouse: { ...state.mouse, x: e.layerY } });

                if (state.currentImg) gsap.to('.mainClose', { duration: 0.1, x: e.x, y: e.layerY, overwrite: 'auto' });
            });
        }
    }

    return (
        <div className="constent-list-img" style={{opacity}}>
            <div className="main">
                <div className="mainBoxes fs"></div>
                <div className="mainClose">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
                        <circle cx="30" cy="30" r="30" fill="#000" opacity="0.4" />
                        <path d="M15,16L45,46 M45,16L15,46" stroke="#000" strokeWidth="3.5" opacity="0.5" />
                        <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" strokeWidth="2" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ImageList
