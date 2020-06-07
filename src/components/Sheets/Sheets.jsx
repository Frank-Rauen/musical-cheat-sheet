import React, { Component, Fragment } from 'react';
import styles from './Sheets.module.css';
import { Link } from 'react-router-dom';
import EltonJohn from '../Sheets/images/EltonJohn.jpg';

class Sheets extends Component {
    render() {
        return(
            <Fragment>
            <div className={styles.sheets}>
                <header className={styles.header}>
                    Sheet Music
                </header>
                <div className={styles.links}>
                <Link to='/EltonJohn'><img src={EltonJohn} alt="Elton John"/></Link>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Sheets;