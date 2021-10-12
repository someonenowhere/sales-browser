import React from "react";
import City from "./City";
import Product from "./Product";

export default function Home() {
    return (
        <React.Fragment>
            <div className='section-50'><City /></div>
            <div className='section-50'><Product /></div>
        </React.Fragment>
    )
}