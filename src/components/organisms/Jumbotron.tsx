import Link from "next/link";

interface JumbotronProps {
    className?: string;
}
const Jumbotron: React.FC<JumbotronProps> = ({ className }) => {
    return (
        <div className={className}>
            <div className="relative bg-white px-3 py-2 max-w-max rounded-lg mb-6">
                <p className="font-bold text-[#40E2E8] text-lg">풀타임, 파트타임</p>
                {/* Pseudo-element menggunakan Tailwind */}
                <div className="absolute bottom-[-10px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                        <path d="M6.43301 10.25C6.24056 10.5833 5.75944 10.5833 5.56699 10.25L0.370835 1.25C0.178386 0.916665 0.418948 0.499999 0.803848 0.499999L11.1962 0.5C11.5811 0.5 11.8216 0.916667 11.6292 1.25L6.43301 10.25Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div className="mb-6">
                <h1 className="text-white font-bold text-[36px] mdb:text-[48px] leading-0">
                    최고의 실력을 가진
                </h1>
                <h1 className="text-white font-bold text-[36px] mdb:text-[48px] leading-0">
                    외국인 인재를 찾고 계신가요?
                </h1>
            </div>
            <div className="mb-6">
                <p className="text-white text-[18px] mdb:text-[24px] leading-0 font-bold">
                    법률 및 인사관리 부담없이
                    1주일 이내에 원격으로 채용해보세요.
                </p>
            </div>
            <div className="mb-[60px] hidden mdb:block">
                <Link href="/register" className="text-white font-bold text-lg underline underline-offset-1">
                    개발자가 필요하신가요?
                </Link>
            </div>
            <div className=" flex-wrap hidden mdb:flex">
                <div className="max-w-max pr-[24px] w-1/3">
                    <hr className="w-full h-[1px] bg-white mb-4 " />
                    <p className="text-white font-bold text-lg leading-0">
                        평균 월 120만원
                    </p>
                    <p className="text-[#FFFFFFD8] font-bold text-base leading-0">
                        임금을 해당 국가를 기준으로 계산합니다.
                    </p>
                </div>
                <div className="max-w-max px-[24px] w-1/3">
                    <hr className="w-full h-[1px] bg-white mb-4 " />
                    <p className="text-white font-bold text-lg leading-0">
                        최대 3회 인력교체
                    </p>
                    <p className="text-[#FFFFFFD8] font-bold text-base leading-0">
                        막상 채용해보니 맞지 않아도 걱정하지 마세요.
                    </p>
                </div>
                <div className="max-w-max pl-[24px] w-1/3">
                    <hr className="w-full h-[1px] bg-white mb-4 " />
                    <p className="text-white font-bold text-lg leading-0">
                        평균 3일, 최대 10일
                    </p>
                    <p className="text-[#FFFFFFD8] font-bold text-base leading-0">
                        급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;