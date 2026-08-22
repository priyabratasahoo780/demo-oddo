import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateTrip from './pages/CreateTrip';
import Itinerary from './pages/Itinerary';
import Profile from './pages/Profile';
import UserTrips from './pages/UserTrips';
import SearchResults from './pages/SearchResults';
import Community from './pages/Community';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-trips" element={<UserTrips />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
