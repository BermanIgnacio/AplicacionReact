import React,{useState,useEffect} from "react";
import Pagination from '@mui/material/Pagination';
import { getAllPopulares } from "../../Services/productServices";
import Row from "react-bootstrap/Row"
import Carga from "../Carga/Carga";
import Producto from "../Producto/Producto";
import "./ProductosPopulares.css"

function ProductosPopulares() {
    const [productos,setProductos] = useState([]);
    const [isLoading,setLoading] = useState(true)
    const [page,setPage] = useState(1);
    useEffect(
        ()=>{
            const listado = async()=>{
                try {
                    const responseData = await getAllPopulares();
                    setProductos(responseData)
                    setLoading(false)
                } catch (e) {
                    console.log(e)
                }
            }
            listado()
        },[page]);

    const handleChange = (event,value) => {
        setPage(value);
    };
        
  return(
    <Carga loading={isLoading}>
      <div className='app configBox columDisplay'>
        <h1 className="title align whiteFont" >Lista de Productos</h1>
          <Row className="productosContainer"> 
            {productos.map(element=><Producto key={element.id} {...element.data()} id={element.id} page={page}/>)}
          </Row>
        <div className="paginacion">
          <Pagination className="paginacionStyle" count={6} showFirstButton showLastButton onChange={handleChange}/>
        </div>
      </div>
    </Carga>
  )
    
}

export default ProductosPopulares