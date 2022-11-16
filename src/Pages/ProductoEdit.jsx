import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProduct, getByIdProduct, setUpdate } from "../Services/productServices";
import {Button} from 'react-bootstrap';
import FormProducto from "../Components/FormProducto/FormProducto";
import Alerta from "../Components/Alerta/Alerta"
import Carga from "../Components/Carga/Carga";

function ProductoEdit() {
  const {id,page} = useParams();
  const [isLoading,setLoading] = useState(true)
  const [producto,setProducto] = useState();
  const [showAlert, setShowDelete] = useState({severity:"warning",text:"",hidden:false});
  const [showSuccess, setShowEdit] = useState({severity:"warning",text:"",hidden:false});
  const [habilitado, setHabilitado] = useState(false);

  useEffect(
    ()=>{
      const listado = async()=>{
        try {
            const responseData = await getByIdProduct(id,page);
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

  const onSubmit = async data => {
    try {
      setUpdate(id,data,page)
      setShowEdit({severity:"success",text:"Producto Editado",hidden:true})
    } catch (e) {
      setShowEdit({severity:"error",text:"Ocurrió un Error",hidden:true})
      console.log(e);
    }
  }

  const handleDelete = async ()=>{
    try {
      await deleteProduct(id);
      setShowDelete({severity:"success",text:"Producto Eliminado",hidden:true})
      setHabilitado(true);
    } catch (e) {
      setShowDelete({severity:"error",text:"Ocurrió un Error",hidden:true})
      console.log(e);
    }
  }
  return(
    <Carga loading={isLoading}>
      <div className="configBox columDisplay app whiteFont borderColor">
          <Button id="delete" className="textSize space" onClick={handleDelete} disabled={habilitado}>Eliminar</Button>
          { showAlert.hidden ? <Alerta severity={showAlert.severity} text={showAlert.text}/> : null }
          <FormProducto {...producto} funcion={onSubmit}/>
          { showSuccess.hidden ? <Alerta severity={showSuccess.severity} text={showSuccess.text}/> : null }
        </div>
    </Carga>
  )
}

export default ProductoEdit