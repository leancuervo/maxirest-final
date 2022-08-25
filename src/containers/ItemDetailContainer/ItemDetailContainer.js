import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
// import {getFetch} from '../../components/helpers/getFetch'
import Loading from '../../components/Loading/Loading'
import { TextComponent } from '../../components/Loading/TextComponent'
import Producto from '../../components/helpers/Producto'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import {useEffect ,useState} from 'react'



const ItemDetailContainer = () => {
  // const [producto, setProducto] = useState ({})
  const [product, setProducts] = useState([{}])
  const {categoriaId} = useParams()
  const [loading, setLoading] = useState(true)
  

  useEffect ( () =>{
    Producto(categoriaId)
    if (categoriaId) {
      Producto()
      .then(resp => setProducts(resp.fitler(product =>product.categoria === categoriaId)))
      .catch (err => console.log(err))
      .finally(() => setLoading(false))
    }
  },[])
    // }else {
    //   Productos()
    //   .then(resp => setProducts(resp))
    //   .catch (err => console.log(err))
    //   .finally(() => setLoading(false))
    // }
  // useEffect( () =>{
    //       Productos(categoriaId)
    // useEffect (() =>{
    //     const db = getFirestore ()
    //     const queryProduct = doc(db, 'items', categoriaId )
    //     getDoc(queryProduct)
    //     .then(resp => setProducto( {id: resp.id, ...resp.data()}))
    // },[])
  //       .then (data => setProducto(data))
  //       .catch (err => console.log(err))
  //       .finally(() => setLoading(false))
  // }, [categoriaId])


// useEffect(() => {
//   const db = getFirestore()
//   const querryColleccion = collection(db, 'items')
//   getDocs(querryColleccion)
//   .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
//   .catch(err => console.log(err))
//   .finally(() => setLoading(false))
// })


  
  return (
    loading ?
    <Loading/>
    :
  <div style = {{textAlign:'center', marginTop: 200 }}>

   


    <TextComponent> 
      <ItemDetail product={product} />
    </TextComponent> 
    
    {/* { detalleId.map(prod =><ItemDetail key={prod.id} prod={prod}/>)} */}
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