//import Alert from 'react-bootstrap/Alert';
import Alert from '@mui/material/Alert';
import "./Alerta.css"

function Alerta({severity,text}){

  return(
    <Alert className="alertBox" variant="outlined" severity={severity}>
      {text}
    </Alert>
  )
}

export default Alerta