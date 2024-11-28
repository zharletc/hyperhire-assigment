import { NextApiRequest, NextApiResponse } from 'next';

type Service = {
  name: string;
  icon: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Service[]>) {
  const products: Service[] = [
    {
      name: '해외 마케팅',
      icon: '/icons/ic_service1.svg'
    },
    {
      name: '퍼블리셔',
      icon: '/icons/ic_service2.svg'
    },
    {
      name: '캐드원(제도사)',
      icon: '/icons/ic_service3.svg'
    },
    {
      name: '해외 세일즈',
      icon: '/icons/ic_service4.svg'
    },
    {
      name: '해외 CS',
      icon: '/icons/ic_service5.svg'
    },
    {
      name: '해외 CS 2',
      icon: '/icons/ic_service1.svg'
    },
    {
      name: '해외 CS 3',
      icon: '/icons/ic_service2.svg'
    },
  ];

  res.status(200).json(products);
}