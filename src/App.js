import React from "react";
import "./App.css"
import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Rutas from "./Rutas"
import {items} from "./variables.js"


function App() {
  return (
    <Router>
      <div className="Contenedor">
        <div className="App">
          <h1>WikioRC</h1>
          <Link to="/" className="btn btn-secondary">Home</Link>
          <hr/>
          <div class="container" className="Tiendas">
            <h2 className="Tiendas">Shops</h2>
            <div class="row row-cols-xs-2 row-cols-sm-3 row-cols-md-5 row-cols-10">{items.map((l,i)=>{
              return(
                <div class="col">
                  <Link to={"/"+l} className="btn btn-secondary">{l}</Link>
                </div>
                )
              })}</div>
          </div>
          <hr/>
          <Switch >
            <Rutas/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
