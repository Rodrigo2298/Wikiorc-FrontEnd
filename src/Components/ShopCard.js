import React, { useState, useEffect, useRef } from "react"
import ItemCard from "./ItemCard"
import "./ShopCard.css"
import Axios from "axios"
import {Link} from "react-router-dom";

function ShopCard(props){
    const [itemList, setItemList] = useState([])
//  PARA EL RODRI DEL FUTURO, el unico backend va por aquí  xdddd
    useEffect(()=>{
        Axios.get("https://fast-gentle-periodical.glitch.me/api/get", {params:{ type: props.itemType}}).then((response)=>{
            setItemList(Object.values(response.data))
        })
    },[])
    return(
        <div>
            <h2>{props.itemType} Shop</h2>
            <div class="row row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4"> 
                {
                itemList.length?itemList.map(i=>(
                    <div className="uberTarjeta">
                        <ItemCard class="col" 
                        img={i.img} 
                        name={i.name} 
                        cost={i.cost} 
                        tags={i.tags} 
                        effect={i.effect} 
                        augment={i.augment} 
                        lore={i.lore}/>
                    </div>)): (<div></div>)
                }
            </div>
            <div>
                <Link to="/add" className="btn btn-primary">Add</Link>
                <Link to="/prueba" className="btn btn-danger">Delete</Link>
            </div>
        </div>
    )
}

export default ShopCard