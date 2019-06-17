import {CartStore, CurrencyStore, ProductsStore} from "../store";
import {ItemWrapper, ProductImage, ProductPriceWrapper, ProductTitle} from "./ListProducts";
import React, {useContext} from "react";
import styled from "styled-components";

const RemoveCartItems = styled.button``;

const NoItemToDisplay = styled.div`
text-align: center;
`;

const CheckoutBasket = () => {
    const [basket, , removeFromBasket] = useContext(CartStore);
    const [currency, , currencyValue] = useContext(CurrencyStore);
    const [products] = useContext(ProductsStore);

    return (basket.length && products) ? basket.map(item =>
        products.reduce((acc, product) => {
            if (acc.productId === product.id) {
                return <ItemWrapper key={product.id} isCartPage={true} hasCountToDisplay={product.count}>
                    <ProductImage src={product.image}/>
                    <ProductTitle children={product.name}/>
                    <ProductPriceWrapper currency={currency} isCartPage={true}>
                        {((product.price * acc.count) * currencyValue).toFixed()}
                        <div>Quantity: {acc.count}</div>
                        <RemoveCartItems children="Remove" onClick={() => removeFromBasket(product.id)}/>
                    </ProductPriceWrapper>
                </ItemWrapper>
            } else {
                return acc
            }
        }, item)
    ) : <NoItemToDisplay children={'No items in your cart'}/>
};

export default CheckoutBasket;