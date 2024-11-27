// import Image from "next/image";
// import Card from "@/components/molecules/Card";
// import Jumbotron from "@/components/organisms/Home/Jumbotron";
import FooterTemplate from "@/components/template/FooterTemplate";
import HomeTemplate from "@/components/template/HomeTemplate";
import MainTemplate from "@/components/template/MainTemplate";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "900", subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <MainTemplate>
      <div
        className={`${poppins.className}`}
      >
        <HomeTemplate />
        <FooterTemplate />
      </div>
    </MainTemplate>
  );
}
