import { useRef } from "react";

const Setting = ({setOpenToolBox, setPause, setNumber}) => {

    const inputNumber = useRef(null)
    const handleStart = () => {
        setNumber(inputNumber.current.value)
        setOpenToolBox(false);
        setPause(false);
    }
    const handleReset = () => {
        setOpenToolBox(false)
    }
    return (
        <div style={{margin: 10}}>
            <div style={{margin: 10}}>
                <div>Trận số:</div>
                <div><input type="number" ref={inputNumber}/></div>
            </div>
            <div style={{margin: 10}}>
                <div>Số phút:</div>
                <div><input/></div>
            </div>
            <div style={{margin: 10}}>
                <button style={{marginRight: 10}} onClick={handleStart}>Bắt đầu</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Setting;