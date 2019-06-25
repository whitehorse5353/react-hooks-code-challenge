import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Store from './store'
import ListProducts from './components/ListProducts'
import BasketItems from './components/BasketItems';
import CurrencyWrapper from './components/CurrencyWrapper';
import CheckoutBasket from './components/CheckoutBasket';
import CheckoutBasketWrapper from './components/CheckoutBasketWrapper';
import CheckOutTotal from "./components/CheckOutTotal";

const AppWrapper = styled.div`
width: 100%;
height: 100%;
background-color: #efefef;
`;

const Header = styled.header``;

const AppHeader = styled.h3`
color: black;
margin: 0;
padding: 15px 0 0 0;
text-align: center;
text-transform: capitalize;
height: 35px;
`;

function App() {
    return (
        <Router>
            <AppWrapper>
                <Store>
                    <Header>
                        <AppHeader children={"welcome to mini cart app"}/>
                        <CurrencyWrapper/>
                        <Link to='/basket/'><BasketItems/></Link>
                    </Header>
                    <Switch>
                        <Route path="/" exact component={ListProducts}/>
                        <Route exact path="/basket/">
                            <CheckoutBasketWrapper/>
                            <CheckoutBasket/>
                            <CheckOutTotal />
                        </Route>
                    </Switch>
                </Store>
            </AppWrapper>
        </Router>
    );
}

export default App;
