
import { Inter } from 'next/font/google'
import MyNavbar from "./Components/navbar";
import MYparticles from "./Components/particles";
import Typewriter from "typewriter-effect";
import HeroSection from "./Components/Hero";
import Mission from "./Components/Mission";
import AboutSection from "./Components/AboutSection";
import Vision from "./Components/Vision";
import Workflow from "./Components/Workflow";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Technologies from './Components/Technologies';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
     <MYparticles />
      <MyNavbar />
    </>
  )
}
