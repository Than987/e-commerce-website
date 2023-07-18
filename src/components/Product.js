import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddCart } from '../redux/slices/CartSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'


export const Product = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // **passing argument is compulsory otherwise handleAddCard won't work
    // without doing this, data will not be added into the state in cartSlice component or in cart. 
    const handleAddCart = (props) => {
        dispatch(AddCart(props))
        navigate(`/cartitems`)
    }

    return (
        <div className="Card">
            <img className="card-img" src={props.image} alt={props.category} />
            <div className="card-body">
                <p className="card-title">{props.title}</p>
                <h5 className="card-text">{"Rs: " + props.price + "/-"}</h5>
                {/* Always remember not to wrap the below props in { } when passing it as an argument while calling function  */}
                {/* this thing won't add data into state in cartSlice component  */}
                <button onClick={() => handleAddCart(props)}>Add To Cart</button>
            </div>
        </div>
    )
}
