import MainTemplate from "@/components/template/MainTemplate";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "900", subsets: ["latin"] });



const About = () => {
  return (
    <MainTemplate>
      <div
        className={`${poppins.className}`}
      >
        About Page
      </div>
    </MainTemplate>
  );
}



export default About;
