import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import AdminLogin from './components/AdminLogin/Admin';
import About from './components/About/About';
import Products from './components/Products';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/shop">
              <Products />
            </Route>
            <Route path="/login_signup">
              <SignupLogin />
            </Route>
            <Route path="/open_sesame/aladdin">
              <AdminLogin />
            </Route>
            <Route path="/">
              <Home />
              <Products />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    ); 
  };
  

  function SignupLogin() {
    return <h2>Sign Up or Log in</h2>;
  }
  function Cart() {
    return <h2>Cart</h2>;
  }
  
  export default App;