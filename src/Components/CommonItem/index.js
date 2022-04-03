import React, { useMemo } from "react";
import Styles from "./commonitem.module.scss";
import clsx from "clsx";
import { useStore } from "../../Store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../Button";
function CommonItem({ data, type, ...props }) {
  const timeSecond = data.duration;
  const timeMinute = useMemo(() => {
    if (timeSecond) {
      let minute = ~~(timeSecond / 60);
      if (minute < 10) {
        minute = `0${minute}`;
      }
      let residualSecond = timeSecond % 60;
      if (residualSecond < 10) {
        residualSecond = `0${residualSecond}`;
      }
      return `${minute}:${residualSecond}`;
    }
  }, [data.duration]);
  const convertSecondstoMinutes = (second) => {};
  return (
    <div className={clsx(Styles.item)}>
      <div className={clsx(Styles.item_img)}>
        <a
          style={{ backgroundImage: `url(${data.image_url})` }}
          src={data.image_url}
        ></a>
        <Button className={clsx(Styles.item_btn)}>Xem {type}</Button>
        <div className={clsx(Styles.item_img_cover)}></div>
        {type == "video" && (
          <div className={clsx(Styles.item_video_infor)}>
            <div className={clsx(Styles.video_info_play)}>
              <FontAwesomeIcon icon="fa-solid fa-play" />
            </div>
            <div className={clsx(Styles.video_info_duration)}>{timeMinute}</div>
          </div>
        )}
      </div>
      <a className={clsx(Styles.item_title)}>{data.title}</a>
      {type == "khoá học" && (
        <div className={clsx(Styles.item_desc)}>
          <FontAwesomeIcon icon="fa-solid fa-users" />
          {(data.students_count &&
            data.students_count.toLocaleString("de-DE")) ||
            data.reactions_count}
        </div>
      )}
      {type == "bài viết" && (
        <div className={clsx(Styles.item_desc)}>
          <img
            className={clsx(Styles.desc_author)}
            src={
              "https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg" &&
              data.user.avatar_url
            }
            onError={(e) => {
              e.target.onerror = null; // prevents looping
              e.target.src =
                "https://static.fullstack.edu.vn/static/media/fallback-avatar.155cdb2376c5d99ea151.jpg";
            }}
          />
          <h4 className={clsx(Styles.author_name)}>{data.user.full_name}</h4>
          <span className={clsx(Styles.desc_dot)}>·</span>
          <span>{data.min_read} phút đọc</span>
        </div>
      )}
      {type == "video" && (
        <div className={clsx(Styles.item_desc)}>
          <FontAwesomeIcon icon="fa-solid fa-eye" />
          <span>{data.yt_view_count}</span>
          <FontAwesomeIcon icon="fa-solid fa-thumbs-up" />
          <span>{data.yt_like_count}</span>
          <FontAwesomeIcon icon="fa-solid fa-comment" />
          <span>{data.yt_comment_count}</span>
        </div>
      )}
    </div>
  );
}

export default CommonItem;
