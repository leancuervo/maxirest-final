import {createContext, useState, useContext, useEffect} from "react"


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)



const CartContextProvider = ({children}) => {
    
    
    const [cartItems, setCartItems] =useState (() =>{
    try {
        const productosEnLocalStorage = localStorage.getItem('cartProducts')
        return productosEnLocalStorage? JSON.parse(productosEnLocalStorage) : []
    } catch(error){
        return[];
    }
});

useEffect(() => {
  localStorage.setItem('cartProducts', JSON.stringify(cartItems))
}, [cartItems]);


const addItemToCart = (product) => {
    const inCart = cartItems.find((
        productInCart) => productInCart.id === product.id
        );
    
    if(inCart){
        setCartItems(
            cartItems.map((productInCart)=>{
                if(productInCart.id === product.id){
                    return {...inCart, amount: inCart.amount + 1}
                } else return productInCart;
            })
        );
    } else {
        setCartItems([...cartItems, {...product, amount:1}])
}

const deleteItemCart = (product) => {
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
    );
    if(inCart.amount === 1){
        setCartItems(
            cartItems.filter(productInCart => productInCart.id !== product.id)
        );
    }else {
        setCartItems((productInCart) => {
            if(productInCart.id === product.id ) {
                return { ...inCart, amount: inCart.amount - 1}
            }else return productInCart
        });
    }
    
};

    return (
        <CartContext.Provider value = {{cartItems, addItemToCart, deleteItemCart}}>
            {children}
        </CartContext.Provider>
    )

};

}

export default CartContextProvider












// import {createContext, useState, useEffect} from "react";


// export const useCartContext = () => useContext(CartContext);

// const CartContextProvider = ({children}) => {
//     const [cartItems, setCartItems] =useState (() =>{
//         try {
//             const productosEnLocalStorage = localStorage.getItem('cartProducts')
//             return productosEnLocalStorage? JSON.parse(productosEnLocalStorage) : []
//         } catch(error){
//             return[];
//         }
//     });

//     useEffect(() => {
//       localStorage.setItem('cartProducts', JSON.stringify(cartItems))
//     }, [cartItems]);


//     const addItemToCart = (product) => {
//         const inCart = cartItems.find((
//             productInCart) => productInCart.id === product.id
//             );
        
//         if(inCart){
//             setCartItems(
//                 cartItems.map((productInCart)=>{
//                     if(productInCart.id === product.id){
//                         return {...inCart, amount: inCart.amount + 1}
//                     } else return productInCart;
//                 })
//             );
//         } else {
//             setCartItems([...cartItems, {...product, amount:1}])
//     }

//     const deleteItemCart = (product) => {
//         const inCart = cartItems.find(
//             (productInCart) => productInCart.id === product.id
//         );
//         if(inCart.amount === 1){
//             setCartItems(
//                 cartItems.filter(productInCart => productInCart.id !== product.id)
//             );
//         }else {
//             setCartItems((productInCart) => {
//                 if(productInCart.id === product.id ) {
//                     return { ...inCart, amount: inCart.amount - 1}
//                 }else return productInCart
//             });
//         }
        
//     };

//         return (
//             <CartContext.Provider value = {{cartItems, addItemToCart, deleteItemCart}}>
//                 {children}
//             </CartContext.Provider>
//         )

//     };
// };
// export default CartContextProvide
// ---------------------------------------------------------------------------------------

// export const useCartContext = () => useContext(CartContext)



// const CartContextProvider = ({children}) => {

//     const [cartList, setCartList] = useState ([])

//     const agregarAlCarrito = (objProducto) => {
//         setCartList([
//             ...cartList,
//             objProducto
//         ])
        
//     }

//     const vaciarCarrito = () => {
//         setCartList([])
//     }

//     return( 
//         <CartContext.Provider value= {{
//             cartList,
//             agregarAlCarrito,
//             vaciarCarrito
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }

// export default CartContextProvider