import { useState } from "react";
import bg from "../../img/bg.jpg"
import Header from "../header/index"
import Timer from "../timer";
import './index.css'
import ScoreDouble from "./score";
import setting_icon from "../../img/settings.png"
import Setting from "../setting/index"

const ScoreBoard = () => {
    const [showResult, setShowResult] = useState(false);
    const [isWin, setIsWin] = useState('#4E9CE4');
    const [openToolbox, setOpenToolBox] = useState(false);
    const [pause, setPause] = useState(true);
    const [number, setNumber] = useState(1);
    const [blue, setBlue] = useState('Xanh');
    const [red, setRed] = useState('Đỏ');
    const [resetAll, setResetAll] = useState(0);

    const timeout = () => {
        setShowResult(true)
    }

    const handleClickSetting = () => {
        setOpenToolBox(!openToolbox)
    }

    const handleNewScore = () => {
        setShowResult(false);
        setResetAll(resetAll + 1)
        setPause(true)
        const input = document.getElementById('score-important');
        input.focus()
    }

    return (
    <div style={{backgroundImage: `url(${bg})`}} className="ScoreBoardContainer">
        <div style={{position: "absolute", textAlign: "center"}}>
            <Header/>
            <Timer timeOut={timeout} pause={pause} number={number} resetAll={resetAll}/>
            <ScoreDouble showResult={showResult} setShowResult={timeout} setPause={setPause} pause={pause} blueName={blue} redName={red} setIsWin={setIsWin} resetAll={resetAll}/>
        </div>
        {!openToolbox ?
            (<div style={{margin: 10, zIndex: 10000}} onClick={handleClickSetting}>
                <img src={setting_icon} style={{width: 30, height: 30}}/>
            </div>) :
            (<div style={{width: "fit-content", height: "fit-content", backgroundColor: "white", zIndex: 10000}}>
                <Setting setOpenToolBox={setOpenToolBox} setPause={setPause} setNumber={setNumber} setBlue={setBlue} setRed={setRed}/>
            </div>)
        }
        {
            showResult && (
                <div style={{backgroundColor: isWin, zIndex: 100000, margin: 20, width: '90%', border: '2px solid white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                    <div style={{color: isWin != "white" ? 'white' : 'black', fontSize: 200}}>
                        {isWin == '#4E9CE4' ? 'ĐV ' + blue + ' thắng' : (isWin == '#E27E74' ? 'ĐV ' + red + ' thắng' : 'Hòa')}
                    </div>
                    <button onClick={handleNewScore}>
                        Reset trận mới
                    </button>
                </div>
            )
        }
    </div>)
}

export default ScoreBoard;