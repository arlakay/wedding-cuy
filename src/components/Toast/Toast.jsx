import React, { useState, useEffect } from 'react';

const Toast = ({ message, onClose }) => {
    useEffect(() => {
        // Automatically close the toast after 5 seconds
        const timer = setTimeout(() => {
            onClose();
        }, 5000); // 5000 ms = 5 seconds

        return () => clearTimeout(timer); // Cleanup timer on component unmount
    }, [onClose]);

    return (
        <div className="relative  bg-green-700 text-white p-2 rounded-lg shadow-lg my-2">
            {message}
        </div>
    );
};

export default Toast;
