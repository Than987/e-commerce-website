import React from 'react'

// Modal By Using Props
const Demo2 = (props) => {

    return (
        <>
            <h1>React Modal</h1>
            <p>React (also known as React.js or ReactJS)</p>
            <p>is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
                It is maintained by Meta (formerly Facebook) and a…</p>
            <button onClick={props.close}>Close</button>
        </>
    )
}

export default Demo2    