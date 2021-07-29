import React, { useState, useEffect } from 'react';
import "./ItemCard.css"
const ItemCard = (props) => {
    const [item, setItem] = useState(props)
    return (
        <div  class="container" className="tarjeta">
            <div class="row" className="holi">
                <input type="checkbox" className="borrar?"/>
                <img src={item.img} class="col-3"/>
                <div class="container col">
                    <h5 class="row">{item.name}</h5>
                    <h5 class="row">{item.cost}</h5>
                    <h5 class="row">{item.tags}</h5>
                </div>
                <span>{item.effect}</span>
                <span>{item.augment}</span>
                <span>{item.lore}</span>
            </div>
        </div>
    );
};

export default ItemCard;