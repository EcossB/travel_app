import { useState, useRef } from 'react';
import { useModal } from '../../hooks/useModal';
//import "../../paginas/trips/Modal/modalStyle.css";
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
import CartagenaColombia from "../../medio/cartagenaColombia.webp";
import CacaoSendero from "../../medio/cacao.webp"
import SenderoCacao from "../../medio/cacaoSendero.png"
import BahiaAguila from "../../medio/bahia.jpg";
import AguilaBahia from "../../medio/bahiaAguila.jpg";
import ColonZona from "../../medio/Colon.webp";
import ZonaColon from "../../medio/Zona.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

//import { FaAngleLeft, FaAngleRight } from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai';
import { Modall } from '../trips/Modal/Modal';

const information = {
    title: {
      place1: 'Parque nacional los Haitises',
      place2: 'San gimignano',
      place3: 'Monte Nemrut',
      place4: 'Pabellon Dorado',
      place5: 'Torre Eiffel',
      place6: 'Santorini',
      place7: 'Cartagena',
      place8: 'Sendero del cacao',
      place9: 'Bahía de las Águilas',
      place10: 'Alcázar de Colón'
    },
    info: {
      place1Info: 'Los Haitises es una de las principales atracciones ecológicas de la Republica Dominicana. Los Haitises constituyen un karst o relieve en rocas, calizas tropical en mogotes, característico de estas zonas climáticas de la tierra. En su morfología externa presenta colinas, corredores y valles, y en su morfología interna cavidades, algunas de grandes dimensiones como las de litoral. ',
      place2Info: 'San Gimignano es una ciudad italiana sobre una colina ubicada en Toscana, al suroeste de Florencia. Se encuentra rodeada por murallas del siglo XIII y su casco antiguo es la Piazza della Cisterna, una plaza triangular con casas medievales. ',
      place3Info: 'El monte Nemrut o monte Nemrud es una montaña de 2150 m de altitud del sureste de Turquía, conocida por las estatuas pertenecientes a una tumba del siglo I a. C. que se encuentra en la cima. La montaña se encuentra a 40 km al norte de Kahta, cerca de Adıyaman.',
      place4Info: 'Kinkaku-ji es el nombre informal del Rokuon-ji en Kioto, Japón. Fue construido originalmente en 1397 como villa de descanso del shōgun Ashikaga Yoshimitsu, llamada Kitayama.​ Tras su muerte su hijo transformó el edificio en un templo Zen de la secta Rinzai.',
      place5Info: 'Construida en 1889 para la Exposición Universal, la Torre Eiffel se convirtió en el principal símbolo de París y es el monumento más visitado del mundo.',
      place6Info: 'Santorini es una de las islas Cícladas en el mar Egeo. Fue devastada por una erupción volcánica en el siglo XVI a. C., que dio forma a su paisaje accidentado. Las casas cúbicas encaladas en sus 2 ciudades principales, Fira y Oia, se aferran a los acantilados sobre un cráter subterráneo.',
      place7Info: 'Cartagena es una ciudad portuaria en la costa caribeña de Colombia. Junto al mar, se encuentra la Ciudad Vieja amurallada, que se fundó en el siglo XVI, con plazas, calles de adoquines y edificios coloniales coloridos.',
      place8Info: 'Disfrute y experimente el arte del cacao dominicano y la elaboración del chocolate a través de los tours en la Hacienda La Esmeralda, ubicada en la carretera San Francisco de Macorís - Tenares, Las Pajas, San Francisco de Macorís, República Dominicana.',
      place9Info: 'La bahía de Las Águilas es muy conocida por la abundante presencia de los preciosos corales que se pueden encontrar en sus aguas limpias, las estrellas de mar y las praderas marinas, por lo que el submarinismo en la zona puede llegar a ser una experiencia inolvidable.',
      place10Info: 'El Alcazár de Colón es la única residencia conocida de algún miembro de la familia Colón en el Nuevo Mundo lo que lo convierte en un monumento histórico. Muralla protectora del Alcázar de Colón. El Alcazar de Colon fue el hogar para tres generaciones de la familia Colón, desde 1512 hasta 1577.'
    },

    images: {
        img1: haitisesSamana,
        img2: SanGimignano,
        img3: MonteNemrut,
        img4: PabellonKioto,
        img5: TorreEi,
        img6: GreciaSantorini,
        img7: CartagenaColombia,
        img8: CacaoSendero,
        img9: AguilaBahia,
        img10: ZonaColon
    }
  };

