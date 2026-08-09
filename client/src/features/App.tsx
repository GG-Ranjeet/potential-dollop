import "./App.css";
import Example from "../component/Example";
import LoginForm from "./login/LoginForm";
import PatientDashboard from "./dashboard/PatientDashboard";

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
    return (
        <>
            <div id="app" className="min-h-screen flex items-center justify-center gap-4 bg-gray-100">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Example />} />
                        <Route path="/login" element={<LoginForm />} />

                        <Route path="/dashboard" element={<PatientDashboard />}>
                            <Route index element={<LoginForm/>} />
                            <Route path="example" element={<Example/>} />
                        </Route>

                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
