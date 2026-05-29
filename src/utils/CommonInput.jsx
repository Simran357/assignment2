import React from 'react';

const CommonInput = ({ name, type, register, error }) => {
    return (
        <div className="relative w-full mb-6">
            <input
                {...register(name)}
                type={type}
                id={name}
                autoComplete='off'
                placeholder=" "
                className={`peer w-full px-4 py-3 rounded-xl border border-gray-300 text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition duration-300
          ${error ? 'border-red-500 focus:ring-red-500' : ''}`}
            />
            <label
                htmlFor={name}
                className={`absolute left-4 top-3 text-gray-400 text-sm transition-all duration-300
          peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
          peer-focus:-top-5 peer-focus:text-indigo-500 peer-focus:text-sm
          ${error ? 'text-red-500 peer-focus:text-red-500' : ''}`}
            >
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
};

export default CommonInput;
