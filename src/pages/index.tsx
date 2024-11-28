import { GetServerSideProps, NextPage } from 'next';
import FooterTemplate from "@/components/template/FooterTemplate";
import HomeTemplate from "@/components/template/HomeTemplate";
import MainTemplate from "@/components/template/MainTemplate";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "900", subsets: ["latin"] });


interface HomePageProps {
  candidates: Candidate[];
  services: Service[];
};


const Home: NextPage<HomePageProps> = ({ candidates, services }) => {
  return (
    <MainTemplate>
      <div
        className={`${poppins.className}`}
      >
        <HomeTemplate candidates={candidates} services={services} />
        <FooterTemplate />
      </div>
    </MainTemplate>
  );
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const fetchCandidates = fetch("http://localhost:3000/api/candidates");
  const fetchServices = fetch("http://localhost:3000/api/services");

  const [productsRes, categoriesRes] = await Promise.all([fetchCandidates, fetchServices]);

  const candidates: Candidate[] = await productsRes.json();
  const services: Service[] = await categoriesRes.json();

  return {
    props: {
      candidates,
      services,
    },
  };
};


export default Home;
