import React from 'react'


const CartWidget = () => {
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