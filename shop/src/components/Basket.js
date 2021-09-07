import React from 'react';
import Purchase from './Purchase';

/**
 * This component is used to represent a basket
 */
class Basket extends React.Component {

    constructor(props) {
        super(props);
        this.removeProductFromBasket_ = this.removeProductFromBasket_.bind(this);

    }
    
    removeProductFromBasket_(id){
        this.props.removeProductFromBasket(id);
    }
    render() {
        const purchaseList = this.props.purchaseList.map(
            (product) => (
                <Purchase {...product} key={product.id} nb={product.id.substring(1)} removeProductFromBasket_={this.removeProductFromBasket_} />
            )
            )
    
        const total = purchaseList.reduce( (prev,current) =>  prev+current.props.price*current.props.quantity, 0);
    
        return (
            <div id="panier">
                <div id="total">
                    Total du panier&nbsp;: <span id="montant">{total}</span>
                </div>
                <div className="achats">
                    {purchaseList}
                </div>
                
            </div>
        );

    }

    
};

export default Basket;