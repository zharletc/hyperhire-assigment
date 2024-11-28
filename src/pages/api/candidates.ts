import { NextApiRequest, NextApiResponse } from 'next';

type Candidates = {
    image: string;
    name: string;
    position: string;
    yos: string;
    price: string;
    activities: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Candidates[]>) {
    const products: Candidates[] = [
        {
            image: '/dummy_1.jpg',
            name: 'Abhishek Gupta',
            position: '마케팅',
            yos: '2y+',
            price: '월 100만원',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
        {
            image: '/dummy_1.jpg',
            name: 'Jane Smith',
            position: '마케팅',
            price: '월 200만원',
            yos: '2y+',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
        {
            image: '/dummy_1.jpg',
            name: 'Alice Johnson',
            position: '마케팅',
            price: '월 300만원',
            yos: '2y+',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
        {
            image: '/dummy_1.jpg',
            name: 'Alice Alba',
            position: '마케팅',
            price: '월 400만원',
            yos: '2y+',
            activities: [
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
            ]
        },
    ];

    res.status(200).json(products);
}