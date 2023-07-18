import '../App.css';
import Cart from './Cart';
import {Products} from './Products';
import { Product } from './Product';
const Productspage = () => {

  return (
    <div className="App">
       
      <Cart />
      {
        Products.map((product) => {
          return (
            <div key={product.id} >
              <Product {...product} />
            </div>
          )
        })
      }
    </div>

  );
}

export default Productspage;
