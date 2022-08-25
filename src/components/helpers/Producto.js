// const productos = [
//     {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' },
//     {id: 2, name: "aceite de oliva", price:20, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' },
//     {id: 3, name: "papa", price:10, stock: 2, image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'},

// ]

let p1 = {id: 1, name: "trufa", price:150, stock: 5, image: 'https://definicion.de/wp-content/uploads/2012/11/trufa-1.jpg' }
let p2 = {id: 2, name: "aceite de oliva", price:20, stock: 10, image: 'https://http2.mlstatic.com/D_NQ_NP_841076-MLA43642883689_102020-V.jpg' }
let p3 = {id: 3, name: "papa", price:10, stock: 2, image: 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/09/papa.jpg?resize=1080%2C608&quality=80&ssl=1'}
let p4 = {id: 4, name: "asado", price:100, stock: 20, image: 'https://resizer.glanacion.com/resizer/YwJjC66xmnez5NY25Nm_6x_kNWA=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/P3I7EMRO7BBSBGC3TULJSQZG5Q.jpg' }
let p5 = {id: 5, name: "harina", price:5, stock: 35, image: 'https://ardiaprod.vteximg.com.br/arquivos/ids/219870-1000-1000/Harina-000-Ca%C3%B1uelas-Ultra-Refinada-1-Kg-_1.jpg?v=637790488563100000' }

let productos =[];
productos.push(p1);
productos.push(p2);
productos.push(p3);
productos.push(p4);
productos.push(p5);

export const Productos = (resolution, delay) => {
    let promesa = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if (resolution) {
                resolve(productos)
            } else {
                reject("No se pudo encontrar el productos seleccionado, disculpe las molestias.")
            }
        }, delay);
    });
    console.log ("Productos");
    console.log (productos);
    console.log ("Promesa");
    console.log (promesa);
    return (promesa)

}

export default Productos
