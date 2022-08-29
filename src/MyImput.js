import { useState } from "react";
import "./MyInput.css"
import {Formik} from "formik";


const MyImput = () => {

    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    // const [inputNombre, cambiarInputNombre] = useState("");
    // const [inputCorreo, cambiarInputCorreo] = useState("");

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Formulario Enviado!");
    // }

    //     const handleInputNombre = (e) => {
    //         cambiarInputNombre(e.target.value);
    //     }
    

    //     const handleInputCorreo = (e) => {

    //         cambiarInputCorreo(e.target.value);
    // }

    return (
    <> 
    <Formik 
    initialValues= {{
        nombre: "",
        correo: ""
    }}

    validate={(valores) => {
        let errores = {};
        if(!valores.nombre){
            errores.nombre = "Por favor ingresa un nombre"
        } else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
           errores.nombre = "El nombre solo puede contener letras y espacios"; 
        } 
        
        if(!valores.correo){
            errores.correo = "Por favor ingresa un correo"
        }else if( !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
            errores.correo = "Debe ingresar un correo valido";
         }
        return errores;
 } }
    onSubmit={(valores, {resetForm}) =>{
        resetForm();
        cambiarFormularioEnviado(true);
        setTimeout(() => {
            cambiarFormularioEnviado(false)
        }, 5000);
        console.log("Formulario enviado!");
    }}
    >
       
    {({values, touched, errors, handleSubmit, handleChange, handleBlur}) => (

        <form className="formulario" 
        onSubmit= {handleSubmit} 
        action="direccion-de-envio-de-datos" 
        method="get">
            
            
            <div>
            <label htmlFor="nombre">Nombre</label>
            <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Jon Dee" 
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            >
                
            </input>
            {touched.nombre && errors.nombre && <div className="error">{errors.nombre}</div>}
            </div>
            <div>
            <label htmlFor="correo">Correo</label>
            <input 
            type="email" 
            id="correo" 
            name="correo" 
            placeholder="correo@correo.com" 
            value={values.correo}
            onChange={handleChange}
            onBlur={handleBlur}
            ></input>
            {touched.correo && errors.correo && <div className="error">{errors.correo}</div>}
            </div>
        <button type="submit">Enviar</button>
       {formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
                </form>

    )}

    </Formik>
    </>
    )
}

export default MyImput;