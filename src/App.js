import './App.css';
import LandingPage from './Components';
import Cart from './Components/Cart';
import CatNav from './Components/CatNav';
import MainComponent from './Components/MainComponent';
import ProductDetails from './Components/ProductDetails';
import TopNav from './Components/TopNav';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path='/' Component={LandingPage} />
        <Route path='/productDetails' Component={ProductDetails}/>
        <Route path='/cart' Component={Cart}/>
      </Routes>
      {/* //<MainComponent /> */}
    </div>
  );
}

export default App;
