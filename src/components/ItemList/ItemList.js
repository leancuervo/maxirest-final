import React, { useEffect, useState } from 'react'

import Producto from '../helpers/Producto'
import Item from '../navegacion/Item'


const ItemList = ({product}) => {

       let [productos, setProductos] = useState ([]);

       useEffect (() => {
         let promesa = Producto(true, 2000);
         promesa.then (( response) => {
           setProductos (response);
           console.log(productos);
         });
       },[])

  return (
          <div style= { { display:'flex', flexDirection: 'row', justifyContent: 'center', flexWarp: 'warp'}}>
              {productos.map( item => 
              
                      <Item item={item} key={item.id}/>

              )}
        </div>

  )
}

export default ItemList