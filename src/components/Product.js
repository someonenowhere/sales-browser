import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HeaderContext } from '../context';

export default function City() {
    const [products, setProducts] = useState([]);
    const clickHandel = useContext(HeaderContext);

    useEffect(() => {
        axios.get('https://assessments.reliscore.com/api/products/')
            .then(response => setProducts(['product1', 'product2', 'product3']))
    }, []);

    return (
        <React.Fragment>
            <section className='section-container'>
                <h4 className='mb-10'>Product List</h4>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products && products.map((item, index) => {
                                return <tr key={item}>
                                    <td>{index}</td>
                                    <td><Link to={{ pathname: `/product/${item}` }} onClick={clickHandel.handleProductClick}>{item}</Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    )
}