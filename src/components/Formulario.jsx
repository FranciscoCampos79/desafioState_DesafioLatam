import { useState } from "react";

const Formulario = ({setAlerta}) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [contrasenha, setContrasenha] = useState('');
    const [confirmContrasenha, setConfirmContrasenha] = useState('');
   
    const validar = (e) => {
        e.preventDefault()
        if(nombre.trim() === '' || email.trim() === '' || contrasenha.trim() === '' || confirmContrasenha.trim() === '') {
            setAlerta({msg:"Completa todos los campos", color:"danger"});
            return
        }
        if (contrasenha !== confirmContrasenha){
            setAlerta({msg:"Las contraseñas deben ser iguales", color:"warning"})
            return
        }
        setAlerta({msg:"Registro completo", color:"success"})
        setNombre("")
        setEmail("")
        setContrasenha("")
        setConfirmContrasenha("")
    }

    return (
        <>
            <form className="formulario" onSubmit={validar}>
                <input
                    type="text"
                    name="nombre"
                    className="form-control m-2"
                    placeholder="Nombre"
                    onChange={(e) => setNombre(e.target.value)}
                    value = {nombre}
                />
                <input
                    type="text"
                    name="email"
                    className="form-control m-2"
                    placeholder="tucorreo@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value = {email}
                />
                <input
                    type="password"
                    name="contrasenha"
                    className="form-control m-2"
                    placeholder="Contraseña"
                    onChange={(e) => setContrasenha(e.target.value)}
                    value = {contrasenha}
                />
                <input
                    type="password"
                    name="confirmContrasenha"
                    className="form-control m-2"
                    placeholder="Confirmar contraseña"
                    onChange={(e) => setConfirmContrasenha(e.target.value)}
                    value = {confirmContrasenha}
                />
                <button type="submit" className="bg-success text-light p-1 px-5 rounded">Registrarse</button>
            </form>
        </>
    )
}

export default Formulario;