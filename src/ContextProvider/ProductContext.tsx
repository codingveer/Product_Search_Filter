import React, {createContext, useContext} from 'react';
import {ProductStore} from '../Store/store';
import { useLocalObservable} from 'mobx-react';

const ProductContext = createContext(null);

export const ProductProvider = ({children}) => {
    const productStore = useLocalObservable(ProductStore);
    return(
        <ProductContext.Provider value={productStore}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProductStore = () => useContext(ProductContext);