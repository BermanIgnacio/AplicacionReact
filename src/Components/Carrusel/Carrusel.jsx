import { useEffect, useState } from 'react';
import { getProductosNuevos } from '../../Services/productServices';
import Carousel from 'react-bootstrap/Carousel';
import Carga from "../Carga/Carga";
import Producto from "../Producto/Producto";
import "./Carrusel.css"
function Carrusel() {

    const [productos,setProductos] = useState([]);
    const [isLoading,setLoading] = useState(true)

    useEffect(
        ()=>{
            const listado = async()=>{
                try {
                    const responseData = await getProductosNuevos();
                    setProductos(responseData)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }
            listado()
        },[]);

  return(
    <Carga loading={isLoading}>
      <div className="app setDisplay">
        <Carousel slide={false} className="carruselBox ">
          {productos.map(producto=>{return <Carousel.Item className='carruselItem'   key={producto.id}>
              <Producto key={producto.id} {...producto.data()} id={producto.id}/>
          </Carousel.Item>})}
        </Carousel>
      </div>
      {/* interval={2500} */}
    </Carga>
  )
}

export default Carrusel;