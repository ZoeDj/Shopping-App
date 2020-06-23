import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import ItemList from "./components/ItemList";
import Item from "./components/Item";

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/item-list">Shop</Link>
        <Link to="/cart">Cart</Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/item-list">
          <ItemList />
        </Route>
        <Route path="/cart">Cart</Route>
        <Route path="/item-list/:itemID">
          <Item />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
