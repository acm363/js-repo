import React, { useState } from "react";
import Catalog from "../components/Catalog";
import Basket from "../components/Basket";
import cata from "../data/catalog2";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog : cata,
            purchaseList : [],
        }
        this.moveProductToBasket  = this.moveProductToBasket.bind(this);
        this.removeProductFromBasket= this.removeProductFromBasket.bind(this);
    }

    moveProductToBasket(name,description,image,price,id,quantity) {
        const product_ = this.state.purchaseList.filter(
            product => product.id === id
        );
        if(product_.length > 0){
            this.setState(
                prevState => (
                    {
                        purchaseList :  [...(prevState.purchaseList.filter(
                                            product => product.id !== id
                                        )),{
                                            "name" : name,
                                            "description" : description,
                                            "image" : image,
                                            "price" : price,
                                            "id" : id,
                                            "quantity" : quantity + product_[0].quantity <= 9 ? quantity + product_[0].quantity : 9
                                            }
                                        ]

                    }
                )
            )
        }
        else{
            this.setState(
                prevState => ({
                    purchaseList : [...prevState.purchaseList, 
                                    {
                                        "name" : name,
                                        "description" : description,
                                        "image" : image,
                                        "price" : price,
                                        "id" : id,
                                        "quantity" : quantity
                                    }]
                })
            )
        }
    }

    
    removeProductFromBasket(id_){
        this.setState(
            prevState => ({
                purchaseList : prevState.purchaseList.filter(
                    product => product.id !== id_
                )
            })
        )
    }
    

    render() {
        return(
            <div className="home">
            <h1>🛒ONLINE SHOP🛒</h1>
            <Catalog moveProductToBasket={this.moveProductToBasket} data={this.state.catalog} purchaseList={this.state.purchaseList} />
            <Basket purchaseList={this.state.purchaseList} removeProductFromBasket={this.removeProductFromBasket} />
          </div>
        )
    }
}
export default Home;
