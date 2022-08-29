import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../../Data/ProductsData';







const Item = ({item}) => {

  const { name, price, stock, image, id } = item
  
  const onAdd = (count) =>{
    alert('Pedido de ' + name + ' por: ' + count + ' kg')
    }
    


    return (
        
        <div >
        
        <>
            <div  className='product'>
                <img src={image} alt={name}/>
            
              <div>
                <p>
                  {name} - ${price}
                </p>
              </div>
              <Link to={`/detalle/${id}`}>
                <Button variant="primary">Mas Info</Button>
              </Link>
              <ItemCount initial={1} stock={10} onAdd={onAdd}/>
              <button className='addBtn' onClick={() => console.log (item)}>Agregar al Carrito</button>
          </div>
        </>  
        
</div>
        )
}


export default Item


