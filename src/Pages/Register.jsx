import React, { useEffect } from 'react';
import CommonForm from '../context/CommonForm';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebse.config';
const Register = () => {
    const navigate = useNavigate();

    const fields = [
        { name: "name", type: "text" },
        { name: "email", type: "email" },
        { name: "password", type: "password" }
    ];

    const handleRegister = async (data) => {
        try {
            await createUserWithEmailAndPassword( auth, data.email, data.password);
            toast.success("User registered successfully");
            navigate('/dashboard');
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) navigate('/dashboard');
        });
        return () => unsubscribe();
    }, []);

    return (
       <div className="min-h-screen flex items-center justify-center p-4">
  <div className=" bg-white rounded-3xl shadow-2xl p-10 flex flex-col">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>
                <CommonForm
      fields={fields}
      onSubmit={handleRegister}
      buttonClass="mt-4 w-full py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-600 transition duration-300"
    />
    <p className="text-center text-gray-500 mt-4 text-sm">
      Already have an account? 
      <span className="text-indigo-500 cursor-pointer hover:underline" onClick={() => navigate('/login')}> Login</span>
    </p>
  </div>
</div>

    );
};

export default Register;
