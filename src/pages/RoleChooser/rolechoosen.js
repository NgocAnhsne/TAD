import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "~/components/Layout/DefaultLayout/Header";
import "./style.scss";
import teacher_image from "~/components/asset/img/teacher_role_img-.png";
import student_image from "~/components/asset/img/student_role.png";

export default function RoleChooser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userField, setUserField] = useState({
    name: "",
    email: "",
    role: "",
    password:"",
  });

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/user/" + id);
      setUserField(result.data.data);
      console.log(userField)
    } catch (err) {
      console.log("Something Wrong");
    }
  };


  const handleStudentRoleChange = async () => {

    try {
        setUserField({ ...userField, role: "0" });
        await axios.put(`http://127.0.0.1:8000/api/user/update/${id}`, { ...userField, role: "0" });
        // Update role locally after successful request
        console.log("Role updated successfully!");
      console.log(userField);
      navigate(`/student/profile`)
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const handleTeacherRoleChange = async () => {
    
    // try {
    //   await axios.put(`http://127.0.0.1:8000/api/user/update/${id}`, {
    //     ...userField,
    //     role: "1",
    //   });
    //   console.log("Role updated successfully!");
    try {
        setUserField({ ...userField, role: "1" });
        await axios.put(`http://127.0.0.1:8000/api/user/update/${id}`, { ...userField, role: "1" });
        // Update role locally after successful request
        console.log("Role updated successfully!");
      console.log(userField);
      navigate(`/teacher/`)
    } catch (err) {
      console.log("Something Wrong");
    }
  };
  return (
    <div>
      <div className="roleChooser">
        <div className="roleChooser_container">
            <div className="roleChooser_container-welc">
                Chào mừng người dùng:
          {userField && (
            <div className="user-info">
              <div className="user-info-row">
                <div className="user-info-label">Name:</div>
                <div className="user-info-value">{userField.name}</div>
              </div>
              <div className="user-info-row">
                <div className="user-info-label">Email:</div>
                <div className="user-info-value">{userField.email}</div>
              </div>
              <div className="user-info-row">
                <div className="user-info-label">Role:</div>
                <div className="user-info-value">{userField.role}</div>
              </div>
            </div>
          )}
          </div>
            <button className="check_btn" onClick={fetchUser}>check</button>
          <div className="roleChooser_container-wrapper">
            <div className="roleChooser_container-wrapper_banner ">
              <img src={teacher_image} alt="Teacher"></img>
              <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-left">
                <div className="roleChooser_container-wrapper_banner-box_title">
                  Giáo viên
                </div>
                <div className="roleChooser_container-wrapper_banner-box_desc">
                  Mở lớp học, quản lý các bài học đa dạng và các học sinh của
                  mình
                </div>
                <span>
                  <button
                    className="roleChooser_container-wrapper_banner-box_button
                                        roleChooser_container-wrapper_banner-box_button-left"
                    onClick={handleTeacherRoleChange}
                    
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
                  Tham gia các trò chơi thú vị cùng bạn bè, khám phá bài học mới
                  mẻ
                </div>
                <span>
                  <button
                    className="roleChooser_container-wrapper_banner-box_button
                                        roleChooser_container-wrapper_banner-box_button-right"
                                        onClick={handleStudentRoleChange}
                                        
                  >
                    Khám phá ngay
                  </button>
                </span>
              </div>
              <img
                className="right_img"
                src={student_image}
                alt="Student"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>

    //     <button onClick={handleRoleChange}>Change Role</button>
    // </div>
  );
}
