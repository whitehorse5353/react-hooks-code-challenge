import React, {useState} from 'react';

export const ProductsStore = React.createContext();
export const CartStore = React.createContext();
export const CurrencyStore = React.createContext();

const Store = ({children}) => {

    const [products, setProducts] = useState();
    const [basket, addToBasket] = useState([]);
    const [currency, setCurrency] = useState('usd');
    const [currencyValue, setCurrencyValue] = useState();

    const updateBasketState = (productId) => {
        const productExist = basket.filter(item => item.productId === productId);
        let updatedState;
        if (!productExist.length) {
            updatedState = [...basket, {
                productId,
                count: 1
            }];
        } else {
            updatedState = basket.map(item => {
                if (item.productId === productId) {
                    item.count += 1;
                    return item;
                }
                return item;
            });
        }
        addToBasket(updatedState);
    };

    const removeFromBasket = (productId) => {
        const updatedBasket = basket.map(product => {
            if (product.productId === productId && product.count) {
                product.count -= 1;
                return product.count ? product : {};
            }
            return product;

        }).filter(item => item.count);
        addToBasket(updatedBasket);
    };

    return (
        <CurrencyStore.Provider value={[currency, setCurrency, currencyValue, setCurrencyValue]}>
            <ProductsStore.Provider value={[products, setProducts]}>
                <CartStore.Provider value={[basket, updateBasketState, removeFromBasket]}>
                    {children}
                </CartStore.Provider>
            </ProductsStore.Provider>
        </CurrencyStore.Provider>
    )
};

export default Store;