import React from "react";
import Styles from "./listlayout.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommonItem from "../CommonItem";
import Button from "../Button";
import { useStore } from "../../Store";

function ListLayout({ title, props, type }) {
  return (
    <div className={clsx(Styles.listLayout)}>
      <div className={clsx(Styles.listLayout_heading)}>
        <h2 className={clsx(Styles.layoutHeading_title)}>{title}</h2>
        <a className={clsx(Styles.layoutHeading_link)}>
          Xem chi tiết
          <FontAwesomeIcon icon="fa-solid fa-angle-right" />
        </a>
      </div>
      <div className={clsx(Styles.listLayout_grid, "grid")}>
        <div className="row">
          {props.map((course) => (
            <div
              key={course.id}
              className={clsx(
                Styles.listLayout_item,
                "col",
                "c-3",
                "t-4",
                "m-12"
              )}
            >
              <CommonItem data={course} type={type}></CommonItem>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListLayout;
