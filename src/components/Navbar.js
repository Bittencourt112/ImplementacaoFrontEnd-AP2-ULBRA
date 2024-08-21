import { Link } from 'react-router-dom';

import styles from './Navbar.module.css'

import logo from '../images/logo.png';

function Navbar() {
    return(
        <div className={styles.navbar}>
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <ul>
                <Link to="/"><li>HOME</li></Link>
                <Link to="/products"><li>PRODUCTS</li></Link>
                <Link to="/contact"><li>CONTACT</li></Link>
            </ul>
        </div>
    );
}

export default Navbar;