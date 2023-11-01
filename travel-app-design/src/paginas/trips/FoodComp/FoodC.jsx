import React from 'react';
import risottoImage from '../../../medio/risotto_prev_ui.png';
import pizzaImage from '../../../medio/pizza_prev_ui.png';
import pastaImage from '../../../medio/pasta_prev_ui.png';
import ossoBucoImage from '../../../medio/ossoBuco_prev_ui.png';
import './foodS.css';

const FoodC = () => {
  const foods = [
    {
      name: "Risotto",
      image: risottoImage,
    },
    {
      name: "Pizza",
      image: pizzaImage,
    },
    {
      name: "Pasta",
      image: pastaImage,
    },
    {
      name: "Osso Buco",
      image: ossoBucoImage,
    },
  ];

  return (
    <div className="title-container">
     <h2>Deliciosos platillos</h2>
      <div className="food-container">
      {foods.map((food, index) => (
        <div key={index} className="food-item">
          <div className="food-image">
            <img src={food.image} alt={food.name} />
          </div>
          <p className="food-name">{food.name}</p>
        </div>
      ))}
    </div>
  </div>
  );  
};

export default FoodC;
