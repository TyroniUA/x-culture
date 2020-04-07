import React from 'react';
import './App.scss';
import Main from './Scene/Main';
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Training from './Scene/Training';
import Business from './Scene/Business'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import Research from './Scene/Research'
import Team from './Scene/Team'
import Blog from './Scene/Blog'
import Winners from './Scene/Winners'
import Coach from './Scene/Coach'
import Admin from './Scene/Admin'
import AdminDashboard from './Scene/AdminDashboard';
import GSymp from './Scene/GSymp'
import { AuthProvider } from "./FireBase/Auth";
import PrivateRoute from "./FireBase/PrivateRoute";
import Hackaton from './Scene/Hackaton'


function App() {
  return (
    <AuthProvider>
    <Router>
      
        <NavBar title='volodymyr' />
        <Switch>

          <Route path='/' exact render={(props) => <Main/>} />
          <Route path='/admin' exact component={Admin} />
          <PrivateRoute path='/AdminDashboard'exact component={AdminDashboard} />
          <Route path='/training' component={Training} />
          <Route path='/business' component={Business} />
          <Route path='/research' component={Research} />
          <Route path='/coach' component={Coach}/>
          <Route path='/team' component={Team} />
          <Route path='/symposium' component={GSymp}/>
          <Route path='/blog' component={Blog} />
          <Route path='/winners' component={Winners} />
          <Route path='/hackaton' component={Hackaton} />
        </Switch>
        <Footer />
    </Router>
    </AuthProvider>

  );
}

export default App;
