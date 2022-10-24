import React, {createContext, useContext, ReactNode, ReactElement} from 'react';
import {ProductStore,ProductStoreType} from '../Store/store';
import { useLocalObservable} from 'mobx-react-lite';


const ProductContext = createContext<ProductStoreType>({} as ProductStoreType)

type Props = {
    children: JSX.Element,
  };


interface IStoreProvider 
{
	children: ReactNode;
}
export const ProductProvider = ({ children }: IStoreProvider): ReactElement => {
    const productStore  = useLocalObservable(ProductStore);
    return(
        <ProductContext.Provider value={productStore}>
            {children}
        </ProductContext.Provider>
    )
}
export const useProductStore = () => useContext(ProductContext);