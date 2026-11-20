import style from "./Header.module.css";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
function Header(){
    return <header className={style.headerContainer}>
        <div className={style.headerContainer__search}>
            <FaSearch/>
            <input type="text" placeholder="Search...."/>
        </div>
        <div className={style.headerContainer__profile}>
            <FaBell/>
            <FaUserCircle/>
            <span>Admin</span>
        </div>
    </header>
}
export default Header;