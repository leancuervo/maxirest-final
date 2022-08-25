import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../../components/Loading/Loading'
import { TextComponent } from '../../components/Loading/TextComponent'
import Producto from '../../components/helpers/Producto'
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore'
import {useEffect ,useState} from 'react'



const ItemDetailContainer = () => {

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
 


  
  return (
    loading ?
    <Loading/>
    :
  <div style = {{textAlign:'center', marginTop: 200 }}>

   


    <TextComponent> 
      <ItemDetail product={product} />
    </TextComponent> 
    
    
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