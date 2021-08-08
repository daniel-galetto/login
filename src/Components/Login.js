import React, { useState } from 'react'
import { auth } from '../firebaseconfig'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState ('')
    const [password,setPassword] = useState ('')
    const [mensajeError,setMensajeError] = useState (null)
    const historial = useHistory()

    const registrarse = (e)=>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
            .then ( r => historial.push('/'))
            .catch(e => {
                if (e.code === 'auth/invalid-email'){        
                    setMensajeError ('Formato de mail incorrecto')  
                } 
                if (e.code === 'auth/weak-password'){
                    setMensajeError ('La contraseña debe tener 6 caracteres o mas')
                }
            })
    }

    const loginUser = ()=> {
        auth.signInWithEmailAndPassword(email,password)
        .then( (r) =>  historial.push('/'))
        .catch( (err) => {
            
            if (err.code === 'auth/user-not-found'){        
                setMensajeError ('Usuario incorrecto')  
            } 
            if (err.code === 'auth/wrong-password'){        
                setMensajeError ('Contraseña incorrecta')  
            } 
            

            console.log(err)
        })
    }

    return (
        <div>
            <h1 className="text-center">PAGINA LOGIN</h1>

            <div className="container text-center">

                <div className="row mt-2 "> 
                    <div className="col"></div>
                    
                    <div className="col">

                    <form onSubmit={registrarse}  className="form-group">

                    <input 
                        onChange={(event)=>{setEmail(event.target.value)}} 
                        type="email" 
                        className="form-control m-2" 
                        placeholder="Ingresa tu Mail"/>
                        
                    <input 
                        onChange={(event)=>{setPassword(event.target.value)}} 
                        type="password" 
                        className="form-control m-2" 
                        placeholder="Ingresa la contraseña"/>

                    <button type="submit" className="btn btn-primary m-2">Registrar</button>       
                    
                </form>

                    <button onClick={loginUser} type="submit" className="btn btn-success m-2">Iniciar Sesion</button>  

                    {
                        mensajeError != null? <div>{mensajeError}</div> : <span></span> 
                    }


                    </div>

                    <div className="col"></div>

                </div>

            </div>   
        </div>

    )
}

export default Login
