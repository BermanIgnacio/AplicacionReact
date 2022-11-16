import {Form, Row, Col, InputGroup, FloatingLabel, Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import "./FormProducto.css"

function FormProducto({title,thumbnail,available_quantity,price,category_id,description,funcion}) {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  
  useEffect(
    ()=>{

      const setValores = async()=>{
        setValue("title",title)
        setValue("thumbnail",thumbnail)
        setValue("available_quantity",available_quantity)
        setValue("price",price)
        setValue("category_id",category_id)
        setValue("description",description)
      }        
      setValores();
  },//eslint-disable-next-line react-hooks/exhaustive-deps
  []);
  
  return(
    <Form noValidate  className="formBox columDisplay" onSubmit={handleSubmit(funcion)}>
      <Row className="space">
        <Form.Group as={Col}>
          <Row className="rowSpace">
            <Form.Group as={Col}>
              <Form.Label>Nombre</Form.Label>
              <InputGroup hasValidation>
                <Form.Control type="text" isInvalid={errors.title} {...register("title", { required: true })} />
                <Form.Control.Feedback type="invalid" tooltip>
                  Campo requerido.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>SKU</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">#</InputGroup.Text>
                <Form.Control type="text" isInvalid={errors.category_id} {...register("category_id", { required: true })} />
                <Form.Control.Feedback type="invalid" tooltip>
                  Campo requerido.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="rowSpace">
              <Form.Group as={Col}>
                  <Form.Label>Cantidad Disponible</Form.Label>
                  <Form.Control type="text" {...register("available_quantity", { required: false })} />
              </Form.Group>
              <Form.Group as={Col}>
                  <Form.Label>Precio</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                    <Form.Control type="text" isInvalid={errors.price} {...register("price", { required: true })} />
                    <Form.Control.Feedback type="invalid" tooltip>
                      Campo requerido.
                    </Form.Control.Feedback>
                  </InputGroup>
              </Form.Group>
          </Row>
          <Row className="campoImg ">
              <Form.Group>
                      <Form.Label>Imagen</Form.Label>
                  <InputGroup hasValidation>
                      <Form.Control type="text" isInvalid={errors.thumbnail} {...register("thumbnail", { required: true })} />
                      <Form.Control.Feedback type="invalid" tooltip>
                          Campo requerido.
                      </Form.Control.Feedback>
                  </InputGroup>
              </Form.Group>
          </Row>
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Group className="containerText spaceTop">
              <InputGroup hasValidation>
                  <FloatingLabel label="Descripción">
                      <Form.Control as="textarea" id="textArea" placeholder="Leave a comment here" {...register("description", { required: false })}/>
                  </FloatingLabel>
              </InputGroup>
          </Form.Group>
        </Form.Group>
      </Row>
      <Form.Group className="spaceTop">
          <Button type="submit" id="submit" className="textSize">Guardar</Button>
      </Form.Group>
    </Form>
  )
}

export default FormProducto