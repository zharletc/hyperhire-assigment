import React, { useEffect, useState } from 'react';
import Button from '../atoms/Button';
import NavLink from '../atoms/NavLink';
import Dropdown from '../molecules/Dropdown';
import Link from 'next/link';
import { CloseCircle, HambergerMenu } from 'iconsax-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    useEffect(() => {
        if(isMenuOpen){
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen])

    return (
        <div className="w-full bg-white flex justify-center">
            <div className="px-4 py-4 text-white w-full absolute flex justify-between items-center z-50 max-w-[1920px] mx-auto">
                <Link href="/">
                    <img src="/logo.webp" alt="logo" className="w-[114px] h-full" />
                </Link>

                {!isMenuOpen && (
                    <button
                        onClick={toggleMenu}
                        className="block md:hidden text-white"
                    >
                        <HambergerMenu size={24} color="white" />
                    </button>
                )}
                {isMenuOpen && (
                    <button
                        onClick={toggleMenu}
                        className="block md:hidden text-white"
                    >
                        <CloseCircle size={24} color="white" />
                    </button>
                )}

                <nav className={`hidden md:block mdb:block ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                        <div className="flex space-x-[55px]">
                            <Dropdown
                                label="채용"
                                items={[
                                    { href: '/about', label: '해외 개발자 원격 채용' },
                                    { href: '/', label: '외국인 원격 채용 (비개발 직군)' },
                                    { href: '/', label: '한국어 가능 외국인 채용' },
                                ]}
                            />
                            <NavLink href="/" label="해외 개발자 활용 서비스" />
                        </div>
                    </div>
                </nav>

                <Button className="text-blue hidden mdb:block" onClick={() => { }} label="문의하기" />
            </div>
            <div
                className={`md:hidden w-full fixed top-0 right-0 bottom-0 bg-black bg-opacity-70 z-40 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
            >
                <div className="flex justify-end p-4 z-50">
                </div>

                <div className="flex flex-col items-center justify-center space-y-8 text-white h-full">
                    <Dropdown
                        label="채용"
                        items={[
                            { href: '/', label: '해외 개발자 원격 채용' },
                            { href: '/', label: '외국인 원격 채용 (비개발 직군)' },
                            { href: '/', label: '한국어 가능 외국인 채용' },
                        ]}
                    />
                    <NavLink href="/" label="해외 개발자 활용 서비스" />
                    <Button className="text-blue" onClick={() => { }} label="문의하기" />
                </div>
            </div>
        </div>
    );
};

export default Header;
