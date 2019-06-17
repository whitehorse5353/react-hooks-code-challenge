import {CartStore, CurrencyStore} from "../store";
import React, {useContext} from "react";
import {ItemWrapper, ProductImage, ProductPriceWrapper, ProductTitle} from "./ListProducts";
import styled from "styled-components";

const ProductDescription = styled.div`
font-size: 14px;
margin: 10px 0 0 10px;
position: absolute;
left: 312px;
padding: 0 10px 0 0;
`;

const AddToCart = styled.button``;

const ListItem = ({props}) => {

    const [, updateBasketState] = useContext(CartStore);
    const [currency, , currencyValue,] = useContext(CurrencyStore);
    return <ItemWrapper>
        <ProductImage src={props.image}/>
        <ProductTitle children={props.name}/>
        <ProductDescription>
            {props.description}
            {!isNaN(currencyValue) ?
                <ProductPriceWrapper currency={currency}>
                    <span>Price: </span> {(props.price * currencyValue).toFixed()}
                </ProductPriceWrapper>
                : <div>...</div>}
            <AddToCart onClick={() => updateBasketState(props.id)}>
                Add to cart
            </AddToCart>
        </ProductDescription>
    </ItemWrapper>
};

export default ListItem