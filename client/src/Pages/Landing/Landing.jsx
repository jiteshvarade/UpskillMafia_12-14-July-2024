import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import LandingHero from "../../components/Landing Hero/LandingHero";
import Updates from "../../components/LatestUpdate/Updates";

export default function Landing() {
  return (
    <div className="relative p-4">
      <NavBar />
      <LandingHero />
      <Updates />
    </div>
  );
}