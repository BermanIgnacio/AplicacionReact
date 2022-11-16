import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getByIdProduct } from "../Services/productServices";

function Detalle() {
   const {id,page} =  useParams()
   const [producto,setProducto] = useState({});
   const [isLoading,setLoading] = useState(true)
   
   useEffect(
      ()=>{
         const listado = async()=>{
            try {
               const responseData = await getByIdProduct(id,page)
               setProducto(responseData.data())
               setLoading(false)
            } catch (e) {
               console.log(e)
            }
         }        
         listado()
   },
   //eslint-disable-next-line react-hooks/exhaustive-deps
   [id]);

   if(isLoading){
      return(
         <div className='app configBox columDisplay whiteFont'>
                <h2>
                    ...Loading
                </h2>
            </div>
      )
   }
   else{
      return(
         <div className="app whiteFont configBox columDisplay">
            <h1 className="align">{producto.title}</h1>
            <div className="columDisplay">
               <div className="item">
                  <div>
                     <img className="itemImg" src={producto.thumbnail} alt={producto.title} />
                  </div>
                  <div className="infoItem">
                     <p className="prices weight">Cantidad Disponible {producto.available_quantity}</p>
                     <p className="prices weight">${producto.price}</p>
                     <p className="sku">#{producto.category_id}</p>
                     <button className="textSize weight" id="buy">Comprar</button>
                  </div>
               </div>
               <div className="description textSize">
                     <p>{producto.description}</p>
               </div>
            </div>
         </div>
      )
   }
}

export default Detalle