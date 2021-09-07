import React, { useEffect, useState } from 'react';
import Product from './Product';
//import cata from '../data/catalog2';



/**
 * this component represent the catalog of the shop
 */
const Catalog = (props) => {
    const [filterValue, setFilterValue]  = useState("");

    const productList = props.data.filter(
        product => product.name.toLowerCase().includes(filterValue.toLowerCase())
    ).map(
        product => (
            <Product {...product} key={product.id} nb={product.id.substring(1)} moveProductToBasket={props.moveProductToBasket}/>
        ) 
    )
    const handleInputChange = (e)=>{
        setFilterValue(e.target.value);
    }


    return (
        <div id="boutique">
           {/* <div id="search">
                🔎🔎 Rechercher un produit 🔍🔍
            </div>*/}
            <input value={filterValue} placeholder="rechercher un produit..." id="filter" onChange={handleInputChange}/>
            {productList}
        </div>
    );
};

export default Catalog;