import React from 'react';
import Header from '../organisms/Header';

interface MainTemplateProps {
  children: React.ReactNode;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className='w-full'>
      <div className='w-full'>
        <Header />
        <main className="">{children}</main>
      </div>

    </div>
  );
};

export default MainTemplate;
