import React, { Component } from 'react';
import styles from './Sheets.module.css';
import { Link } from 'react-router-dom';

//images
import EltonJohn from '../Sheets/images/EltonJohn.jpg';

//links
import eltonJohn from '../../pages/Artists/EltonJohn/EltonJohn';



class Sheets extends Component {

    state = {
        sheets: [],
    }

    render() {
        return(
            <div className='app-outer-container'>
                <header className={styles.header}>
                    Sheet Music
                </header>
                <div className={styles.links}> 
                    <div>
                    <Link to='/sheet-music/elton-john' render={ props =>
                    <eltonJohn />
                    }><img src={EltonJohn} alt="Elton John"/>
                    <p>Elton John</p></Link>
                    </div>
                </div>
            </div>
        )
        }
    }

export default Sheets;