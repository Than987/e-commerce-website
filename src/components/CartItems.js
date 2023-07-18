// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { RemoveCart } from '../redux/slices/CartSlice';
// import { useDispatch } from 'react-redux';

// export const CartItems = (props) => {
//     const [dataa, setData] = useState([]);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         DataFromApi();
//     },[])
//     const DataFromApi = () => {
//         axios.get(`https://6303ab6a0de3cd918b3bbabb.mockapi.io/crud-data`)
//         .then((res) => {
//             setData(res.data);
//         }
//         )
//     }
//     return (
//         <div>
//             {
//                 dataa.map((item) => {
//                     return (
//                         <>
//                             <table className='table table-striped'>
//                                 <thead>
//                                       <tr>
//                                         <td>S.No</td>
//                                         <td>Item</td>
//                                         <td>Price</td>
//                                         <></>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                 <tr>
//                                     <td>{item.id}</td>
//                                     <td>{item.item}</td>
//                                     <td>{item.price}</td>
//                                     <td><button onClick={dispatch(RemoveCart({item: props.item, price:props.price}))}>REMOVE</button></td>
//                                 </tr>
//                                 </tbody>
//                             </table>
//                         </>
//                     )
//                 })
//             }
//         </div>
//     )
// }
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../App.css'
import { ClearCompleteCart, DereaseCartQuantity, IncreaseCartQantity, RemoveCart, GetTotals } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


export const CartItems = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(()=>{
   GetTotals();
  },[])
 
  const handleRemoveItem = (product) => {
    dispatch(RemoveCart(product))
  }

  const handleincreasequantity = (product) => {
    dispatch(IncreaseCartQantity(product))
  }

  const handledecreasequantity = (product) => {
    dispatch(DereaseCartQuantity(product))
  }

  const handleClearAll = ()=>{
    dispatch(ClearCompleteCart())
  }
  return (
    <>
      {cart.cartItems.length === 0 ? (
        <div>
          <p>Your Shooping Cart is Empty : )</p>
          <Link to='/'>Back to shopping</Link>
        </div>) : (
        <div className='topmost'>

          <div className='head'>
            <h3>S.No</h3>
            <h3>Item</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
            <h3>SubTotal</h3>
          </div>
          {
            cart.cartItems?.map((item) => {
              return (
                <div>
                  <div className='main'>
                    <div className="sub">
                      <div class="id">
                        {item.id}
                      </div>
                      <div className="image">
                        <img src={item.image} alt={item.category} />
                        <button onClick={() => handleRemoveItem(item)} className='btn btn-sm btn-outline-warning'>Remove</button>
                        <br></br> {item.title}
                      </div>
                      <div className="quantity">
                        <td><button onClick={() => handledecreasequantity(item)} className='btn btn-sm btn-outline-warning'>-</button><span className='cartquantity'>{item.cartQuantity}</span><button onClick={() => handleincreasequantity(item)} className='btn btn-sm btn-outline-info'>+</button></td>
                      </div>
                      <div className="price">
                        {item.price}
                      </div>
                      <div className="subtotal">

                      </div>
                    </div>
                  </div>
                </div>

              )
            })
          }
          <div className='footer'>
            <div className='Clear'>
              <button onClick={()=>handleClearAll()}>Clear Cart</button>
            </div>
            <div className='Subtotals'>
              <span>{cart.cartTotalAmount}</span>
            </div>
          </div>

        </div>
      )
      }
    </>
  )
}

//  <>
//     {
//       cart.cartItems.length === 0 ? (
//         <div>
//           <p>Your Shooping Cart is Empty : )</p>
//           <Link to='/'>Back to shopping</Link>
//         </div>) :
//         (
//           <table className='table'>
//             <thead>
//               <tr>
//                 <th>Serial No.</th>
//                 <th>Item</th>
//                 <th>Quantity</th>
//                 <th>Price</th>
//                 <th>Total Price</th>
//               </tr>
//             </thead>
//             {cart.cartItems?.map((items) =>
//             <>
//               <tbody>
//                 <tr>
//                   <td>{items.id}</td>
//                   <td className='items-img'>
//                     <img src={items.image} alt={items.category} />
//                     <button onClick={() => handleRemoveItem(items)} className='btn btn-sm btn-outline-warning'>Remove</button>
//                     <div className='item-info'>{items.title}</div>
//                   </td>
//                   <td><button onClick={() => handledecreasequantity(items)} className='btn btn-sm btn-outline-warning'>-</button><span className='cartquantity'>{items.cartQuantity}</span><button onClick={() => handleincreasequantity(items)} className='btn btn-sm btn-outline-info'>+</button></td>
//                   <td>{items.price}</td>
//                   <td>{items.cartQuantity * items.price}</td>
//                 </tr>
//               </tbody>
      
//               </>
//             )}
//           </table>
//         )
//     }
//   </> 
