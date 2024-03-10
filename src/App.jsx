import { useState } from 'react'
import Registro from './components/Registro'

const App = () => {
  const [alerta, setAlerta] = useState({msg:"", color:""})

  return (
    <>
      <div className='bg-light p-5 rounded-5'>
        <h1>Crear una cuenta</h1>
        <Registro alerta={alerta} setAlerta={setAlerta}/>
      </div>        
    </>
  )
}

export default App;