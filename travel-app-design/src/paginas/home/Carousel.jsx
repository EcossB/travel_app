import { useState, useRef } from 'react';
import "./homeStyle.css";
import haitisesSamana from "../../medio/haitises.jpg";
import samanaHaiteses from "../../medio/samana-haitises.jpg";
import SanGimignano from "../../medio/san-gimignano.avif";
import sanGimignano from "../../medio/San-Gimignano.jpg";
import Monteturquia from"../../medio/cabeza-monte.jpg";
import MonteNemrut from"../../medio/monte-nemrut.jpg";
import PabellonKioto from"../../medio/Pabellon-Dorado-Kioto.jpg";
import PabellonDorado from"../../medio/pabellon-dorado.jpg";

import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';


export const Carousel = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);
    const numOfItems = 1; // No tocar
    const itemsPerPage = 6; // Cantidad de elementos a mostrar a la vez

    const handleScrollLeft = () => {
        const carouselWidth = carouselRef.current.clientWidth;
        const scrollAmount = carouselWidth / itemsPerPage;
        setScrollLeft((scrollLeft - scrollAmount + carouselWidth) % carouselWidth);
    };

    const handleScrollRight = () => {
        const carouselWidth = carouselRef.current.clientWidth;
        const scrollAmount = carouselWidth / itemsPerPage;
        setScrollLeft((scrollLeft + scrollAmount) % carouselWidth);
    };
    
    return (
        <main>
            <section>
                <h1>Lugares TOP que debes visitar</h1>
                
                <i onClick={handleScrollLeft}>
                    <BsArrowLeftCircle className="arrow-icon arrow-icon-left" />
                </i>
                <i onClick={handleScrollRight}>
                    <BsArrowRightCircle className="arrow-icon arrow-icon-right" />
                </i>

            <div className="cards" ref={carouselRef}>
                {/* CARD 1 */}
                <div className="cards" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                    {Array.from({ length: numOfItems }).map((_, i) => (
                    <a href="#" className="card" key={i}>
                        <img src={samanaHaiteses} alt="" className="poster " />
                        <div className="rest_card">
                            <img src={haitisesSamana} alt="samana" />
                            <div className="cont">
                                <h4>Parque nacional Los Haitises</h4>
                                <div className="sub">
                                    <p>Parque, Samana | Turismo</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>4.5
                                    </h3>
                                </div>
                            </div>
                        </div>

                    </a>
                    ))}
                </div>

                {/* CARD 2 */}
                <div className="cards" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                    <a href="#" className="card" >
                        <img src={SanGimignano} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={sanGimignano} alt="" />
                            <div className="cont">
                                <h4>San Gimignano</h4>
                                <div className="sub">
                                    <p>Viñera, Italia | Gastronomia</p>
                                    <h3>
                                        <i><AiFillStar className='star'/> </i>5.5
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>


                 {/* PAG 3 */}
                <div className="cards" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                    <a href="#" className="card">
                        <img src={Monteturquia} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={MonteNemrut} alt="" />
                            <div className="cont">
                                <h4>Monte Nemrut</h4>
                                <div className="sub">
                                    <p>Monte, Turquia | Lugar Historico</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>4.8
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                 {/* PAG 4 */}
                <div className="cards" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                    <a href="#" className="card">
                        <img src={PabellonKioto} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={PabellonDorado} alt="" />
                            <div className="cont">
                                <h4>Pabellón Dorado</h4>
                                <div className="sub">
                                    <p>Kioto, Japón| Lugar</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>3.2
                                    </h3>
                                </div>
                            </div>
                        </div>

                    </a>
                </div>

            

                

                </div>
            </section>
        </main>
    );
};
