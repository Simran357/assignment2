// NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-gray-700 mb-6">Page not found</p>
            <Link
                to="/dashboard"
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
                Go to Dashboard
            </Link>
        </div>
    );
};

export default NotFound;
