import React, { useEffect, useState } from "react";
import Slider from "./Slider";
import Styles from "./home.module.scss";
import HomeContent from "./HomeContent";

function Home() {
  return (
    <div className={Styles.home}>
      <section>
        <Slider></Slider>
        <HomeContent></HomeContent>
      </section>
    </div>
  );
}

export default Home;
