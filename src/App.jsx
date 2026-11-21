import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { Outlet } from "react-router-dom";

function App(){
    return <div className="app_container">
        <div className="sidebar-layout">
                <Sidebar></Sidebar>
        </div>
        <div className="header-layout">
            <Header/>
        </div>
        <div className="main-layout">
                <Outlet/>
        </div>
       
    </div>
}
export default App;