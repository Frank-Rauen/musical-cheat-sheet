import React, {Component} from 'react';
import ModalImage from 'react-modal-image';
import styles from './Cheats.module.css';

//Images
import modes from '../Cheats/images/modes.png'

class Cheats extends Component {
    render() {
        return(
            <div className={styles.modals}>
            <div className={styles.container}>
                <ModalImage 
                className ={styles.modal}
                small = {modes}
                large = {modes}
                alt = 'Guitar Modes'
                />
                <p>Basic Guitar Modes</p>
            </div>
            </div>
        )
    }
}

export default Cheats;