import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../firebse.config';

import { LogOut } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleSignOut = async () => {
        await signOut(auth);
        navigate("/login");
    };

    if (!user) return <Navigate to="/login" />;

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex-1 p-4">

                <div className="bg-white rounded-3xl shadow-2xl p-4">

                        <button
                            onClick={handleSignOut}
                            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                   

                    <div className="text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">
                            Welcome, {user?.email}
                        </h2>

                        <p className="text-gray-600 mb-6">
                            You are successfully logged in.
                        </p>
                    </div>

                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;