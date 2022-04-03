import clsx from "clsx";
import React from "react";
import Styles from "./footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className={clsx(Styles.footerWrap)}>
      <div className={clsx(Styles.footerContent, "grid", "wide")}>
        <div className={clsx("col", "c-3", "t-4", "m-12")}>
          <div className={clsx(Styles.footer_Column)}>
            <div>
              <h3 className={clsx(Styles.footer_Heading_top)}>
                Học Lập Trình Để Đi Làm
              </h3>
              <ul className={clsx(Styles.footer_List)}>
                <li>
                  Điện thoại: <a>0246.329.1102</a>
                </li>
                <li>
                  Email: <a>contact@fullstack.edu.vn</a>
                </li>
                <li>
                  Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy,
                  Hà Nội
                </li>
                <li>
                  <img src="https://static.fullstack.edu.vn/static/media/dmca.2593d9ecf1c982e3c3a2.png" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx("col", "c-3", "t-4", "m-12")}>
          <div className={clsx(Styles.footer_Column)}>
            <div>
              <h3 className={clsx(Styles.footer_Heading)}>Về F8</h3>
              <ul className={clsx(Styles.footer_List)}>
                <li>
                  <a>Giới thiệu</a>
                </li>
                <li>
                  <a>Cơ hội việc làm</a>
                </li>
                <li>
                  <a>Đối tác</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx("col", "c-3", "t-4", "m-12")}>
          <div className={clsx(Styles.footer_Column)}>
            <div>
              <h3 className={clsx(Styles.footer_Heading)}>Hỗ Trợ</h3>
              <ul className={clsx(Styles.footer_List)}>
                <li>
                  <a>Liện hệ</a>
                </li>
                <li>
                  <a>Bảo mật</a>
                </li>
                <li>
                  <a>Điều khoản</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={clsx("col", "c-3", "t-4", "m-12")}>
          <div className={clsx(Styles.footer_Column)}>
            <div>
              <h3 className={clsx(Styles.footer_Heading)}>
                Công ty Cổ phần Công nghệ giáo dục F8
              </h3>
              <ul className={clsx(Styles.footer_List)}>
                <li>Mã số thuế: 0109922901 </li>
                <li>Ngày thành lập: 04/03/2022</li>
                <li>
                  Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát
                  triển những sản phẩm mạng lại giá trị cho cộng đồng.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={clsx("grid", "wide")}>
        <div className={clsx("col", "c12", "t-12", "m-12")}>
          <div className={clsx(Styles.footer_bottom)}>
            <div className={clsx(Styles.footer_copyRight)}>
              <span>© 2022 F8 - Nền tảng học lập trình số 1 Việt Nam</span>
            </div>
            <div className={clsx(Styles.footer_socialList)}>
              <a>
                <FontAwesomeIcon icon="fa-brands fa-youtube" />
              </a>
              <a>
                <FontAwesomeIcon icon="fa-brands fa-facebook-square" />
              </a>
              <a>
                <FontAwesomeIcon icon="fa-brands fa-tiktok" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
