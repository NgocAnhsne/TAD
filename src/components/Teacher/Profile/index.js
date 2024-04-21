import React, { useEffect, useState } from "react";
import ListTest from "../List";
import "../style.scss";
import "./style.scss";
import avatarProfile from "~/components/asset/img/teacher_avt.png";

import { FaRegEdit } from "react-icons/fa";
import EditProfileTeacher from "../../../pages/Teacher/ProfileTeacher/EditProfileTeacher";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Profiles() {
  
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate  = useNavigate()
  const [userField, setUserField] = useState([]);

  var moment = require("moment");
  console.log(user)
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá tài khoản này?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/user/delete/${user.id}`);
        localStorage.removeItem("user"); 
        navigate("/"); 
      } catch (error) {
        console.error('Error deleting item:', error);
        alert("Đã có lỗi xảy ra khi xoá tài khoản.");
      }
    }
  };

  return (
    <div className="teacher_component">
      <div className="teacher_content">
        <div className="content_left">
          <div className="left_top">
            <div className="left_avatar">
              <img src={avatarProfile} alt="Avatar"></img>
            </div>
            <div className="left_content">
              <div className="left_name">
                <div>
                  <span className="meidum">{user.name}</span>
                </div>
              </div>
              <div className="left_email">
                <span>Email:</span> <span>{user.email}</span>
              </div>
              <div className="left_role">
                <span>Vai trò:</span>{" "}
                <span>{user.role === 0 ? "Học Sinh" : "Giáo Viên"}</span>
              </div>
              <div className="left_join">
                <span format="YYYY MMMM dddd" className="body_opacity opacity">
                  Đã tham gia vào {moment(user.created_at).format("L")}
                </span>
              </div>
            </div>
            <div className="left_edit">
              
            </div>
          </div>
          <div className="left_bottom">
            <h2>Danh sách đề</h2>
            <ListTest />
          </div>
        </div>

        <div className="content_right">
          <div className="content_right-content">
            {/* <div className="content_right-content_items">
                Quản lý lớp học
            </div>
            <div>
                
            </div>
            <div className="content_right-content_items">
                Thống kê điểm số
            </div>
            <div>
                
            </div>
            
            <div className="content_right-content_items">
                Xem danh sách lớp học
            </div> */}
            <div>
                
            </div>
            <div className="content_right-content_items">
              <Link to={`/teacher/profile/edit/${user.id}`}>
                Cài đặt thông tin
              </Link>
            </div>
            <div className="content_right-content_items" onClick={handleDelete}>
                Xoá tài khoản
            </div>
            <div>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
