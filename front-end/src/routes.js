import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./services/auth";

import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Venda from "./pages/Venda";
import Produto from "./pages/Produto";
// import Orcamento from "./pages/Orcamento";
import Estoque from "./pages/Estoque";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      {/* <Route path="/signup" component={() => <h1>SignUp</h1>} /> */}
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/agenda" component={Agenda} />
      <PrivateRoute path="/venda" component={Venda} />
      <PrivateRoute path="/produto" component={Produto} />
      {/* <PrivateRoute path="/orcamento" component={Orcamento} /> */}
      <PrivateRoute path="/estoque" component={Estoque} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;