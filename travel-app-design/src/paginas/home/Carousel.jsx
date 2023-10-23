import { useState, useRef } from 'react';
import "./homeStyle.css";
import haitisesSamana from "../../medio/haitises.jpg";
import samanaHaiteses from "../../medio/samana-haitises.jpg";
import SanGimignano from "../../medio/san-gimignano.avif";
import sanGimignano from "../../medio/San-Gimignano.jpg";

import Monteturquia from"../../medio/monte.jpg";
import MonteNemrut from"../../medio/monte-nemrut.jpg";
import PabellonKioto from"../../medio/Pabellon-Dorado-Kioto.jpg";
import PabellonDorado from"../../medio/pabellon-dorado.jpg";
import TorreE from "../../medio/torre-eiffel.webp";
import TorreEi from "../../medio/torre-e.jpg";
import GreciaSantorini from "../../medio/grecia-santorini.jpg";
import GreciaArena from "../../medio/santorini.jpg";
import Cartagena from "../../medio/cartagena.jpeg";
import CartagenaC from "../../medio/cartagena-playa.jpeg";
import CacaoSendero from "../../medio/cacao.webp"
import SenderoCacao from "../../medio/cacaoSendero.png"
import BahiaAguila from "../../medio/bahia.jpg";
import AguilaBahia from "../../medio/bahiaAguila.jpg";
import ColonZona from "../../medio/Colon.webp";
import ZonaColon from "../../medio/Zona.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

//import { FaAngleLeft, FaAngleRight } from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';


export const Carousel = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const carouselRef = useRef(null);
    // const numOfItems = 1; 
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
                <h2>Lugares TOP que debes visitar</h2>

                <i onClick={handleScrollLeft}>
                    <FaAngleLeft className="arrow-icon arrow-icon-left a"/>
                </i>

                <i onClick={handleScrollRight}>
                    <FaAngleRight className="arrow-icon arrow-icon-right" />
                </i>
                
                {/*<i onClick={handleScrollLeft}>
                    <BsArrowLeftCircle className="arrow-icon arrow-icon-left" />
                </i>*/}

                {/*<i onClick={handleScrollRight}>
                    <BsArrowRightCircle className="arrow-icon arrow-icon-right" />
                </i>*/}

                <div className="cards" ref={carouselRef}>
                    {/* CARD 1 */}
                    <a href="#" className="card"  style={{ transform: `translateX(-${scrollLeft}px)` }}>
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
                

                    {/* CARD 2 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} >
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


                    {/* CARD 3 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
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

                    {/*CARD 4 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={PabellonDorado} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={PabellonKioto} alt="" />
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

                    {/* CARD 5 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={TorreE} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={TorreEi} alt="" />
                            <div className="cont">
                                <h4>Torre Eiffel</h4>
                                <div className="sub">
                                    <p>Paris, Francia | Turismo</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>2.5
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* CARD 6 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={GreciaArena} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={GreciaSantorini} alt="" />
                            <div className="cont">
                                <h4>Santorini</h4>
                                <div className="sub">
                                    <p>Islas Cícladas, Grecia | Playa</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>4.8
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* CARD 7 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={Cartagena} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={CartagenaC} alt="" />
                            <div className="cont">
                                <h4>Cartagena</h4>
                                <div className="sub">
                                    <p>Cartagena, Colombia| Playa</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>3.2
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* CARD 8 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={SenderoCacao} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={CacaoSendero} alt="" />
                            <div className="cont">
                                <h4>Sendero del cacao</h4>
                                <div className="sub">
                                    <p>San Pedro de Macorís, Rep. Dom.| Lugar</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>3.5
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* CARD 9 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={BahiaAguila} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={AguilaBahia} alt="" />
                            <div className="cont">
                                <h4>Bahia de las Aguilas</h4>
                                <div className="sub">
                                    <p>Pedernales, Rep. Dom.| Playa</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>3.2
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>

                    {/* CARD 10 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }}>
                        <img src={ColonZona} alt="" className="poster" />
                        <div className="rest_card">
                            <img src={ZonaColon} alt="" />
                            <div className="cont">
                                <h4>Alcázar de Colón</h4>
                                <div className="sub">
                                    <p>Zona Colonil, Rep. Dom.| Lugar</p>
                                    <h3>
                                        <i><AiFillStar className='star'/></i>3.2
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>                   

                    </div>
            </section>
        </main>
    );
};
