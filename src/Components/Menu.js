import React from 'react'
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <form className="container-fluid justify-content-start">
                    <button className="btn btn-outline-success me-2" type="button"><Link to='/'>Home</Link></button>
                    <button className="btn btn-outline-success me-2" type="button"><Link to='/login'>Login</Link></button>
                    <button className="btn btn-outline-success me-2" type="button"><Link to='/admin'>Admin</Link></button>
                </form>
            </nav>
        </div>
    )   
}

export default Menu
