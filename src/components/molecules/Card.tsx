import React from 'react';
import Avatar from '../atoms/Avatar';

interface CardProps {
  image: string;
  name: string;
  position: string;
  yos: string;
  activities?: string[];
}

const Card: React.FC<CardProps> = ({ image, name, position, yos, activities }) => {
  return (
    <>
      <div className="flex flex-col items-center py-9 px-4 mdb:px-9 mdb:py-9 bg-white rounded-xl shadow w-[250px] mdb:w-[360px] relative mdb:left-0 left-[-30px]">
        <div className="flex mx-auto w-[54px] mdb:w-[100px] mb-4">
          <Avatar src={image} />
        </div>
        <div className="flex flex-col mx-auto items-center mb-9">
          <p className='text-[18px] mdb:text-[24px] font-bold'>{name}</p>
          <div className='flex'>
            <p className='text-[14px] mdb:text-[16px] font-bold text-[#4A77FF] '>{position} · {yos}</p>
          </div>
        </div>
        <div className='w-full flex flex-wrap gap-[0.8px] justify-center'>
          {
            activities && activities.map((activity, index) => (
              <div key={index} className="flex items-center gap-2 border border-1 px-3 py-1 rounded-lg">
                <p className="text-[#5E626F] font-bold mdb:text-base text-sm">{activity}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>


  );
};

export default Card;
