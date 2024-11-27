import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'white';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'white', label, onClick, className }) => {
    const variantClass = {
        'white': 'bg-[#FFFFFF] text-[#4A77FF] hover:bg-gray-200 ',
    }

    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-[#4A77FF]  ${variantClass[variant]} rounded-lg font-bold ${className || ''}`}
        >
            {label}
        </button>
    );
};

export default Button;
