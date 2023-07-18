import React, { useState } from 'react'
import Demo2 from './Demo2';

// Modal In React Using UseState Hook

const Demo = () => {

    const [modal, setModal] = useState(false);
    //Passing props
    const CloseModal = () => {
        setModal(false);
    }

    // Within component

    // const OpenModal = () =>{
    //     return(<>
    //     <h1>Modal in Open</h1>
    //     <p>Hi This is react modal an amazing feature in react</p>
    //     <button onClick={()=>setModal(false)}>Close</button>
    //     </>)
    // }

    return (
        <>
            <button onClick={() => setModal(true)}>Open Modal</button>
            {/* Passing props */}
            {modal && <Demo2 close={CloseModal} />}
            
            {/* Within Component */}
            {/* {modal && <OpenModal />} */}

        </>
    )

    // Simple Form Validation Using UseState Hook

    // const [input, setInput] = useState({});
    // const [error, setError] = useState(false);

    // useEffect(() => {
    //     handleError();
    // }, [])

    // const handleChange = (event) => {
    //     setInput({ ...input, [event.target.name]: event.target.value });
    // }

    // const Log = () => {
    //     console.log(input);
    //     setInput("")
    // }

    // const handleError = () => {

    //     if (input <= 1) {
    //         setError(true);
    //     } else {
    //         setError(false)
    //     }
    //     Log();
    // }

    // return (
    //     <div style={{ alignItems: 'center', justifyContent: 'center' }}>
    //         <label>First Name</label>
    //         <input type='text' placeholder='Enter name' name="naam" value={input.naam || ""} autoFocus onChange={handleChange} />
    //         {error ? <p style={{ color: 'red', fontFamily: 'cursive', marginLeft: '5%', marginTop: '2px' }}>* Enter Name First</p> : ""}
    //         <label>Last Name</label>
    //         <input type='text' placeholder='Enter name' name="naams" value={input.naams || ""} onChange={handleChange} />
    //         {error ? <p style={{ color: 'red', fontFamily: 'cursive', textAlign: 'center', marginLeft: '5%', marginTop: '2px' }}>* Enter Last Name</p> : ""}
    //         <button onClick={handleError}>Submit</button>
    //     </div>
    // )
}

export default Demo
