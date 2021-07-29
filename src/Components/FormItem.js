import React, { useState, useEffect } from 'react';
import "./FormItem.css"
import Axios from "axios"
import {items} from "../variables.js"
const FormItem = (props) => {
    const [newItem, setNewItem] = useState({class:"Cheap", img:"", name:"",cost:"",tags:[],effect:"",augment:"",lore:""})
    
    const onSubmit = (e)=>{
        e.preventDefault()
        Axios.post("https://fast-gentle-periodical.glitch.me/addItem",newItem).then(()=>{alert(newItem.name+" Añadido correctamente a "+newItem.class)})
    }
    const test = (e)=>{
        e.preventDefault()
        console.log(newItem)
    }
    return (
        <form class="card container">
            <h1>New Item</h1>
            <div class="form-group row">
                <label class="col-3">Class: </label>
                <select class="form-control col" name="class" onChange={ (e)=>{setNewItem({...newItem, class:e.target.value})}}>
                    {items.map(i=>(
                        <option>{i}</option>
                    ))}
                </select>
            </div>

            <div class="form-group row">
                <label class="col-3">Name: </label>
                <input class="form-control col" name="name" onChange={ (e)=>{setNewItem({...newItem, name:e.target.value})}}/>
            </div>

            <div class="form-group row">
                <label class="col-3">Cost: </label>
                <input class="form-control col" name="cost" onChange={ (e)=>{setNewItem({...newItem, cost:e.target.value})}}/>
            </div>

            <div class="form-group row">
                <label class="col-3">Tags: </label>
                <input class="form-control col" name="tags" onChange={ (e)=>{setNewItem({...newItem, tags:e.target.value})}}/>
            </div>
            <hr/>
            
            <div class="form-group row">
                <label class="col-3">Effect: </label>
                <textarea  class="form-control col" name="effect" onChange={ (e)=>{setNewItem({...newItem, effect:e.target.value})}}/>
            </div>

            <div class="form-group row">
                <label class="col-3">Augment: </label>
                <input class="form-control col" name="augment" onChange={ (e)=>{setNewItem({...newItem, augment:e.target.value})}}/>
            </div>

            <div class="form-group row">
                <label class="col-3">Lore: </label>
                <input class="form-control col" name="lore" onChange={ (e)=>{setNewItem({...newItem, lore:e.target.value})}}/>
            </div>
            <hr/>
            <div class="form-group row">
                <label class="col-3">Comentario de Maxi: </label>
                <textarea class="form-control col" name="comentario" onChange={ (e)=>{setNewItem({...newItem, comentario:e.target.value})}}/>
            </div>

            <button class="btn btn-primary" onClick={(e)=>{onSubmit(e)}}>Submit</button>
        </form>
    );
};

export default FormItem;