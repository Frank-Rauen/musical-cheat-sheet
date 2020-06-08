import React, { Component } from 'react';
import styles from './Sheets.module.css';
import { Link } from 'react-router-dom';

//images
import EltonJohn from '../Sheets/images/EltonJohn.jpg';

//links
import eltonJohn from '../../pages/Artists/EltonJohn/EltonJohn';



class Sheets extends Component {
    render() {
        return(
            <div className='app-outer-container'>
                <header className={styles.header}>
                    Sheet Music
                </header>
                <div className={styles.links}> 
                    <img src={EltonJohn} alt="Elton John"/>
                </div>
            </div>
        )
        }
    }

export default Sheets;