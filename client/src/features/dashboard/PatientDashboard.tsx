import SidePanel from "./subComponent/SidePanel";
import NavBar from "./subComponent/NavBar";
import Body from "./subComponent/Body";
import { Outlet } from "react-router";

const PatientDashboard = () => {

    return (
        <div className="flex flex-row bg-amber-100 h-screen w-screen overflow-hidden">

            {/* w-1/6 */}
            <SidePanel></SidePanel> 
            <div className="flex flex-col w-5/6 h-screen">
                <NavBar></NavBar>
                {/* <Body></Body> */}
                <Outlet />
            </div>

        </div>
    );
}

export default PatientDashboard;