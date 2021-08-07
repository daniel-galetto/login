import { useState } from 'react'

const Login = () => {

    const [email,setEmail] = useState ('')
    const [password,setPassword] = useState ('')
 


    return (
        <div>
            <h1 className="text-center">PAGINA LOGIN</h1>

            <div className="container text-center">

                <div className="row mt-2"> 
                    <div className="col"></div>
                    
                    <div className="col">

                    <form className="form-group">

                    <input 
                        onChange={(event)=>{setEmail(event.target.value)}} 
                        type="text" 
                        className="form-control m-2" 
                        placeholder="Ingresa tu Mail"/>
                        
                    <input 
                        onChange={(event)=>{setPassword(event.target.value)}} 
                        type="password" 
                        className="form-control m-2" 
                        placeholder="Ingresa la contraseña"/>

                    <button type="submit" className="btn btn-primary m-2">Registrar</button>       
            
                </form>

                    </div>

                    <div className="col"></div>

                </div>

            </div>   
        </div>

    )
}

export default Login
