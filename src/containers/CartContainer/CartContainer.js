import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {cartList, vaciarCarrito, eliminarProducto} = useCartContext()
  return (
    <div className='row mt-5'>
      <div className='col-8 mt-5'>
        <div className='col-8 mt-5'>
        
            {cartList.map(producto => <div key= {producto.id}>
                                      <img src={producto.image} alt="foto"/>
                                        
                                            Nombre: {producto.name} - Precio: {producto.price} - Cantidad: {producto.stock}
                                            <button onClick={() => eliminarProducto(producto.id)}>Borrar</button>
                                      
                                      </div> )}
            <button onClick={vaciarCarrito}>Vaciar</button>

            <div>
                <label htmlFor="" className='alert alert-danger'>
                  blablabla
                </label>
            </div>

        
      </div>

    </div>
    </div>
    )
}

export default CartContainer