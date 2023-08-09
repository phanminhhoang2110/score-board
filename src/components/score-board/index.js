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
    const [openToolbox, setOpenToolBox] = useState(false);
    const [pause, setPause] = useState(true);
    const [number, setNumber] = useState(1);

    const timeout = () => {
        setShowResult(true)
    }

    const handleClickSetting = () => {
        setOpenToolBox(!openToolbox)
    }
    console.log('render');
    return (
    <div style={{backgroundImage: `url(${bg})`}} className="ScoreBoardContainer">
        <div style={{position: "absolute", textAlign: "center"}}>
            <Header/>
            <Timer timeOut={timeout} pause={pause} number={number}/>
            <ScoreDouble showResult={showResult} setShowResult={timeout} setPause={setPause} pause={pause}/>
        </div>
        {!openToolbox ?
            (<div style={{margin: 10, zIndex: 10000}} onClick={handleClickSetting}>
                <img src={setting_icon} style={{width: 30, height: 30}}/>
            </div>) :
            (<div style={{width: "fit-content", height: "fit-content", backgroundColor: "white", zIndex: 10000}}>
                <Setting setOpenToolBox={setOpenToolBox} setPause={setPause} setNumber={setNumber}/>
            </div>)
        }
    </div>)
}

export default ScoreBoard;