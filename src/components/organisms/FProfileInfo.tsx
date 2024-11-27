const FProfileInfo = () => {
    return (
        <div className="profile-info">
            <div className="flex">
                <div className="flex flex-col gap-2 mr-4">
                    <p className="text-sm font-bold text-blue-gray-80">상호명</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">하이퍼하이어</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">Hyperhire India Private Limited</p>
                </div>
                <div className="flex flex-col gap-2 mr-[90px]">
                    <p className="text-sm font-bold text-blue-gray-80">대표 CEO</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">김주현</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">Juhyun Kim</p>
                </div>
                <div className="flex flex-col gap-2 mr-[42px]">
                    <p className="text-sm font-bold text-blue-gray-80">사업자등록번호 CIN</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">427-86-01187</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">U74110DL2016PTC290812</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-bold text-blue-gray-80">주소 ADDRESS</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">서울특별시 강남대로 479, 지하 1층 238호</p>
                    <p className="text-[13px] font-bold text-blue-gray-60">D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,
                        110053 India</p>
                </div>
            </div>
        </div>
    )
}

export default FProfileInfo;