import AppContext from "./Context";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SliderData, CoursesData, BlogData, VideoData } from "./contants";

function AppProvider({ children }) {
  console.log("run provider");
  const value = { SliderData, CoursesData, BlogData, VideoData };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppProvider;
