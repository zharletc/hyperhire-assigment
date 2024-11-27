import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, className }) => {
  return (
    <Link href={href} className={`text-white font-bold hover:text-blue-500 ${className || ''}`}>
      {label}
    </Link>
  );
};

export default NavLink;
