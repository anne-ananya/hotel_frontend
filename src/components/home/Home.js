import React from "react";
import Carousel from "./Carousel";
import About from "./About";
import Services from "./Service";
import Rooms from "./Rooms";
import Sliders from "./Slider";


export default function Home() {
  return (
    <>
      <Carousel />
      <About />
      <Rooms />
      <Services />
      <Sliders />
    </>
  );
}
