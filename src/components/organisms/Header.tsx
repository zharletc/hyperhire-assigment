import React from 'react';
import Button from '../atoms/Button';
import NavLink from '../atoms/NavLink';
import Dropdown from '../molecules/Dropdown';

const Header: React.FC = () => {
    return (
        <div className="w-full bg-white flex justify-center">
            <div className='px-4 py-4 text-white w-full absolute flex justify-between items-center z-50 max-w-[1920px] mx-auto'>
                <img src="/logo.webp" alt="logo" className='w-[114px] h-full' />
                <nav className='hidden mdb:block'>
                    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                        <div className="flex space-x-[55px]">
                            <Dropdown
                                label="채용"
                                items={[
                                    { href: '/services/web-development', label: '해외 개발자 원격 채용' },
                                    { href: '/services/mobile-development', label: '외국인 원격 채용 (비개발 직군)' },
                                    { href: '/services/seo', label: '한국어 가능 외국인 채용' },
                                ]}
                            />
                            <NavLink href="/" label="해외 개발자 활용 서비스" />
                        </div>
                    </div>
                </nav>
                <Button className='text-blue hidden mdb:block' onClick={() => { }} label='문의하기' />
            </div>

        </div>
    );
};

export default Header;
