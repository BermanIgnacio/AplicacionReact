import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import firebase from "../Config/firebase"

function SignUp(){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data =>{ 
        try {
            const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password);
            console.log(responseUser.user.uid);
            if(responseUser.user.uid){
                const document = await firebase.firestore().collection("usuarios")
                .add({
                    name: data.name,
                    userid:responseUser.user.uid
                })
                console.log(document);
            }
        } catch (e) {
            console.log(e);
        }
    }
    return(
        <div className="configBox columDisplay">
            <Form className="app configBox whiteFont columDisplay borderColor" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="title align" >
                    <h1 className='align'>Datos de Registro</h1>
                </Form.Group>
                <Form.Group className="container">
                    <p className="text">Nombre Completo</p>
                    <div className="display">
                        <div className="field columDisplay">
                            <input type="text" name="Name" id="name" {...register("name", { required: true })}/>
                            <label className="colorSubLable text"> Nombre </label>
                        </div>
                        <div className="field columDisplay">
                            <input type="text" name="Last Name" id="lastName" />
                            <label className="colorSubLable text"> Apellido </label>
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className="container">
                    <p className="text">E-mail</p>
                    <div className="field columDisplay">
                        <input type="email" name="mail" id="email" placeholder="ex: email@yahoo.com" {...register("email", { required: true })}/>
                        <label className="colorSubLable text"> example@example.com  </label>
                    </div>
                    <p className="text">Número de Teléfono </p>
                    <div className="field columDisplay">
                        <input type="tel" name="phone" id="tel" placeholder="(000) 000-0000"/>
                    </div>
                </Form.Group>
                <Form.Group className="container">
                    <p className="text">Contraseña</p>
                    <div className="display">
                        <div className="field columDisplay">
                            <input type="password" name="password" id="password" {...register("password", { required: true,minLength:6 })}/>
                            <label className="colorSubLable text">Password </label>
                        </div>
                        <div className="field columDisplay">
                            <input type="password" name="confirm" id="confirm" />
                            <label className="colorSubLable text">Confirm Password </label>
                        </div>
                    </div>
                </Form.Group>
                <Form.Group className="configBox columDisplay">
                    <input id="submit" className='whiteFont' type="submit" value="Submit" />
                </Form.Group>
                <Form.Group>
                    {(errors.password) && <span className="warning">Fields are required</span>}
                </Form.Group>
            </Form>
        </div>
    )
}

export default SignUp;