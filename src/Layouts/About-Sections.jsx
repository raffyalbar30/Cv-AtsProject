import { FiFileText } from "react-icons/fi";
import AboutHero from "../Components/Abouthero";
import ProblemSolution from "../Components/ProblemSolution";
import Principles from "../Components/Principles";
import Reviews from "../Components/Reviews";
import AboutCta from "../Components/AboutCTA";


export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F7FB] font-['Plus_Jakarta_Sans',system-ui,sans-serif] leading-[normal] text-[#0F172A] antialiased">
    

      <main className="flex-1">
        <AboutHero />
        <ProblemSolution />
        <Principles />
        <Reviews />
        <AboutCta />
      </main>

    </div>
  );
}