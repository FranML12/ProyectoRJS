import './index.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
    const bars = () => {
        document.getElementById('nav').classList.toggle('ul-nav-show');
    }
    const [navMenus, setNavMenus] = useState([]);
    const navMenu = async() => {
        let response = await fetch('../navbar.json');
        let data = await response.json();
        setNavMenus(data);
    }
    useEffect(() =>{
        setTimeout(() => {
            navMenu();
        },2000)
    })
    return <>
        <nav className='nav'>
            <Link to={"/"} className="a">
                <h1 className='mt-2'>TecnoStore</h1>
            </Link>
            <ul className='ul-nav' id='nav'>
                {navMenus.map(navZ => {
                    return(
                        <li key={navZ.navlink}>
                            <Link to={navZ.navlink}>
                                {navZ.content}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <CartWidget />
            <FontAwesomeIcon icon={faBars} className='fa-2x mt-3 bars' id="bars" onClick={bars} />
        </nav>
    </>
}
export default Navbar;