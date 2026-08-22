import SidePanel from "../component/subComponent/SidePanel";
import NavBar from "../component/subComponent/NavBar";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface UserProfile {
    id: string,
    name: string,
    email: string,
    role: string
}

const PatientDashboard: React.FC = () => {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/login');
                    return;
                }
                const response = await fetch('api/dashboard', {
                    method: "GET",
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': "application/json"
                    }
                })
                const data = await response.json();
                if (response.ok) {
                    setUser(data);
                }
                else {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
            }
            finally {
                setLoading(false);
            }
        }

        fetchUserProfile();
    }, [navigate]);

    if (loading) { return (<div>Loading...</div>); };
    return (
        <div className="flex flex-row bg-amber-100 h-screen w-screen overflow-hidden">

            <SidePanel></SidePanel>
            <div className="flex flex-col w-5/6 h-screen">
                <NavBar></NavBar>
                {user && (
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
                    </div>
                )}
                <Outlet />
            </div>

        </div>
    );
}

export default PatientDashboard;