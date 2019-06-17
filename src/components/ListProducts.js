import React, {useContext, useEffect} from 'react';
import {ProductsStore} from '../store'
import styled from 'styled-components';
import ListItem from './ListItem';

export const ItemWrapper = styled.div`
width:auto;
height:200px;
border: 1px #333 solid;
border-radius: 5px;
margin: 5px;
padding: 10px;
position: relative;
`;

export const ProductImage = styled.img`
width: 300px;
border-radius: 5px;
float: left;
`;

export const ProductTitle = styled.span`
padding: 0 0 0 10px;
font-weight: bold;
font-size: 18px;
`;

export const ProductPriceWrapper = styled.div`
margin: 10px 0 0 0;
text-align: left;
font-weight: bold;  
${(props => props.isCartPage ? `
position: absolute;
left: 321px;
    &::before {
    content: '${props.currency === 'usd' ? "$" : "£"}'
    }` : `&::after {
    content: '${props.currency === 'usd' ? "$" : "£"}'
    }`
)}`;

const ListProducts = () => {

    const [products, setProducts] = useContext(ProductsStore);

    useEffect(() => {
        fetch('http://localhost:1080/get-products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                return setProducts(data);
            })
    }, [setProducts]);

    return <>
        {products && products.map(item => <ListItem key={item.id} props={item}/>)}
    </>
};

export default ListProducts;