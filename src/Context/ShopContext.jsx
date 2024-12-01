import { createContext } from 'react';
import product_data from '../assets/mock_data';

export const ShopContext = createContext(null);

const ShopContextProvider = ({children}) => {

    const contextValue = {product_data};
    
    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;