import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import firebase from "../Config/firebase"
import Form from 'react-bootstrap/Form';
 
function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const userIn = await firebase.auth().signInWithEmailAndPassword(data.email,data.password);
            console.log(userIn.user.uid);
        } catch (e) {
            console.log(e);
        }
    }
    return(
        <div className="configBox columDisplay">
            <Form className="app configBox login whiteFont columDisplay borderColor" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="space">
                    <input className="align" type="email" size="15" placeholder="email" {...register("email", { required: true })}/>
                </Form.Group>
                <Form.Group>
                    <input className="align" type="password" size="15" placeholder="password" {...register("password", { required: true })}/>
                </Form.Group>
                <Form.Group>
                    <input id="submit" className="whiteFont" type="submit" value="Submit"/>
                </Form.Group>
                <Form.Group>
                    {(errors.username || errors.password) && <span className="warning">Fields are required</span>}
                    <span className="textSize"> No tienes cuenta? <Link to="/signup" className="weight"><b className="whiteFont">Registrarse</b></Link></span>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Login