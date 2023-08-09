import { useRef } from "react";

const Setting = ({setOpenToolBox, setPause, setNumber, setBlue, setRed}) => {

    const inputNumber = useRef(null)
    const inputBlue = useRef(null)
    const inputRed = useRef(null)
    const handleStart = () => {
        setNumber(inputNumber.current.value)
        setOpenToolBox(false);
        setPause(false);
        setBlue(inputBlue.current.value)
        setRed(inputRed.current.value)
        const input = document.getElementById('score-important');
        input.focus()
    }
    return (
        <div style={{margin: 10}}>
            <div style={{margin: 10}}>
                <div>Trận số:</div>
                <div><input type="number" ref={inputNumber} defaultValue='1'/></div>
            </div>
            <div style={{margin: 10}}>
                <div>Tên đội xanh:</div>
                <div><input ref={inputBlue} defaultValue='Xanh'/></div>
            </div>
            <div style={{margin: 10}}>
                <div>Tên đội đỏ:</div>
                <div><input ref={inputRed} defaultValue='Đỏ'/></div>
            </div>
            <div style={{margin: 10}}>
                <button style={{marginRight: 10}} onClick={handleStart}>Bắt đầu</button>
            </div>
        </div>
    );
}

export default Setting;