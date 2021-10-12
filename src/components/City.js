import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { HeaderContext } from '../context';

export default function City() {
    const [cities, setCities] = useState([]);
    const clickHandel = useContext(HeaderContext);

    useEffect(() => {
        axios.get('https://assessments.reliscore.com/api/cities/')
            .then(response => setCities(response.data.data));
    }, []);

    return (
        <React.Fragment>
            <section className='section-container'>
                <h4 className='mb-10'>City List</h4>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cities && cities.map((item, index) => {
                                return <tr key={item}>
                                    <td>{index}</td>
                                    <td><Link to={{ pathname: `/city/${item}` }} onClick={clickHandel.handleCityClick}>{item}</Link></td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </section>
        </React.Fragment>
    )
}