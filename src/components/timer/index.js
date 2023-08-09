import { useState, useEffect } from 'react';
import './index.css'

const Timer = ({timeOut, pause, number = 1}) => {
    const [time, setTime] = useState(60);
    useEffect(() => {
        const intervalId = setInterval(() => {
          if(!pause){
            if (time === 0) {
              clearInterval(intervalId);
              timeOut()
            } else {
              setTime(time - 1);
            }
          }
        }, 1000);
        return () => clearInterval(intervalId);
    })

    function convertSecondsToMinutes(seconds) {
        let minutes = Math.floor(seconds / 60);
        let second = seconds % 60;
        if(minutes < 10){
            minutes = '0' + minutes
        }
        if(second < 10){
            second = '0' + second
        }
        return `${minutes}:${second}`;
      }

    return (
    <div style={{display: "flex", justifyContent: "center"}}>
        <div className="Number">Trận {number}</div>
        <div className="Timer">
            {convertSecondsToMinutes(time)}
        </div>
    </div>
    )
}

export default Timer;