import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import teacher_image from "~/components/asset/img/teacher_role_img-.png";
import student_image from "~/components/asset/img/student_role.png";
import Upload from '~/pages/Upload';

export default function RoleChooser() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const newUser = JSON.parse(localStorage.getItem('user'));


  const handleRoleChange = async (newRole) => {
    setIsLoading(true);
    try {
 
        await axios.patch(`http://127.0.0.1:8000/api/user/update-role/${newUser.id}`, { role: newRole });
        setIsLoading(false); 
        console.log("Role updated successfully!");
        navigate(newRole === "0" ? `/student/profile` : `/teacher/`);
    } catch (err) {
        console.log("Something went wrong:", err);
    }
};
  return (
    <div className="roleChooser">
      <div className="roleChooser_container">
        {/* <div className="roleChooser_container-welc">
          Chào mừng người dùng:
          {newUser && (
            <div className="user-info">
              <div className="user-info-row">
                <div className="user-info-label">Name:</div>
                <div className="user-info-value">{newUser.name}</div>
              </div>
              <div className="user-info-row">
                <div className="user-info-label">Email:</div>
                <div className="user-info-value">{newUser.email}</div>
              </div>
              <div className="user-info-row">
                <div className="user-info-label">Role:</div>
                <div className="user-info-value">{newUser.role}</div>
              </div>
            </div>
          )}
        </div> */}
        <div className="roleChooser_container-wrapper">
          <div className="roleChooser_container-wrapper_banner ">
            <img src={teacher_image} alt="Teacher"></img>
            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-left">
              <div className="roleChooser_container-wrapper_banner-box_title">
                Giáo viên
              </div>
              <div className="roleChooser_container-wrapper_banner-box_desc">
                Mở lớp học, quản lý các bài học đa dạng và các học sinh của mình
              </div>
              <span>
                <button
                  className="roleChooser_container-wrapper_banner-box_button
                             roleChooser_container-wrapper_banner-box_button-left"
                  onClick={() => handleRoleChange("1")}
                >
                  Khám phá ngay
                </button>
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
                <button
                  className="roleChooser_container-wrapper_banner-box_button
                             roleChooser_container-wrapper_banner-box_button-right"
                  onClick={() => handleRoleChange("0")}
                >
                  Khám phá ngay
                </button>
              </span>
            </div>
            <img className="right_img" src={student_image} alt="Student"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
