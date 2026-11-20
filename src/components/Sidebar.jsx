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
                    <FaHome/>
                    <span>dashboard</span>
                </li>
                 <li>
                    <FaUsers/>
                    <span>Students</span>
                </li>
                 <li>
                    <FaBed/>
                    <span>Rooms</span>
                </li>
                 <li>
                    <FaMoneyBill/>
                    <span>Payments</span>
                </li>
                 <li>
                     <FaCommentDots/>
                    <span>Complaints</span>
                </li>
                 <li>
                     <FaCog/>
                    <span>settings</span>
                </li>
            </ul>
        </nav>
    </aside>
}
export default Sidebar;