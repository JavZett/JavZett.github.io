import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Navbar } from './NavBar/Navbar';
import { Home } from './Home/Home';
import { Atencion } from './Atencion/Atencion';
import { Carreras } from './Carreras/Carreras';
import { Login } from './Login-SignIn/Login';
import { Footer } from './Footer/Footer';
// import { Becas } from './Becas/Becas';
// import { Login } from './Login-Registro/Login';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/atencion" component={Atencion} />
          <Route exact path="/carreras" component={Carreras} />
          <Route exact path="/iniciar-sesion" component={Login} />

          <Redirect to="/" component={Home} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
