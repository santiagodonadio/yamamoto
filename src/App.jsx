import './App.css'
import { useState } from 'react';
import Header from './components/Header'
import Pitches from './components/Pitches'
import StrikeZone from './components/StrikeZone'
import Swing from './components/Swing'
import Footer from './components/Footer'


function App() {


    const pitches = [
        { name: "Fastball", weight: 36},
        { name: "Splitter", weight: 25},
        { name: "Curveball", weight: 18},
        { name: "Cutter", weight: 11},
        { name: "Slider", weight: 7},
        { name: "Sinker", weight: 3},
    ];

    const zones = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const [selectedPitch, setSelectedPitch] = useState(null);
    const [selectedZone, setSelectedZone] = useState(null);
    const [result, setResult] = useState("");

    function getRandomPitch(){
        const totalWeight = pitches.reduce((sum, p ) => sum + p.weight, 0);
        const random = Math.random() * totalWeight;

        let cumulative = 0;
        for(const pitch of pitches) {
            cumulative += pitch.weight;
            if (random < cumulative) return pitch.name;
        }
    }

    function handleSwing(){
        if(!selectedPitch || !selectedZone){
            setResult("Chooose a pitch and zone before swinging");
        }

        const randomPitch = getRandomPitch();
        const randomZone = zones[Math.floor(Math.random() * zones.length)];

        if(selectedPitch === randomPitch && selectedZone === randomZone){
            setResult(
                <>

                HIT!! <br/><br/>You hit a {randomPitch} in Zone {randomZone}.
                <br/><br/>
                Congratulations!!
                
                </>
            );
        } else {
            setResult(
            <>
            Swing and a miss.<br/> 
            <br/>You swung at a {selectedPitch} in Zone {selectedZone}, <br/> 
            but it was a {randomPitch} in Zone {randomZone}.
            
            </>
            );
        }
    }

    return (
        <>
        <Header/>

        <Pitches selectedPitch={selectedPitch} setSelectedPitch={setSelectedPitch}/>

        <StrikeZone selectedZone={selectedZone} setSelectedZone={setSelectedZone}/>

        <Swing handleSwing={handleSwing} result={result}/>

        <Footer/>
        </>
    );
}

export default App
