const FServiceInfo = () => {
    return (
        <div className="service-info">
            <div className="flex flex-wrap space-y-1">
                <div className=" px-1 mdb:px-2 mdb:w-max w-1/2 mdb:h-max h-[160px]">
                    <div className="bg-white p-4 rounded-xl h-full">
                        <div className="p-2 bg-[#EFF1F6] rounded-lg max-w-max mb-3">
                            <img src="/icons/ic_code.svg" alt="logo" />
                        </div>
                        <p className="text-sm text-blue-gray-80 mt-2 font-bold">해외 개발자 원격 채용</p>
                        <div className="flex items-center gap-2 mt-4 mdb:w-[190px]">
                            <p className="text-[13px] text-blue-gray-60">바로가기</p>
                            <button className="text-blue-400">
                                <img src="/icons/ic_arrowright_square.svg" alt="logo" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" px-1 mdb:px-2 mdb:w-max w-1/2 mdb:h-max h-[160px]">
                    <div className="bg-white p-4 rounded-xl h-full">
                        <div className="p-2 bg-[#EFF1F6] rounded-lg max-w-max mb-3">
                            <img src="/icons/ic_user.svg" alt="logo" />
                        </div>
                        <p className="text-sm text-blue-gray-80 mt-2 font-bold">외국인 원격 채용 (비개발)</p>
                        <div className="flex items-center gap-2 mt-4 mdb:w-[190px]">
                            <p className="text-[13px] text-blue-gray-60">바로가기</p>
                            <button className="text-blue-400">
                                <img src="/icons/ic_arrowright_square.svg" alt="logo" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className=" px-1 mdb:px-2 mdb:w-max w-1/2 mdb:h-max h-[160px]">
                    <div className="bg-white p-4 rounded-xl h-full">
                        <div className="p-2 bg-[#EFF1F6] rounded-lg max-w-max mb-3">
                            <img src="/icons/ic_kor.svg" alt="logo" />
                        </div>
                        <p className="text-sm text-blue-gray-80 mt-2 font-bold">한국어 가능 외국인 채용</p>
                        <div className="flex items-center gap-2 mt-4 w-[190px]">
                            <p className="text-[13px] text-blue-gray-60">바로가기</p>
                            <button className="text-blue-400">
                                <img src="/icons/ic_arrowright_square.svg" alt="logo" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-1 mdb:px-2 mdb:w-max w-1/2 mdb:h-max h-[160px]">
                    <div className="bg-white p-4 rounded-xl h-full">
                        <div className="p-2 bg-[#EFF1F6] rounded-lg max-w-max mb-3">
                            <img src="/icons/ic_gear.svg" alt="logo" />
                        </div>
                        <p className="text-sm text-blue-gray-80 mt-2 font-bold">해외 개발자 활용 서비스</p>
                        <div className="flex items-center gap-2 mt-4 w-[190px]">
                            <p className="text-[13px] text-blue-gray-60">바로가기</p>
                            <button className="text-blue-400">
                                <img src="/icons/ic_arrowright_square.svg" alt="logo" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FServiceInfo;