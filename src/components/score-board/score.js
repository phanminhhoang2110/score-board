import { useState } from 'react';
import ScoreSingle from './score-single'

const ScoreDouble = ({showResult, setShowResult, setPause, pause}) => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [redGam, setRedGam] = useState([]);
    const [blueGam, setBlueGam] = useState([]);
    
    const handleKeyDown = (event) => {
        console.log(event)
        if(!showResult){
            if(event.keyCode === 8){
                return;
            }
            if(event.keyCode === 32){
                setPause(!pause);
            }
            if(event.keyCode === 49){
                setBlue(blue+1)
                if(Math.abs(red - blue) === 10){
                    setShowResult()
                    setPause(!pause)
                }
            } 
            if(event.keyCode === 50){
                setBlue(blue+2)
                if(Math.abs(red - blue) === 10){
                    setShowResult()
                    setPause(!pause)
                }
            }
            if(event.keyCode === 51){
                setBlue(blue+3)
                if(Math.abs(red - blue) === 10){
                    setShowResult()
                    setPause(!pause)
                }
            }
            if(event.keyCode === 52){
                setBlue(blue+4)
            } 
            if(event.keyCode === 53){
                setBlue(blue+5)
            } 
            if(event.keyCode === 54){
                setRed(red+1)
            } 
            if(event.keyCode === 55){
                setRed(red+2)
            } 
            if(event.keyCode === 56){
                setRed(red+3)
            } 
            if(event.keyCode === 57){
                setRed(red+4)
            } 
            if(event.keyCode === 48){
                setRed(red+5)
            }
            if(event.keyCode === 90 && blue > 0){
                setBlue(blue-1)
            }
            if(event.keyCode === 77 && red > 0){
                setRed(red-1)
            }
            if(event.keyCode === 65){
                blueGam.push('*')
                if(blueGam.length === 5){
                    setShowResult()
                    setPause(!pause)
                }
                setRed(red+1)
            }
            if(event.keyCode === 76){
                redGam.push('*')
                if(redGam.length === 5){
                    setShowResult()
                    setPause(!pause)
                }
                setBlue(blue+1)
            }
        }
    }

    return (<div>
        <div style={{marginTop: "40px", width: "100vw", fontSize: 20, borderRadius: 5, display: "flex", direction: "revert"}}>
                <ScoreSingle color="#4E9CE4" score={blue} gam={blueGam}></ScoreSingle>
                <ScoreSingle color="#E27E74" score={red} gam={redGam}></ScoreSingle>
        </div>
        <input type='text' onKeyDown={handleKeyDown} autoFocus/>
    </div>);
}

export default ScoreDouble;