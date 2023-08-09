import thanhphong_logo from "../../img/thanhphong-logo.jpg"
import bamboo_logo from "../../img/logo.png"
import "./index.css"

const Header = () => {
    return (
        <div style={{display: "flex", justifyContent: 'center'}}>
            <div className="Header">
                <img src={thanhphong_logo} width={70} height={70} alt="logo"/>
                <div>FESTIVAL TAEKWONDO HẠ LONG 2023</div>
                <img src={bamboo_logo} width={70} height={70} alt="logo2"/>
            </div>
        </div>
    )
}

export default Header