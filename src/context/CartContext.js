
import {createContext, useState, useContext} from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState ([])

    const agregarAlCarrito = (objProducto) => {
        setCartList([
            ...cartList,
            objProducto
        ])
        
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return( 
        <CartContext.Provider value= {{
            cartList,
            agregarAlCarrito,
            vaciarCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider