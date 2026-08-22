import SidePanel from "../component/subComponent/SidePanel";
import NavBar from "../component/subComponent/NavBar";
import { Outlet } from "react-router";

const PatientDashboard = () => {

    return (
        <div className="flex flex-row bg-amber-100 h-screen w-screen overflow-hidden">

            <SidePanel></SidePanel> 
            <div className="flex flex-col w-5/6 h-screen">
                <NavBar></NavBar>
                <Outlet />
            </div>

        </div>
    );
}

export default PatientDashboard;