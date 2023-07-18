import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const cartSlice = createSlice({
    name: "Cart",
    initialState: {
        // fetching data from localstorage 
        // becouse we're loosing selected items data that we added to cart when we refresh the browser.
        // mtbal ki jab tak hum items add karte hain cart me tab tak toh theek hai par jab
        // browser ko refresh karte hain toh purana data localstorage se vanish ho jata hai
        // aur nayi items add hona shuru ho jaati hain and so on...
        // that's why we fetched the localstorage data here
        // Note: Humne localstorage me data add karne ke baat hi add ki hai yeh code line..
        // otherwise is line me sirf: cartItems: [] hi tha.
        cartItems: localStorage.getItem('CartItems') ? JSON.parse(localStorage.getItem('CartItems')) : [],
        cartTotalQuantity: 0,
        cartTotalAmount: 0
    },
    reducers: {
        AddCart: (state, action) => {
            const cartIndex = state.cartItems.findIndex((cartItem) =>
                cartItem.id === action.payload.id
            )
            if (cartIndex >= 0) {
                state.cartItems[cartIndex].cartQuantity += 1;
                toast.success(`Added 1 More ${state.cartItems[cartIndex].title}
                 to your Cart`, {
                    position: 'top-center'
                })
            }
            else {
                const tempProduct = { ...action.payload, cartQuantity: 1 }
                state.cartItems.push(tempProduct);
                toast.info(`${action.payload.title} Added to Cart`)
            }
            //store the selected product's data in localstorage in json string format.
            localStorage.setItem('CartItems', JSON.stringify(state.cartItems));
        },
        RemoveCart: (state, action) => {
            const RemovecartItem = state.cartItems.filter((items) =>
                items.id !== action.payload.id)
            state.cartItems = RemovecartItem;
            localStorage.setItem('CartItems', JSON.stringify(state.cartItems));
            toast.warn(`${action.payload.title} is Removed from Cart`, {
                position: 'top-center'
            })
        },
        IncreaseCartQantity: (state, action) => {
            const CartIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);

            if (CartIndex >= 0) {
                state.cartItems[CartIndex].cartQuantity += 1;
                localStorage.setItem('CartItems', JSON.stringify(state.cartItems))
                toast.info(`Item's Qantity Increased`, {
                    position: 'top-center'
                })
            }
        },
        DereaseCartQuantity: (state, action) => {
            const CartIndex = state.cartItems.findIndex((item) =>
                item.id === action.payload.id)

            if (state.cartItems[CartIndex].cartQuantity > 1) {
                state.cartItems[CartIndex].cartQuantity -= 1;
            } else if (state.cartItems[CartIndex].cartQuantity <= 1) {
                const Filtercart = state.cartItems.filter((item) =>
                    item.id !== action.payload.id)
                state.cartItems = Filtercart;
                localStorage.setItem('CartItems', JSON.stringify(state.cartItems));
                toast.error(`${action.payload.title} is Removed From Cart`, {
                    position: 'top-center'
                }
                )
            }
        },
        ClearCompleteCart: (state, action) => {
            state.cartItems = []
            toast.error(`Your Shopping Cart is Empty Now`, {
                position: 'top-center'
            }
            )
            localStorage.setItem('CartItems',JSON.stringify(state.cartItems))
        },
        GetTotals: (state, action) => {
            let { total, quantity } = state.cartItems.reduce((CartTotal, CartItem) => {
                const { price, cartQuantity } = CartItem;
                const ItemTotal = price * cartQuantity;
                CartTotal.total += ItemTotal;
                CartTotal.quantity += cartQuantity;

                return CartTotal;
            }, { total: 0, quantity: 0 })
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }
    }

})

export const { AddCart, RemoveCart, GetTotals, IncreaseCartQantity, DereaseCartQuantity, ClearCompleteCart } = cartSlice.actions;
export default cartSlice.reducer;