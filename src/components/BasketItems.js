import {CartStore} from "../store";
import React, {useContext} from "react";
import styled from "styled-components";

const Basket = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
`;

const Trolley = styled.span`
  font-size: 25px;
  font-weight: bold;
`;

const BasketCount = styled.span`
    font-size: 12px;
    display: inline-block;
    font-weight: bold;
    width: 16px;
    height: 16px;
    position: absolute;
    right: 10px;
    border-radius: 32px;
    background: black;
    text-align: center;
    color: white;
    top: 16px;
    left: 11px;
`;

const BasketItems = () => {
    const [basket] = useContext(CartStore);
    return <Basket>
        <Trolley><span aria-label='trolley-icon' role='img'>&#x1f6d2;</span>
            <BasketCount>{basket.reduce((val, item) => val + (item.count), 0)}</BasketCount>
        </Trolley>
    </Basket>
};

export default BasketItems;