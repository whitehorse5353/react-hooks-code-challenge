import React, {useContext} from 'react';
import {CartStore, ProductsStore, CurrencyStore} from "../store";
import styled from 'styled-components';

const CurrencySymbol = styled.div`
float: right;
font-weight: bold;
padding: 0 5px 0 0;
&::after{
content: '${(props) => props.currency === "usd" ? "$" : "£"}';
  }
`;

const CheckOutTotal = () => {
    const [basket] = useContext(CartStore);
    const [products] = useContext(ProductsStore);
    const [currency, , currencyValue,] = useContext(CurrencyStore);

    const itemsAvailableInBasket = basket.map(itemInBasket => {
        return products.reduce((calculatedProductPrice, product) => {
            if (product.id === itemInBasket.productId) {
                return calculatedProductPrice + (Number(product.price) * itemInBasket.count) * currencyValue;
            }
            return calculatedProductPrice;
        }, 0);
    }).reduce((sum, price) => sum + price, 0);

    return <>{itemsAvailableInBasket ?
        <CurrencySymbol currency={currency}>Total cart amount:{itemsAvailableInBasket.toFixed()}</CurrencySymbol> : ''}</>
};

export default CheckOutTotal;
