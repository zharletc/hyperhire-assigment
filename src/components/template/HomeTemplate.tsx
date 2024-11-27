import Carousel from "../organisms/Carousel";
import JobList from "../organisms/JobList";
import Jumbotron from "../organisms/Jumbotron";

const HomeTemplate = () => {
    return (
        <div className='home w-full'>
            <div className="relative min-h-[100vh] flex flex-col mdb:justify-center gap-8 w-full mdb:pt-0 pt-[80px]">
                <div className="flex mdb:flex-row flex-col mdb:mx-auto mdb:space-x-10 w-full max-w-[1920px] px-5">
                    <Jumbotron className="w-full mdb:w-1/2" />
                    <Carousel className="w-full mdb:w-1/2" />
                </div>
                {/* <div className="max-w-[1920px] mx-auto px-5">
                    <JobList className="mt-[120px] overflow-x-hidden" />
                </div> */}

            </div>

        </div>

    )
}

export default HomeTemplate;