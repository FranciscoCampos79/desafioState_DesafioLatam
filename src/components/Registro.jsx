import SocialButton from "./SocialButton";
import Alert from "./Alert";
import Formulario from './Formulario'

const Registro = ({alerta, setAlerta}) => {
    
  return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <SocialButton icon="fa-brands fa-facebook fa-2x p-4 border border-black rounded-circle" /></div>
                    <div className="col">
                        <SocialButton icon="fa-brands fa-github fa-2x p-4 border border-black rounded-circle" /></div>
                    <div className="col">
                        <SocialButton icon="fa-brands fa-linkedin fa-2x p-4 border border-black rounded-circle" />
                    </div>
                </div>
            </div>
            <SocialButton text= "O usa tu email para registrarte" />
            <Formulario setAlerta={setAlerta}/>
            <Alert alerta={alerta} />
        </>
    );
};

export default Registro;