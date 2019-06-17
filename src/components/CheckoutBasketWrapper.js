import {Link} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const BackButton = styled.div`
    color:black;
    font-weight: bold;
    font-size: 22px;
    position: absolute;
    top: 15px;
    left: 10px;
`;
const CheckoutBasketWrapper = () => <Link to='/' style={{textDecoration: 'none'}}><BackButton children={'↩'}/></Link>;

export default CheckoutBasketWrapper;
