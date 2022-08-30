import React, { useContext, useEffect, useState } from 'react'
import {addDoc, collection, getDocs, getFirestore, documentId, where, writeBatch, doc, query} from "firebase/firestore"
import CartContextProvider, { useCartContext } from '../../context/CartContext'

const CartContainer = () => {
    const {cartList, vaciarCarrito, eliminarProducto, precioTotal} = useCartContext()

    const generarOrden = async () => {
      const order = {}
      order.buyer = {name:'lea', phone: '124554', email:'asd@gmail.com'}

      order.items = cartList.map(product => {
        return{
          id:product.id,
          name:product.name,
          price: product.price

        }
      })
      order.total = precioTotal()

      const db =getFirestore()
      const queryOrders = collection(db, 'orders')
      addDoc(queryOrders)
      .then(resp => console.log(resp))
      .catch(err=>console.log(err))
      .finally(() => vaciarCarrito())

      const queryCollectionStock = collection(db, 'items')

      const queryActualizarStock = query(
        queryCollectionStock, 
        where(documentId() , 'in', cart.map(it => it.id))
      )

      const batch = writeBatch(db)

      await getDocs(queryActualizarStock)
      .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        stock: res.data().stock - cart.find(item => item.id === res.id).cantidad
      })))
      .catch(err => console.log(err))
      .finally(() => emptyCart())

      batch.commit ()
    }

    return (

      <div className='row mt-5'>
        <div className='col mt-5'>
          <ul>
            {cartList.map(producto => <li>
                                        <img src= {producto.image} alt='foto'/>
                                        {producto.name} {producto.price} {producto.cantidad}
                                        <button onClick={() => eliminarProducto(producto.id)}>X</button>
                                      </li> )}
          </ul>
          <button onClick={vaciarCarrito}>Vaciar</button>
        </div>
      </div>


    )
}

export default CartContainer