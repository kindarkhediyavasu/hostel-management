import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App(){
    return <div className="app_container">
        <div className="sidebar-layout">
                <Sidebar></Sidebar>
        </div>
        <div className="header-layout">
            <Header/>
        </div>
        <div className="main-layout">
                <Dashboard/>
        </div>
       
    </div>
}
export default App;