export const Carousel = () => {
    const { title, info, images} = information;
    const [modalIsOpen, openModal, closeModal] = useModal(false);
    const [modalIsOpen2, openModal2, closeModal2] = useModal(false);
    const [modalIsOpen3, openModal3, closeModal3] = useModal(false);
    const [modalIsOpen4, openModal4, closeModal4] = useModal(false);
    const [modalIsOpen5, openModal5, closeModal5] = useModal(false);
    const [modalIsOpen6, openModal6, closeModal6] = useModal(false);
    const [modalIsOpen7, openModal7, closeModal7] = useModal(false);
    const [modalIsOpen8, openModal8, closeModal8] = useModal(false);
    const [modalIsOpen9, openModal9, closeModal9] = useModal(false);
    const [modalIsOpen10, openModal10, closeModal10] = useModal(false);

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
                    <a href="#" className="card"  style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal}>
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

                        <Modall 
                            modalTitle={title.place1}
                            modalInfo={info.place1Info}
                            isOpen={modalIsOpen} 
                            onRequestClose={closeModal}
                            imgUrl={images.img1}
                        />
                    </a>
                

                    {/* CARD 2 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal2}>
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

                        <Modall 
                            modalTitle={title.place2}
                            modalInfo={info.place2Info}
                            isOpen={modalIsOpen2} 
                            onRequestClose={closeModal2}
                            imgUrl={images.img2}
                        />
                    </a>


                    {/* CARD 3 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal3}>
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

                        <Modall 
                            modalTitle={title.place3}
                            modalInfo={info.place3Info}
                            isOpen={modalIsOpen3} 
                            onRequestClose={closeModal3}
                            imgUrl={images.img3}
                        />
                    </a>

                    {/*CARD 4 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal4}>
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

                        <Modall 
                            modalTitle={title.place4}
                            modalInfo={info.place4Info}
                            isOpen={modalIsOpen4} 
                            onRequestClose={closeModal4}
                            imgUrl={images.img4}
                        />
                    </a>

                    {/* CARD 5 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal5}>
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

                        <Modall 
                            modalTitle={title.place5}
                            modalInfo={info.place5Info}
                            isOpen={modalIsOpen5} 
                            onRequestClose={closeModal5}
                            imgUrl={images.img5}
                        />
                    </a>

                    {/* CARD 6 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal6}>
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

                        <Modall 
                            modalTitle={title.place6}
                            modalInfo={info.place6Info}
                            isOpen={modalIsOpen6} 
                            onRequestClose={closeModal6}
                            imgUrl={images.img6}
                        />
                    </a>

                    {/* CARD 7 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal7}>
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

                        <Modall 
                            modalTitle={title.place7}
                            modalInfo={info.place7Info}
                            isOpen={modalIsOpen7} 
                            onRequestClose={closeModal7}
                            imgUrl={images.img7}
                        />
                    </a>

                    {/* CARD 8 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal8}>
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

                        <Modall 
                            modalTitle={title.place8}
                            modalInfo={info.place8Info}
                            isOpen={modalIsOpen8} 
                            onRequestClose={closeModal8}
                            imgUrl={images.img8}
                        />
                    </a>

                    {/* CARD 9 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal9}>
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

                        <Modall 
                            modalTitle={title.place9}
                            modalInfo={info.place9Info}
                            isOpen={modalIsOpen9} 
                            onRequestClose={closeModal9}
                            imgUrl={images.img9}
                        />
                    </a>

                    {/* CARD 10 */}
                    <a href="#" className="card" style={{ transform: `translateX(-${scrollLeft}px)` }} onClick={openModal10}>
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

                        <Modall 
                            modalTitle={title.place10}
                            modalInfo={info.place10Info}
                            isOpen={modalIsOpen10} 
                            onRequestClose={closeModal10}
                            imgUrl={images.img10}
                        />
                    </a>                   

                    </div>
            </section>
            {/*<Modall 
                modalTitle="efefefeffefe"
                modalInfo="ffefefefefeef"
                isOpen={modalIsOpen} 
                onRequestClose={closeModal}
            />*/}
        </main>
    );
};
