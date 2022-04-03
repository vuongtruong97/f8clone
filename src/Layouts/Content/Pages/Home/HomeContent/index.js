import React from "react";
import { ListLayout } from "../../../../../Components";
import Styles from "./homecontent.module.scss";
import clsx from "clsx";
import { useStore } from "../../../../../Store";

function HomeContent() {
  const { CoursesData, VideoData, BlogData } = useStore();
  const listPaths = CoursesData.learning_paths;
  console.log(BlogData);
  return (
    <>
      <div className={clsx(Styles.homeContent)}>
        {listPaths.map((path, i) => (
          <ListLayout
            title={path.title}
            props={path.courses}
            key={path.id}
            type="khoá học"
          ></ListLayout>
        ))}
        <ListLayout
          title={"Bài viết nổi bật"}
          props={BlogData}
          type="bài viết"
        ></ListLayout>
        <ListLayout
          title={"Videos nổi bật"}
          props={VideoData}
          type="video"
        ></ListLayout>
      </div>
    </>
  );
}

export default HomeContent;
