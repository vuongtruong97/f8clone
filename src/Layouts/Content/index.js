import React from "react";
import SideNav from "./SideNav";
import Styles from "./content.module.scss";
import clsx from "clsx";
//pages
import { Home, Roadmap, Courses, Blog } from "./Pages";
//router
import { Routes, Route } from "react-router-dom";

function Content() {
  return (
    <div className={clsx(Styles.content_withSideBar)}>
      <div className={clsx(Styles.content_sideNav_wrap)}>
        <SideNav />
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/roadmap" element={<Roadmap></Roadmap>} />
        <Route path="/courses" element={<Courses></Courses>} />
        <Route path="/blog" element={<Blog></Blog>} />
      </Routes>
    </div>
  );
}

export default Content;
