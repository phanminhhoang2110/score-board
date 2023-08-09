import { useEffect, useState } from 'react';
import ScoreSingle from './score-single'
import './index.css'

const ScoreDouble = ({showResult, setShowResult, setPause, pause, blueName, redName, setIsWin, resetAll}) => {
    const [red, setRed] = useState(0);
    const [blue, setBlue] = useState(0);
    const [redGam, setRedGam] = useState([]);
    const [blueGam, setBlueGam] = useState([]);

    useEffect(() => {
        setRed(0)
        setBlue(0)
        setBlueGam([])
        setRedGam([])
        document.getElementById('score-important').value = ''
    }, [resetAll])

    useEffect(() => {
        if(red > blue) {
            setIsWin('#E27E74')
        }
        else if(blue > red) {
            setIsWin('#4E9CE4')
        }
        else if(blue == red){
            if(redGam > blueGam){
                setIsWin('#4E9CE4')
            }
            else if(blueGam > redGam){
                setIsWin('#E27E74')
            }
            else{
            setIsWin('white')
            }
        }
    }, [showResult])
    
    const handleKeyDown = (event) => {
        if(!showResult){
            if(event.keyCode === 8){
                return;
            }
            if(event.keyCode === 32){
                setPause(!pause);
            }
            if(event.keyCode === 49){
                setBlue(blue+1)
                if(red - blue + 1 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue + 1 - red >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 50){
                setBlue(blue+2)
                if(red - blue + 2 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue + 2 - red >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            }
            if(event.keyCode === 51){
                setBlue(blue+3)
                if(red - blue + 3 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue + 3 - red >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            }
            if(event.keyCode === 52){
                setBlue(blue+4)
                if(red - blue + 4 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue + 4 - red >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 53){
                setBlue(blue+5)
                if(red - blue + 5 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue + 5 - red >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 54){
                setRed(red+1)
                if(red + 1 - blue >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red + 1 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 55){
                setRed(red+2)
                if(red + 2 - blue >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red + 2 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 56){
                setRed(red+3)
                if(red + 3 - blue >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red + 3 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 57){
                setRed(red+4)
                if(red + 4 - blue >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red + 4 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            } 
            if(event.keyCode === 48){
                setRed(red+5)
                if(red + 5 - blue >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red + 5 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            }
            if(event.keyCode === 90 && blue > 0){
                setBlue(blue-1)
                if(red - blue - 1 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red - 1 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            }
            if(event.keyCode === 77 && red > 0){
                setRed(red-1)
                if(red - blue - 1 >= 12) {
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#E27E74')
                }
                if(blue - red - 1 >= 12){
                    setShowResult()
                    setPause(!pause)
                    setIsWin('#4E9CE4')
                }
            }
            if(event.keyCode === 65){
                blueGam.push('*')
                if(blueGam.length === 5){
                    setShowResult()
                    setIsWin('#E27E74')
                    setPause(!pause)
                }
                setRed(red+1)
            }
            if(event.keyCode === 76){
                redGam.push('*')
                if(redGam.length === 5){
                    setShowResult()
                    setIsWin('#4E9CE4')
                    setPause(!pause)
                }
                setBlue(blue+1)
            }
        }
    }

    return (<div>
        <div style={{marginTop: "40px", width: "100vw", fontSize: 20, borderRadius: 5, display: "flex", direction: "revert"}}>
                <ScoreSingle color="#4E9CE4" score={blue} gam={blueGam} name={blueName}></ScoreSingle>
                <ScoreSingle color="#E27E74" score={red} gam={redGam} name={redName}></ScoreSingle>
        </div>
        <input type='text' onKeyDown={handleKeyDown} autoFocus id='score-important' className='score-input'/>
    </div>);
}

export default ScoreDouble;