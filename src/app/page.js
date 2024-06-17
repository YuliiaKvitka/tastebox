//src/app/page.js
import Hero from "@/components/Hero";
import styles from "./page.module.css";
import SubHero from "@/components/SubHero";
import MealDescription from "@/components/MealDescription";
import HealthyTasty from "@/components/HealthyTasty";
import Gallery from "@/components/Gallery";
import Features from "@/components/Features";
import HowToUse from "@/components/HowToUse";
import LoveYourself from "@/components/LoveYourself";
import News from "@/components/News";
import BoxOffers from "@/components/BoxOffers";
import Offers from "@/components/Offers";

export default function Home() {
  return (
    <>
        {/* <div className="container">  */}
            <Hero />
            <SubHero />
            <MealDescription /> 
            <HealthyTasty />
            <Gallery />
            <Features />
      <HowToUse />
      <Offers/>
            <News />
            
            {/* <BoxOffers/> */}
            <LoveYourself />
            
        {/* </div> */}
    </>
  );
}
