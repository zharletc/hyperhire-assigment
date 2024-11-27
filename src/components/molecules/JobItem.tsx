import React from 'react';
import Avatar from '../atoms/Avatar';

interface JobItemProps {
    name: string;
    icon: any;
}

const JobItem: React.FC<JobItemProps> = ({ name, icon }) => {
    return (
        <div className="flex gap-8 items-center p-4 bg-white rounded-xl w-[332px]" style={{ backgroundColor: 'rgba(255, 255, 255, 0.20)' }}>
            <div className='p-3 rounded-lg flex' style={{ backgroundColor: 'rgba(255, 255, 255, 0.40)' }}>
                {icon}
            </div>
            <p className="text-white font-bold text-[24px]">{name}</p>
        </div>
    );
};

export default JobItem;
