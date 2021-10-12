import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { HeaderContext } from '../context';

export default function CityToProductList() {
    let { cityId } = useParams();
    const [products, setProducts] = useState({});
    const [productList, setProductList] = useState([]);
    const clickHandel = useContext(HeaderContext);

    useEffect(() => {
        axios.get(`https://assessments.reliscore.com/api/sales/${cityId}`)
            .then(response => { setProducts(response.data.data) });
    }, [cityId]);

    useEffect(() => {
        let productList = [];
        let index = 0;
        for (const [key, value] of Object.entries(products)) {
            productList.push(
                <tr key={key + value + cityId}>
                    <td>{index + 1}</td>
                    <td><Link to={{ pathname: `/product/${key}` }} onClick={clickHandel.handleProductClick}>{key}</Link></td>
                    <td>{value}</td>
                </tr>
            )
        }
        setProductList(productList);
    }, [products, clickHandel.handleProductClick, cityId]);

    return (
        <section className='section-container'>
            <h3 className='mb-10'>City: <span className='colorBlue'>{cityId}</span></h3>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Total Sale Count</th>
                    </tr>
                </thead>
                <tbody>{productList}</tbody>
            </table>
        </section>
    );
}