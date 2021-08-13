import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import login from "./pages/login";
import signup from "./pages/signup";
import add_product from "./pages/add_product";
import user_profile from "./pages/user_profile";
import details from "./pages/details";
import checkout from "./pages/checkout/checkout";
import cart from "./pages/Cart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signup} />
        <Route exact path="/add_product" component={add_product} />
        <Route exact path="/products/:id" component={details} />
        <Route exact path="/profile" component={user_profile} />
        <Route exact path="/checkout" component={checkout} />
        <Route exact path="/cart" component={cart} />
      </Switch>
    </Router>
  );
}

export default App;
