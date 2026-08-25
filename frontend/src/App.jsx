import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './components/DashboardView';
import ChatView from './components/ChatView';
import DoctorsView from './components/DoctorsView';
import AppointmentsView from './components/AppointmentsView';
import DepartmentsView from './components/DepartmentsView';
import EmergencyView from './components/EmergencyView';
import AboutView from './components/AboutView';
import RemediesView from './components/RemediesView';

const defaultWelcomeMessage = {
  sender: 'bot',
  html: `
    <p>Hello! I am your <strong>AI Healthcare Recommendation Assistant</strong>.</p>
    <p>Describe how you are feeling or what symptoms you have (e.g., <em>"I have a high fever and headache"</em>). I will analyze your symptoms, estimate risk level, and recommend the right doctor department & first-aid steps.</p>
  `
};

const initialPatientInfo = {
  id: "P-80492",
  name: "Sumit Singh",
  age: 24,
  gender: "Male",
  bloodGroup: "B+"
};

const initialAppointments = [
  {
    id: "appt-101",
    doctorId: "doc-1",
    doctorName: "Dr. Ananya Sharma",
    doctorAvatar: "👩‍⚕️",
    specialty: "General Medicine",
    hospital: "City Central Healthcare",
    date: "2026-08-12",
    time: "10:30 AM",
    reason: "Routine Wellness & Immunity Checkup",
    status: "Confirmed",
    createdAt: "09 Aug 2026"
  }
];

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('health_app_theme') || 'light';
  });

  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('health_app_chat');
    return saved ? JSON.parse(saved) : [defaultWelcomeMessage];
  });

  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem('health_app_appointments');
    return saved ? JSON.parse(saved) : initialAppointments;
  });

  const [patientInfo] = useState(initialPatientInfo);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('health_app_theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('health_app_chat', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('health_app_appointments', JSON.stringify(appointments));
  }, [appointments]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleClearChat = () => {
    setMessages([defaultWelcomeMessage]);
    localStorage.removeItem('health_app_chat');
  };

  const handleBookAppointment = (newAppt) => {
    setAppointments(prev => [newAppt, ...prev]);
  };

  const handleCancelAppointment = (apptId) => {
    setAppointments(prev => prev.filter(a => a.id !== apptId));
  };

  return (
    <div className="app-container">
      <Sidebar theme={theme} toggleTheme={toggleTheme} onClearChat={handleClearChat} />
      <main className="main-content">
        <Header patientInfo={patientInfo} />
        <Routes>
          <Route path="/" element={<DashboardView appointments={appointments} patientInfo={patientInfo} />} />
          <Route path="/chat" element={<ChatView messages={messages} setMessages={setMessages} />} />
          <Route path="/doctors" element={<DoctorsView onBookAppointment={handleBookAppointment} />} />
          <Route path="/appointments" element={<AppointmentsView appointments={appointments} onCancelAppointment={handleCancelAppointment} />} />
          <Route path="/departments" element={<DepartmentsView />} />
          <Route path="/emergency" element={<EmergencyView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/remedies" element={<RemediesView />} />
        </Routes>
      </main>
    </div>
  );
}