import gsap from "gsap";
import { useEffect, useLayoutEffect, useState } from 'react';
import eros from 'assets/imageList/erosRamazzotti.png';
import frame from 'assets/imageList/Frame1.png';
import ana from 'assets/imageList/anakena.png';
import "./styles.css"
import { useMedia } from "hooks";

const images = [eros, frame, ana, frame, eros, ana, eros, frame, ana, frame, eros, frame];

export const ImageList = ({ opacity }: any) => {

    const {mobile} = useMedia()
    const [state, setstate] = useState<any>({
        currentImg: undefined,
        currentImgProps: { x: 0, y: 0 },
        isZooming: false,
        mouse: { x: 0, y: 0 },
        delayedPlay: undefined
    });



    //@ts-ignore

    function pauseBoxes(b) {
        let classStr = 'pb-col0';
        if (b.className.includes('pb-col1')) classStr = 'pb-col1';
        if (b.className.includes('pb-col2')) classStr = 'pb-col2';
        //@ts-ignore
        for (let i = 0; i < 12; i++) {
            //@ts-ignore
            let b = document.querySelector('.mainBoxes').children[i];
            //@ts-ignore

            if (b?.className.includes(classStr)) gsap.to(b.tl, { timeScale: 0, ease: 'sine' });
        }
    }

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
                height: 640,
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

        // document.querySelectorAll('.photoBox').forEach((node) => {
        //     node?.addEventListener('click', function (e) {
        //         if (!state.isZooming) { //only tween if photoBox isn't currently zooming

        //             setstate({ ...state, isZooming: true });
        //             gsap.delayedCall(0.8, function () { setstate({ ...state, isZooming: false }) });

        //             if (state.currentImg) {
        //                 gsap.timeline({ defaults: { ease: 'expo.inOut' } })
        //                     .to('.mainClose', { duration: 0.1, autoAlpha: 0, overwrite: true }, 0)
        //                     .to('.mainBoxes', { duration: 0.5, scale: 1, left: '75%', width: 1200, rotationX: 14, rotationY: -15, rotationZ: 10, overwrite: true }, 0)
        //                     .to('.photoBox', { duration: 0.6, opacity: 1, ease: 'power4.inOut' }, 0)
        //                     .to(state.currentImg, { duration: 0.6, width: 400, height: 640, borderRadius: 20, x: state.currentImgProps.x, y: state.currentImgProps.y, scale: 0.5, rotation: 0, zIndex: 1 }, 0)
        //                 // .add(playBoxes, 0.8)
        //                 setstate({ ...state, currentImg: undefined });
        //             }

        //             else {
        //                 pauseBoxes(e.currentTarget)

        //                 setstate({ ...state, currentImg: e.currentTarget });
        //                 //@ts-ignore
        //                 setState({ ...state, currentImgProps: { ...state.currentImgProps, x: gsap.getProperty(e.currentTarget, 'x') } });
        //                 //@ts-ignore
        //                 setState({ ...state, currentImgProps: { ...state.currentImgProps, y: gsap.getProperty(e.currentTarget, 'y') } });

        //                 gsap.timeline({ defaults: { duration: 0.6, ease: 'expo.inOut' } })
        //                     .set(e.currentTarget, { zIndex: 100 })
        //                     .fromTo('.mainClose', { x: state.mouse.x, y: state.mouse.y, background: 'rgba(0,0,0,0)' }, { autoAlpha: 1, duration: 0.3, ease: 'power3.inOut' }, 0)
        //                     .to('.photoBox', { opacity: 0 }, 0)
        //                     .to(e.currentTarget, { width: '100%', height: '100%', borderRadius: 0, x: 0, top: 0, y: 0, scale: 1, opacity: 1 }, 0)
        //                     .to('.mainBoxes', { duration: 0.5, left: '50%', width: '100%', rotationX: 0, rotationY: 0, rotationZ: 0 }, 0.15)
        //                     .to('.mainBoxes', { duration: 5, scale: 1.06, rotation: 0.05, ease: 'none' }, 0.65)
        //             }
        //         }
        //     });
        // });

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
                        <path d="M15,16L45,46 M45,16L15,46" stroke="#000" stroke-width="3.5" opacity="0.5" />
                        <path d="M15,15L45,45 M45,15L15,45" stroke="#fff" stroke-width="2" />
                    </svg>

                </div>
            </div>
        </div>
    );
};
