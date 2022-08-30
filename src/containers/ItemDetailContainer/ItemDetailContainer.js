import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import { TextComponent } from '../../components/Loading/TextComponent'
import Productos from '../../components/helpers/Producto'
import {doc, collection, getDoc, getFirestore} from "firebase/firestore"

import {useEffect ,useState} from 'react'



const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const {productId} = useParams()
  
  useEffect(() => {
    const db = getFirestore()
    const queryProduct = doc(db, 'item', productId)
    getDoc(queryProduct)
    .then(resp => setProducto({ id:resp.id, ...resp.data()}))
  }, [productId])
  

  // useEffect ( () =>{
  //   Productos(productId)
  //   .then(data => setProducto(data))
  // },[productId])
 


  
  return (

  <div>
    
    {
      producto.id ?
              <ItemDetail producto = {producto} />

              :

              <h1>Aguarde un momento...</h1>
    }


    {/* <TextComponent> 
      <ItemDetail producto={producto} />
    </TextComponent>  */}
    
    
  </div>
)
}

















export default ItemDetailContainer




// const [data, setData] = useState({});

// useEffect(() =>{
    //   const getData = new Promise ( resolve =>{
      //     setTimeout(() => {
        //       resolve(producto);
        //     }, 3000);
        //   });
        //   getData.then(res => setData(res))
        // }, [])
        
        
        
        //   const [itemsDetail, setItemsDetail] = useState([])
        //   const { detalleId } = useParams()
        //   const [loading, setLoading] = useState(true)
        
        //       useEffect(() =>{
        //         if (detalleId) {
                  
        //           getFetch()
        //           .then(resp => setItemsDetail(resp.filter(item => item.detalle === detalleId))
        //           .catch(error => console.log(error)))
        //           .finally(() => setLoading(false))
        //         }else{
        //           getFetch()
        //             .then(resp => setItemsDetail(resp))
        //             .catch(error => console.log(error))
        //             .finally( setLoading(false))
        //           }
                
        //       }, [detalleId])
            
        //       useEffect(()=>{
        //         getFetch()
              
        //     },[])
               
        
        // console.table(detalleId)