import React, { useState, useEffect } from "react";
import Styles from "./sidenav.module.scss";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideNav() {
  const navOptions = [
    {
      to: "/",
      name: "Home",
      icon: <FontAwesomeIcon icon="fa-solid fa-house" />,
    },
    {
      to: "/roadmap",
      name: "Lộ trình",
      icon: <FontAwesomeIcon icon="fa-solid fa-road" />,
    },
    {
      to: "/courses",
      name: "Học",
      icon: <FontAwesomeIcon icon="fa-solid fa-lightbulb" />,
    },
    {
      to: "/blog",
      name: "Blog",
      icon: <FontAwesomeIcon icon="fa-solid fa-newspaper" />,
    },
  ];
  const [showCreateBlog, setShowCreateBlog] = useState(false);
  const locationPath = useLocation().pathname;
  const handleOption = (e) => {};
  const handleCreatBlog = () => {
    setShowCreateBlog(!showCreateBlog);
  };
  return (
    <div className={clsx(Styles.sideNav_wrap)}>
      <div
        onClick={handleCreatBlog}
        className={clsx(Styles.createBtn, {
          [Styles.active]: showCreateBlog,
        })}
      >
        <FontAwesomeIcon icon="fa-solid fa-plus" />
        {showCreateBlog && (
          <div className={clsx(Styles.createBlog)}>
            <FontAwesomeIcon icon="fa-solid fa-pen" />
            <span>Viết blog</span>
          </div>
        )}
      </div>
      <div className={clsx(Styles.sideNav_list)}>
        {navOptions.map((option, i) => (
          <Link
            onClick={handleOption}
            key={i}
            className={clsx(Styles.navOption, {
              [Styles.active]: option.to == locationPath,
            })}
            to={option.to}
          >
            {option.icon}
            <span>{option.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
