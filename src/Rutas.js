import React,{useState} from 'react';
import { Route } from 'react-router';
import ShopCard from "./Components/ShopCard"
import FormItem from './Components/FormItem';
import {items} from "./variables.js"
import Prueba from './prueba';
function Rutas(props) {
    return (
        <div>
            {items.map((type,i)=>(
                    <Route path={"/"+type}>
                        <ShopCard itemType={type}/>
                    </Route>
                    )
            )}
            <Route path="/add">
                <FormItem/>
            </Route>
            <Route exact path="/">
                  <h2>Home</h2>
            </Route>
            <Route path="/prueba">
                <Prueba/>
            </Route>
        </div>
    );
}

export default Rutas;