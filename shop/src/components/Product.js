import React, { useState } from "react";

const Product = (props) => {

  
  const [inputValue, setInputValue] = useState("0");

  const [buttonOpacity, setButtonOpacity] = useState("0.25");

  const [quantity, setQuantity] = useState(0);

  /*
  Cette fonction gère tous les effets liés au produit
  On y vérifie que la quantité doit être comprise en 0 et 9
  Si quantité == 0 alors l'opacité du bouton du panier est faible
  Si quantité > 0 et quantité <= 9 alors le bouton devient visible
   */
  const handleInputChange = (e) => {
    e.target.value.match("[0-9]") && e.target.value >= 0 && e.target.value <= 9 ? setInputValue(e.target.value) : setInputValue("0");
    e.target.value > 0 && e.target.value <= 9 && setButtonOpacity("1");
    e.target.value ==="0" && setButtonOpacity("0.25");
    e.target.value > 0 && setQuantity(parseInt(e.target.value));
  };

  /*
    On y gère les actions qui suivent le click sur le panier quand celui ci est actif
    Si le panier est visible, un click sur le produit entraine l'apparition du produit dans la 
    liste des produits visibles dans le panier ; la quantité est remise à 0 dans le catalogue
   */
  const handleButtonClick = () => {
      if( buttonOpacity === "1" ){
        props.moveProductToBasket(props.name,props.description,props.image,props.price,props.id,quantity);
        setInputValue('0');
        setButtonOpacity("0.25");
      }
  };


  return (
    <div className="produit" id={`${props.nb}-product`}>
      <h4>{props.name}</h4>
      <figure>
        <img src={props.image} alt={props.name} />
      </figure>
      <div className="description">{props.description}</div>
      <div className="prix">{props.price}</div>
      <div className="controle">
        <input
          id={`${props.nb}-qte`}
          step="1"
          min="0"
          max="9"
          type="number"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button
          className="commander"
          id={`${props.nb}-order`}
          onClick={handleButtonClick}
          style={{
            opacity: buttonOpacity,
          }}
        ></button>
      </div>
    </div>
  );
};

export default Product;
