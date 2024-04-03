import React from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import "./style.scss";
import teacher_image from "~/components/asset/img/teacher_role_img-.png";
import student_image from "~/components/asset/img/student_role.png";



export default function RoleChooser() {
  return (
    <div>
      <Header />
      <div className="roleChooser">
      <div className="roleChooser_container">
        <div className="roleChooser_container-wrapper">
          <div className="roleChooser_container-wrapper_banner ">
            <img src={teacher_image}></img>
            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-left">
                <div className="roleChooser_container-wrapper_banner-box_title">
                Giáo viên
                </div>
                <div className="roleChooser_container-wrapper_banner-box_desc">
                Mở lớp học, quản lý  các bài học đa dạng và các học  sinh của mình
                </div>
                <span>
                  <button className="roleChooser_container-wrapper_banner-box_button
                                    roleChooser_container-wrapper_banner-box_button-left">
                                      Khám phá ngay</button>
                </span>
            </div>
          </div>
          <div className="roleChooser_container-wrapper_banner">
            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-right">
                <div className="roleChooser_container-wrapper_banner-box_title">
                Học sinh
                </div>
                <div className="roleChooser_container-wrapper_banner-box_desc">
                Tham gia các trò chơi thú vị cùng bạn bè, khám phá bài học mới mẻ
                </div>
                <span>
                  <button className="roleChooser_container-wrapper_banner-box_button
                                    roleChooser_container-wrapper_banner-box_button-right">
                                      Khám phá ngay</button>
                </span>
            </div>
            <img className="right_img" src={student_image}></img>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
}
