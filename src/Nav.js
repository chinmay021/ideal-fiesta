import React from 'react';
import './Nav.css';
import { Link} from 'react-router-dom';
function Nav() {
    return (
        <div>
            <ul className="nav__items">
                <li className="nav__left">
                    <Link to="/" style={{ textDecoration: 'none' , color:'white'}}>
                        Silicon Institute of Technology
                    </Link>
                </li>
                <ul className="nav__right" >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <li className="nav__item"><span className="nav__links">home</span></li>
                    </Link> 
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <li className="nav__item"><span className="nav__links">login</span> </li>
                    </Link>
                     < Link to="/developer" style={{ textDecoration: 'none' }}>
                        <li className="nav__item"><span className="nav__links">developer</span></li>
                    </Link>
                </ul>
            </ul>
        </div>
    )
}

export default Nav