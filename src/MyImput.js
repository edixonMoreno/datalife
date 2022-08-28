import { useState } from "react";


const MyImput = () => {

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
        <form className="formulario">
            <div>
            <label htmlfor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeolder="Jon Dee"></input>
            </div>
            <div>
            <label htmlfor="correo">Correo</label>
            <input type="email" id="correo" name="correo" placeolder="correo@correo.com"></input>
            </div>
        <button type="submit">Enviar</button>
        </form>
    </>
    )
}

export default MyImput;