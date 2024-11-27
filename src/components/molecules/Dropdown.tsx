import React, { useState } from 'react';
import NavLink from '../atoms/NavLink';
import { ArrowDown2 } from 'iconsax-react';
import Link from 'next/link';

interface DropdownProps {
    label: string;
    items: { href: string; label: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <div className="relative inline-block">
            {/* Button untuk dropdown */}
            <button
                onClick={toggleDropdown}
                className="text-white hover:text-blue-500 focus:outline-none flex gap-2 items-center font-bold"
            >
                {label}
                <ArrowDown2 size={16} color='white' />
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute mt-2 w-[280px] bg-white border rounded shadow-lg">
                    <p className='text-black font-bold px-4 py-2'>{label}</p>
                    {items.map((item, index) => (
                        <div key={index}>
                            <Link  href={item.href} className={`text-black font-bold hover:text-blue-500 block px-4 py-2 hover:bg-gray-100 text-[#000000FF] font-medium`}>
                                {item.label}
                            </Link>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
