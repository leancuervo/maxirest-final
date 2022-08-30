import React, { useEffect, useState } from 'react'

import Producto from '../helpers/Producto'
import Item from '../navegacion/Item'


const ItemList = ({products}) => {

      //  let [productos, setProductos] = useState ([]);

      //  useEffect (() => {
      //    let promesa = Producto(true, 2000);
      //    promesa.then (( response) => {
      //      setProductos (response);
      //      console.log(productos);
      //    });
      //  },[])
  console.log('ItemList')
  return (
          <div className='productContainer' >
              {products?.map( prod => 
              
                      <Item key={prod.id} prod={prod} />

              )}
        </div>

  )
}

export default ItemList