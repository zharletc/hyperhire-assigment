import Carousel from "../organisms/Carousel";
import FGeneralInfo from "../organisms/FGeneralInfo";
import FProfileInfo from "../organisms/FProfileInfo";
import FServiceInfo from "../organisms/FServiceInfo";
import JobList from "../organisms/JobList";
import Jumbotron from "../organisms/Jumbotron";

const FooterTemplate = () => {
    return (
        <div className="bg-[#FBFBFB] px-5">
            <div className="flex flex-col gap-12 max-w-[1920px] mx-auto py-14">
                <div className="flex gap-20 mb-2">
                    <FGeneralInfo />
                    <FServiceInfo />
                </div>
                <FProfileInfo />
                <p className="text-blue-gray-80 text-[13px] font-bold">ⓒ 2023 Hyperhire</p>
            </div>

        </div>

    )
}

export default FooterTemplate;