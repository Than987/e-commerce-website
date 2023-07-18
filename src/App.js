import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartItems } from './components/CartItems';
import Productspage from './components/Productspage';
import { Frontend } from './components/Frontend';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Demo from './components/Demo';
const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Frontend component ={<Productspage />}/>} />
          <Route path='/cartitems' element={<Frontend component ={<CartItems />}/>} />
        </Routes>
      </BrowserRouter>
      {/* <Demo /> */}
    </div>

  );
}

export default App;
