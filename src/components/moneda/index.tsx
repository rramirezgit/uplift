import gsap from 'gsap';
import './styles.css'
import { useEffect, useLayoutEffect, useState } from 'react';
import { MotionPathPlugin, ScrollTrigger } from 'gsap/all';
import monedaFront from '../../assets/monedaFront.png'
import monedaBack from '../../assets/monedaBack.png'
import Bubble from '../../assets/Bubble.png'
import BubbleP from '../../assets/BubbleP.png'
import miniBubbleP from '../../assets/miniBubbleP.png'
import miniBubble from '../../assets/miniBubble.png'
import { useMedia } from 'hooks';

gsap.registerPlugin(MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)

export const MonedaGsad = () => {
    const { large, size } = useMedia()
    const [isRotate, setisRotate] = useState(false)

    useLayoutEffect(() => {
        initGsadMoneda()
        document.querySelector('.moneda-box')?.addEventListener('click', setEvents)
    }, []);

    useEffect(() => {
        initGsadMoneda()
    }, [size]);


    useEffect(() => {
        console.log(isRotate);
    }, [isRotate]);

    const setEvents = () => {
        if (document.querySelector('.monedaW')?.className.includes("monedaW-click")) {
            setisRotate(true)
            document.querySelector('.monedaW')?.classList.remove("monedaW-click")
            for (var i = 0; i < document.querySelectorAll('.planeta')?.length; i++) {
                document.querySelectorAll('.planeta')[i]?.classList.remove("planeta-P")
            }
            for (var i = 0; i < document.querySelectorAll('.card-moneda')?.length; i++) {
                document.querySelectorAll('.card-moneda')[i]?.classList.remove("card-moneda-P")
            }
            for (var i = 0; i < document.querySelectorAll('.mini-planeta')?.length; i++) {
                document.querySelectorAll('.mini-planeta')[i]?.classList.remove("mini-planeta-P")
            }
            document.querySelector('.line-moneda-4')?.classList.remove("line-moneda-4-P")
            document.querySelector('.line-moneda-3')?.classList.remove("line-moneda-3-P")
            document.querySelector('.line-moneda-2')?.classList.remove("line-moneda-2-P")



        } else {
            setisRotate(false)

            document.querySelector('.monedaW')?.classList.add("monedaW-click")
            for (var i = 0; i < document.querySelectorAll('.planeta')?.length; i++) {
                document.querySelectorAll('.planeta')[i]?.classList.add("planeta-P")

            }
            for (var i = 0; i < document.querySelectorAll('.card-moneda')?.length; i++) {
                document.querySelectorAll('.card-moneda')[i]?.classList.add("card-moneda-P")
            }
            for (var i = 0; i < document.querySelectorAll('.mini-planeta')?.length; i++) {
                document.querySelectorAll('.mini-planeta')[i]?.classList.add("mini-planeta-P")
            }
            document.querySelector('.line-moneda-4')?.classList.add("line-moneda-4-P")
            document.querySelector('.line-moneda-3')?.classList.add("line-moneda-3-P")
            document.querySelector('.line-moneda-2')?.classList.add("line-moneda-2-P")
        }
    }


    const initGsadMoneda = () => {

        const timeLine = gsap.timeline({ defaults: { duration: 30 } })
            
            .add('orbs', 1.2)
            .add(function () {
                document.querySelector('.main1')?.addEventListener('mousemove', function (e: any) {
                });
                document.querySelector('.moneda-box')?.addEventListener('click', function (e: any) {

                });
            }, 'orbs+=0.5')
            .fromTo('.orb1', { xPercent: -35, yPercent: -5 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line2', false)[0] as any },
                    start: 1.03,
                    end: 1.22
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')

            .fromTo('.orb2', { xPercent: -45, yPercent: -10 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line2', false)[0] as any },
                    start: 1.49,
                    end: 1.65
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')


            .fromTo('.orb3c', { xPercent: -45, yPercent: -15 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line2', false)[0] as any },
                    start: 1.80,
                    end: 1.95
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')

            .fromTo('.orb4c', { xPercent: -45, yPercent: -15 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line2', false)[0] as any },
                    start: 1.30,
                    end: 1.35
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')

            .fromTo('.orb5c', { xPercent: -170, yPercent: -15 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line4', false)[0] as any },
                    start: 1.70,
                    end: 1.75
                }, ease: 'none', yoyo: false, repeat: -1
            }, 'orbs')

            .fromTo('.orb6c', { xPercent: 100, yPercent: 0 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line4', false)[0] as any },
                    start: 0.70,
                    end: 0.75
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')

            .fromTo('.orb7c', { xPercent: 0, yPercent: -50 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line4', false)[0] as any },
                    start: 0,
                    end: 0.10
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')

            .fromTo('.orb8c', { xPercent: -125, yPercent: 80 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line4', false)[0] as any },
                    start: 1.60,
                    end: 1.65
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')

            .fromTo('.orb9c', { xPercent: -100, yPercent: 0 }, {
                motionPath: {
                    path: function () { return MotionPathPlugin.convertToPath('.c1_line4', false)[0] as any },
                    start: 1.40,
                    end: 1.45
                }, ease: 'none', yoyo: true, repeat: -1
            }, 'orbs')
            .fromTo('.m1Orb', { scale: 0, transformOrigin: '50% 50%' }, { duration: 0.8, scale: 1.5, ease: 'back.out(3)', stagger: 0.15, overwrite: 'auto' }, 'orbs')
            .fromTo('.m1Orb2', { scale: 0 }, { duration: 0.8, scale: 1, ease: 'back.out(3)', stagger: 0.15, overwrite: 'auto' }, 'orbs')
            .fromTo('.m1OrbBlank', { opacity: 0 }, { duration: 0.8, opacity: function (i) { return 0.2 + i / 7 }, stagger: 0.1, overwrite: 'auto' }, 'orbs')
            .fromTo('.m1OrbBlank', { x: function (i) { return 620 - i / 4 * 380 }, transformOrigin: function (i) { return -(620 - i / 4 * 380) + 'px 0px' }, rotation: function (i) { return [99, -10, 55, 110, 120][i] } }, { rotation: '+=75', yoyo: true, repeat: -1 }, 'orbs')
          
    }


    return (
        <div className='content-prueba'>

            <div className="center-moneda">
                <div className='m1_cGroup moneda-box'>
                    <div className="monedaW">
                        <div className='blur-moneda'></div>
                        <div className="cara">
                            <img loading='lazy' width="200px" height="200px" src={monedaFront}  title="Click me!!.."/>
                        </div>
                        <div className="cara back">
                            <img loading='lazy' width="200px" height="200px" src={monedaBack} title="Click me!!.." />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-moneda-gsap">
                <svg className="main1" width="100%" height="100%">
                    <defs>
                        <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="100%">
                        </linearGradient>
                        <linearGradient id="grad2" x1="50%" y1="0%" x2="50%" y2="100%">
                            <stop offset="99%" style={{ stopColor: "#121E45", stopOpacity: "1" }} />
                        </linearGradient>
                    </defs>

                    <linearGradient id="grad112233" x1="546.114" y1="161.438" x2="161.753" y2="464.621" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#99690F" stopOpacity="0" />
                        <stop offset="1" stopColor="#99690F" />
                    </linearGradient>

                    <linearGradient id="grad1456" x1="344.6" y1="49.2007" x2="344.6" y2="649.213" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#66460A" />
                        <stop offset="1" stopColor="#66460A" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint0_linear_736_5139" x1="185.752" y1="0.0494232" x2="185.752" y2="443.28" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#EA4BAF" />
                        <stop offset="1" stopColor="#66460A" stopOpacity="0" />
                    </linearGradient>
                    <defs>
                        <linearGradient id="paint0_linear_736_5137" x1="318.617" y1="30.9598" x2="34.6884" y2="254.922" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#EA4BAF" stopOpacity="0" />
                            <stop offset="1" stopColor="#EA4BAF" />
                        </linearGradient>
                    </defs>


                    <rect className="m1Bg" fill="url(#grad2)" width="100%" height="100%" />

                    <g className="m1_stage" opacity="0">
                        <g className="m1_cGroup">
                            <circle className="m1OrbBlank" cx="0" cy="50" r="50" fill="#1290ff" />


                            <circle className="line-moneda-4 c1_line c1_line4" cx="0" cy="50" r="280" fill="none" strokeWidth="2" opacity="0.4" strokeDasharray="8.47 8.47" />
                        </g>
                        <g className="m1_cGroup">
                            <circle className="m1OrbBlank" cx="0" cy="50" r="25" fill="#983334" />

                            <circle className="line-moneda-3 c1_line c1_line3" cx="0" cy="35" r="200" fill="none" strokeWidth="2" opacity="0.4" />
                        </g>
                        <g className="m1_cGroup">
                            <circle className="m1OrbBlank" cx="0" cy="50" r="15" fill="#653997" />
                            <circle className="line-moneda-2 c1_line c1_line2" cx="-3" cy="26" r="127" fill="none" strokeWidth="2" opacity="0.5" />
                            <g className="m1Orb orb2">
                                <circle className="planeta" cx="18.5" cy="7" r="24.5" />
                            </g>
                            <g className="m1Orb orb3c">
                                <circle className="planeta" cx="36" cy="0" r="30" />
                            </g>
                            <g className="m1Orb orb4c">
                                <circle className="mini-planeta" cx="21" cy="0" r="30" />
                            </g>


                        </g>
                        {!large &&
                            <>
                                <g className="m1Orb2 orb9c">
                                    <g className="card-moneda" >
                                        <rect x="17" y="10" width="259" height="142" rx="18.2596" fill="#121E45" />
                                    </g>
                                    {
                                        isRotate ?
                                            <>
                                                <text className="card-title-moneda">Exclusive Experiences</text>
                                                <text className="card-text-moneda">Offer specific experiences to
                                                    <tspan x="0" y="20">your most loyal fans. Perhaps a </tspan>
                                                    <tspan x="0" y="40">live stream or a dinner date </tspan>
                                                </text>
                                            </>
                                            :
                                            <>

                                                <text className="card-title-moneda">Monetize your projects</text>
                                                <text className="card-text-moneda">More projects, more tokens, more
                                                    <tspan x="0" y="20">revenue. That simple</tspan>
                                                </text>
                                            </>
                                    }
                                </g>
                                <g className="m1Orb2 orb5c">
                                    <g className="card-moneda" >
                                        <rect x="17" y="10" width="259" height="142" rx="18.2596" fill="#121E45" />
                                    </g>

                                    {
                                        isRotate ?
                                            <>
                                                <text className="card-title-moneda">Decision making</text>
                                                <text className="card-text-moneda">Be more inclusive. Involve them
                                                    <tspan x="0" y="20">in decisions like merch design  </tspan>
                                                    <tspan x="0" y="40">and tour cities and dates </tspan>
                                                </text>
                                            </>
                                            :
                                            <>

                                                <text className="card-title-moneda">Unified experience</text>
                                                <text className="card-text-moneda">Integrate in a simple way tokens
                                                    <tspan x="0" y="20">with experiences like never before.</tspan>
                                                </text>
                                            </>
                                    }
                                </g>
                                <g className="m1Orb2 orb6c">
                                    <g className="card-moneda" >
                                        <rect x="17" y="10" width="259" height="142" rx="18.2596" fill="#121E45" />
                                    </g>
                                    {
                                        isRotate ?
                                            <>
                                                <text className="card-title-moneda">Premium Rewards</text>
                                                <text className="card-text-moneda">Reward them with free tickets
                                                    <tspan x="0" y="20">or merch discount and remind </tspan>
                                                    <tspan x="0" y="40">them how special they are </tspan>
                                                </text>
                                            </>
                                            :
                                            <>

                                                <text className="card-title-moneda">Sponsors</text>
                                                <text className="card-text-moneda">Gain access to a wide and
                                                    <tspan x="0" y="20">exclusive network whether is an</tspan>
                                                    <tspan x="0" y="40">artist of a brand</tspan>
                                                </text>
                                            </>
                                    }
                                </g>

                                <g className="m1Orb2 orb7c">
                                    <g className="card-moneda" >
                                        <rect x="17" y="10" width="259" height="142" rx="18.2596" fill="#121E45" />
                                    </g>
                                    {
                                        isRotate ?
                                            <>
                                                <text className="card-title-moneda">Special Benefits</text>
                                                <text className="card-text-moneda">Gratify fans with benefits like
                                                    <tspan x="0" y="20">concerts early access or a  </tspan>
                                                    <tspan x="0" y="40">meet & greet </tspan>
                                                </text>
                                            </>
                                            :
                                            <>
                                                <text className="card-title-moneda">Uplift Rewards</text>
                                                <text className="card-text-moneda">Profit from the Uplift community.
                                                    <tspan x="0" y="20">From venues to merch providers</tspan>
                                                    <tspan x="0" y="40">Always VIP treatment </tspan>
                                                </text>
                                            </>
                                    }
                                </g>

                                <g className="m1Orb2 orb8c">
                                    <g className="card-moneda" >
                                        <rect x="17" y="10" width="259" height="142" rx="18.2596" fill="#121E45" />
                                    </g>
                                    {
                                        isRotate ?
                                            <>
                                                <text className="card-title-moneda">Shared success</text>
                                                <text className="card-text-moneda">Let your fans be a part of your
                                                    <tspan x="0" y="20">success. They hold tokens that </tspan>
                                                    <tspan x="0" y="40">will grow in value in the future </tspan>
                                                </text>
                                            </>
                                            :
                                            <>

                                                <text className="card-title-moneda">Promote others</text>
                                                <text className="card-text-moneda">Help the community grow. Promote
                                                    <tspan x="0" y="20">emerging artists you believe in and </tspan>
                                                    <tspan x="0" y="40">monetize on the growth </tspan>
                                                </text>
                                            </>
                                    }
                                </g>

                                <g className="m1_cGroup">
                                    <circle className="m1OrbBlank" cx="0" cy="50" r="20" fill="#653997" />
                                    <circle className="m1OrbBlank" cx="0" cy="50" r="40" fill="rgba(125,200,32,0.19)" />
                                    <g className="m1Orb orb1">
                                        <circle className="planeta" cx="12.5" cy="7" r="20" />
                                    </g>
                                </g>
                            </>
                        }
                    </g>


                    <pattern id="buvll48475" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_3dss4" transform="scale(0.000490196)" />
                        <image id="image0_0_3dss4" width="2040" height="2040" href={miniBubble} />
                    </pattern>

                    <pattern id="buvll11" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_34" transform="scale(0.000490196)" />
                        <image id="image0_0_34" width="2040" height="2040" href={Bubble} />
                    </pattern>
                    <pattern id="buvl333" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_34543" transform="scale(0.000490196)" />
                        <image id="image0_0_34543" width="2040" height="2040" href={BubbleP} />
                    </pattern>
                    <pattern id="buvl333345" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_3454r43" transform="scale(0.000490196)" />
                        <image id="image0_0_3454r43" width="2040" height="2040" href={miniBubbleP} />
                    </pattern>
                    <pattern id="pattern074638" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_1" transform="scale(0.000490196)" />
                        <image id="image0_0_1" width="2040" height="2040" href={monedaFront} />
                    </pattern>
                    <pattern id="pattern929292344" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use href="#image0_0_2_2" transform="scale(0.000490196)" />
                        <image id="image0_0_2_2" width="2040" height="2040" href={monedaBack} />
                    </pattern>

                    <defs>
                        <filter id="filter0_d_490_1988" x="0.764873" y="0.654033" width="292.689" height="160.137" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius="3.36421" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_490_1988" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="6.72843" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.294118 0 0 0 0 0.686275 0 0 0 0.33 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_490_1988" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_490_1988" result="shape" />
                        </filter>
                    </defs>

                    <defs>
                        <filter id="filter0_d_272_2069" x="0.178935" y="0.178935" width="292.642" height="175.642" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feMorphology radius="3.36421" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_272_2069" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="6.72843" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.917647 0 0 0 0 0.666667 0 0 0 0 0.262745 0 0 0 0.33 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_272_2069" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_272_2069" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>

    );
};

export default MonedaGsad
