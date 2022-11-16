import { Link } from "react-router-dom"
import {Button , Card, Col }from 'react-bootstrap';
import "./Producto.css"

function Producto({id,title,thumbnail,price,category_id,page}) {
  return(
    <Col xs={1} lg={2} sm={5} className="colSpace">
      <Card className="card align">
        <div className="one">
            <Card.Title className="cardText titleCard">{title}</Card.Title>
            <Card.Img variant="top" className="cardImg one" src={thumbnail} alt={title} /> 
        </div>
          <div className="two">
            <Card.Text className="textConf cardText noP">#{category_id}</Card.Text>
            <Card.Text className="textConf  cardText">${price}</Card.Text>
          </div>
          <div className="three">
            <Button id="detail" className="textSize weight" as={Link} to={`/product/page${page}/${id}`}>Detalle</Button>
            <Button id="edit" className="textSize weight" as={Link} to={`/product/page${page}/edit/${id}`}>Editar</Button>
          </div>
      </Card>
    </Col>
  )
}

export default Producto