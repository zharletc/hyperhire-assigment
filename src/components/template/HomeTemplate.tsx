import Carousel from "../organisms/Carousel";
import JobList from "../organisms/JobList";
import Jumbotron from "../organisms/Jumbotron";

interface HomeTemplateProps {
    candidates: Candidate[];
    services: Service[];
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ candidates, services }) => {
    return (
        <div className='home w-full'>
            <div className="relative min-h-[100vh] flex flex-col mdb:justify-center gap-4 mdb:gap-8 w-full mdb:pt-0 pt-[80px] mdb:pb-0 pb-9">
                <div className="flex mdb:flex-row flex-col mdb:mx-auto mdb:space-x-10 w-full max-w-[1920px] px-0 mdb:px-5">
                    <Jumbotron className="w-full mdb:w-1/2 px-5 mdb:px-0" />
                    <Carousel className="w-full mdb:w-1/2 animate-fadeIn500" candidates={candidates} />
                </div>

                <div className="max-w-[1920px] mdb:mx-auto px-5 animate-fadeIn500">
                    <JobList className="mdb:mt-[120px] mt-[20px] overflow-x-hidden" services={services} />
                </div>


            </div>
        </div>

    )
}

export default HomeTemplate;