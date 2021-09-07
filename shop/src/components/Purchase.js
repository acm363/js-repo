import React from 'react';
/**
 * This components is used to describe a product in the basket of the shop
 */
const Purchase = (props) => {
    // constructor(props){
    //     super(props);
    //     this.handleClick =  this.handleClick.bind(this);
    // }

    const handleClick = () => {
        props.removeProductFromBasket_(props.id);
    }

    return (
        <div className="achat" id={`${props.nb}-achat`}>
            <figure>
                <img src={props.image} alt={props.name}/>
            </figure>
            <h4>{props.name}</h4>
            <div className="quantite">
                {props.quantity}
            </div>
            <div className="prix">
                {props.price}
            </div>
            <div className="controle">
                <button className="retirer" id={`${props.nb}-remove`} onClick={handleClick}></button>
            </div>
        </div>
    );
   
};

export default Purchase;