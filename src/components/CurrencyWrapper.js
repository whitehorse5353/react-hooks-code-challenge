import {CurrencyStore} from "../store";
import React, {useEffect, useContext} from "react";
import styled from "styled-components";

const Currency = styled.select`
    position: absolute;
    right: 55px;
    top: 15px;
`;

const CurrencyWrapper = () => {
    const [currency, setCurrency, , setCurrencyValue] = useContext(CurrencyStore);

    useEffect(() => {
        fetch('http://localhost:1080/convert-currency', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-currency': currency
            },
        })
            .then(res => res.json())
            .then(data => setCurrencyValue(data.from[0].mid))
            .catch(err => console.error(`Network call failed ` + err));
    }, [currency]);

    return (<Currency onChange={(e) => setCurrency(e.target.value)}>
        <option value='usd'>USD</option>
        <option value='gbp'>GBP</option>
    </Currency>)
};

export default CurrencyWrapper;