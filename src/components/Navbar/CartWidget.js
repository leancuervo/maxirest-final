import React, { useEffect, useState } from 'react'
import {useCartContext} from '../../context/CartContext';


const CartWidget = () => {
  const [cartOpen, setCartOpen] = useState(false);
    const [productsLength, setProductsLength] = useState(0);

    const {cartItem} = useCartContext();

    useEffect(() => {
      setProductsLength(
        cartItem.reduce((previous, current) => previous + current.amount, 0)
      )
    }, [cartItem]);

    const total = cartItem.reduce(
      (previous, current) => previous + current.amount * current.price, 0
    );
  return (
    <div className='conteiner-Cart'>
        <div className="cartWidget conteiner-fluid d-block float-end">
            <li className='shop-Cart'>
              <img src='./cart.svg' width='30' alt='carrito de compras'/>
            </li>
            <li className='cerrar'>
                <img src= './x.svg' width='15' alt='cerrar'/>
            </li>
            <span>0</span>
        </div>
    </div>
  )
}

export default CartWidget