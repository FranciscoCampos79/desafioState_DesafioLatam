const Alert = ({alerta}) => {
    return (
      <>
          <div className= {`alert alert-${alerta.color}`} role="alert" style={{marginTop:"15px"}}>
             {alerta.msg}
          </div>
      </>  
    )
  }
  
  export default Alert;