import { Artista, Artista2, CulturaP, Morat } from "assets";
import './styles.css'

export const PeImages = () => {

    // const items = [
    //     {
    //         image: (
    //             <>
    //                 <Artista />
    //             </>
    //         ),
    //     },
    //     {
    //         image: (
    //             <>
    //                 <Artista />
    //             </>
    //         ),
    //     },
    //     {
    //         image: (
    //             <>
    //                 <Artista />
    //             </>
    //         ),
    //     },
    //     {
    //         image: (
    //             <>
    //                 <Artista />
    //             </>
    //         ),
    //     },

    // ]

    return (
        <div className="pe-images__content">
            <div>
                <Artista />
            </div>
            <div className="doble">
                <CulturaP />
                <Morat />
            </div>
            <div>
                <Artista2 />
            </div>
            <div className="doble">
                <CulturaP />
                <Morat />
            </div>
        </div>
    )
};
