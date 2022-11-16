import { useState } from "react";
import FormProducto from "../Components/FormProducto/FormProducto";
import Alerta from "../Components/Alerta/Alerta";
import { newProduct } from "../Services/productServices";

function ProductoAlta() {

  const [showAlert, setShowNew] = useState({severity:"warning",text:"",hidden:false});

  const onSubmit = async data => {
    try {
      let today = new Date();
      let currentDate  = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      data.date=currentDate;
      setShowNew({severity:"success",text:"Producto Creado",hidden:true})
      await newProduct(data);
    } catch (e) {
      setShowNew({severity:"error",text:"Ocurrió un Error",hidden:true})
      console.log(e);
    }
  }
  
  return(
    <div className="configBox columDisplay app whiteFont borderColor">
      <FormProducto funcion={onSubmit}/>
      { showAlert.hidden ? <Alerta severity={showAlert.severity} text={showAlert.text}/> : null }
    </div>
  )
}

export default ProductoAlta