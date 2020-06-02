import React, {Fragment} from 'react';
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return(
    <Fragment>
    <nav className={styles.navbar}>
    <Link to='/'><h1>Musical Cheat Sheet</h1></Link>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/metronome'>Metronome</Link></li>
    </nav>
    </Fragment>
    
        
    )
}

export default Navbar