import React, {Component} from 'react';
import styles from './Metronome.module.css';

import click1 from './click1.wav';
import click2 from './click2.wav';


class Metronome extends Component {
    constructor(props){
        super(props);

        this.state = {
            playing: false,
            count: 0,
            bpm: 100,
            beatsPerMeasure: 4
        }
        this.click1 = new Audio(click1);
        this.click2 = new Audio(click2);
        
    }

    handleBpmChange = e => {
        const bpm = e.target.value;
        if (this.state.playing) {
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (40 / bpm) * 1000)
            this.setState({
                count: 0,
                bpm
            });
        } else {
            this.setState({ bpm });
        }
        
    };

    startStop = () => {
        if(this.state.playing) {
            clearInterval(this.timer);
            this.setState({
                playing: false
            });
        } else {
            this.timer = setInterval(
                this.playClick,
                (40 / this.state.bpm) * 1000
            );
            this.setState({
                count: 0,
                playing: true
            },
            this.playClick
            );
        }
    };

    playClick = () => {
        const { count, beatsPerMeasure} = this.state;

        if (count % beatsPerMeasure === 0) {
            this.click2.play();
        } else {
            this.click1.play();
        }
        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    };      

    render() {
        const { playing, bpm } = this.state;
    

        return(
        <div className={styles.metronome}>
            <header className={styles.header}>Metronome</header>
            <div className={styles.description}>
            <h1>The metronome is the most important tool you have
                for improving your rhythm. Set your BPM (beats per minute) with the slider.</h1>
            </div>
            <div className={styles.bpmslider}>
                <div>{bpm} BPM</div>
                <input 
                type='range' 
                min='40' 
                max='250' 
                value={bpm}
                onChange={this.handleBpmChange}></input>
            </div>
        <button onClick={this.startStop}>
            {playing ? 'Stop' : 'Start'}
        </button>
        </div>)
    }
}

export default Metronome; 