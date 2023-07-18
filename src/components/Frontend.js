import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const Frontend = (props) => {
    return (<>
        <Header />
        {props.component}
        <Footer />
    </>)
}
