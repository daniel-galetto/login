import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../firebaseconfig'

const Menu = () => {
    const [usuario,setUsuario] = useState(null)
    useEffect(() =>{
        auth.onAuthStateChanged ((user) => {
            if ( user ) {
                setUsuario(user.email)
            }
        })
    },[])

    const cerrarSession = () => {
        auth.signOut()
        setUsuario(null)
        historial.push('/')
    }

    const historial = useHistory()

    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button"><Link to='/'>Home</Link></button>
                    {
                    !usuario ? (<button className="btn btn-outline-success me-2" type="button"><Link to='/login'>Login</Link></button>) : (<span></span>) 
                    }
                    
                    {
                    usuario ? (<button className="btn btn-outline-success me-2" type="button"><Link to='/admin'>Admin</Link></button>) : (<span></span>) 
                    }    
                    
                    {
                    usuario ? (<button onClick={cerrarSession} className="btn btn-outline-danger float-end">Cerrar Sesion</button>) : (<span></span>) 
                    }
               
                </form>
               
            </nav>
        </div>
    )   
}

export default Menu
