import React, { useEffect } from 'react';
import CommonForm from '../context/CommonForm';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { auth } from "../../firebse.config"

const Login = () => {
    const navigate = useNavigate();

    const fields = [
        { name: "email", type: 'email' },
        { name: 'password', type: "password" }
    ];

    const handleLogin = async (data) => {
        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            toast.success("Login successful!");
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) navigate('/dashboard');
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className=" bg-white rounded-3xl shadow-2xl p-10 flex flex-col">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <CommonForm
                    
                    fields={fields}
                    onSubmit={handleLogin}
                    buttonClass="mt-4 w-full py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition duration-600"
                />
                <p className="text-center text-gray-500 mt-4 text-sm">
                    Don't have an account?
                    <span className="text-indigo-500 cursor-pointer hover:underline" onClick={() => navigate('/')}> Register</span>
                </p>
            </div>
        </div>

    );
};

export default Login;
