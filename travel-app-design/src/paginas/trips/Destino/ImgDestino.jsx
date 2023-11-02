import './ImgDestino.css';

import samanaHaiteses from "../../../medio/samana-haitises.jpg";

import SanGimignano from "../../../medio/san-gimignano.avif";

import nemrutMonte from "../../../medio/monte-nemrut.jpg";

import PabellonKioto from"../../../medio/Pabellon-Dorado-Kioto.jpg";


export const ImgDestino = () => {
    return (
        
            <section className='imgDestino__section'>
                <div className='imgDestino__container'>
                    <div className='imgDestino__container--box'>
                        <img src={samanaHaiteses} alt='' className='imgDestino__img'/>
                    </div>

                    <div className='imgDestino__container--box'>
                        <img src={SanGimignano} alt='' className='imgDestino__img img'/>
                    </div>

                    <div className='imgDestino__container--box'>
                        <img src={nemrutMonte} alt='' className='imgDestino__img img'/>
                    </div>

                    <div className='imgDestino__container--box'>
                        <img src={PabellonKioto} alt='' className='imgDestino__img'/>
                    </div>
                </div>
            </section>
        
    );
}