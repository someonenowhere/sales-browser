import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { HeaderContext } from '../context';

export default function ProductDetailsList() {
    let { productId } = useParams();
    const [productDetails, setProductDetails] = useState([]);
    const clickHandel = useContext(HeaderContext);

    useEffect(() => {
        let productDeltaiList = [
            {
                city: 'Pune',
                rate: 1500
            },
            {
                city: 'Bombay',
                rate: 2000
            },
            {
                city: 'Chennai',
                rate: 1000
            },
        ];
        axios.get(`https://assessments.reliscore.com/api/productDetails/`)
            .then(response => setProductDetails(productDeltaiList));
    }, [productId]);

    return (
        <section className='section-container'>
            <h3 className='mb-10'>City: <span className='colorBlue'>{productId}</span></h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>City</th>
                        <th>Sold in Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productDetails && productDetails.map((item, index) => {
                            return <tr key={item+productId}>
                                <td>{index}</td>
                                <td><Link to={{ pathname: `/city/${item.city}` }} onClick={clickHandel.handleCityClick}>{item.city}</Link></td>
                                <td>{item.rate}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    );
}