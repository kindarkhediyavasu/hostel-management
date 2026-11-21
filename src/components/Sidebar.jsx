import { Link } from "react-router-dom";
import style from "./Sidebar.module.css";
import { FaBed, FaCog, FaCommentDots, FaHome, FaMoneyBill, FaUsers } from "react-icons/fa";
function Sidebar(){
    return <aside className={`${style.sidebar} sidebar`}>
        <div className={style.sidebar__logo}>
            <h2>hostel<span>Hub</span></h2>
        </div>
        <nav className={style.sidebar__navigation}>
            <ul>
                <li>
                    <Link to="/">
                        <FaHome/>
                        <span>dashboard</span>
                    </Link>
                </li>
                 <li>
                    <Link to="/students">
                        <FaUsers/>
                        <span>Students</span>
                    </Link>
                </li>
                 <li>
                    <Link to="/rooms">
                        <FaBed/>
                        <span>Rooms</span>
                    </Link>
                </li>
                 <li>
                    <Link to="/payments">
                        <FaMoneyBill/>
                        <span>Payments</span>
                    </Link>
                </li>
                 <li>
                    <Link to="/complaints">
                        <FaCommentDots/>
                        <span>Complaints</span>
                    </Link>
                </li>
                 <li>
                    <Link to="settings">
                        <FaCog/>
                        <span>settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </aside>
}
export default Sidebar;