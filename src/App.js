import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/Homepage";
import "./App.css";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
