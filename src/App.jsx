import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import ProtectedRoute from './Pages/ProtectedRoute';
import Dashboard from './components/Dashboard';
import NotFound from './Pages/NotFound';
import TaskManager from './Pages/TaskManager';

const App = () => {
  return (
    <div className="min-h-screen w-full p-4">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route index element={<TaskManager />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};

export default App;
