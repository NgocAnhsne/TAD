import "../style.scss"
import {Link, useNavigate} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiTabletopPlayers } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import logo from '~/components/asset/img/logo.jpg'
import avatar from '~/components/asset/img/—Pngtree—a girl wearing a hat_6046477.png'
import { useState } from "react";
import axios from "axios";
import { useAuth } from "~/pages/Login/AuthContext";
function SidebarTeacher() {
    const { logout } = useAuth();
    const navigate  = useNavigate()
    const handleLogout = async () => {
        try {
          await logout();
          window.alert('Bạn muốn đăng xuất');
          navigate('/');
        } catch (error) {
          console.error('Đã xảy ra lỗi khi đăng xuất:', error);
        }
      };
    return ( 
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <div className="top_logo">
                    <img src={logo} className="logo"></img>
                    <span>TAD</span>
                    </div>
                </Link>
            </div>
            <hr />
            <Link to={`/teacher/profile/`}>
                <div className="user">
                    <img src={avatar} className="logo"></img>
                    <span>Teacher</span>
                </div>
            </Link>
            <div className="center">
                <ul>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li>
                            <FaHome  className="icon"/>
                            <span>Trang chủ</span>
                        </li>
                    </Link>
                    <Link to="/teacher/questiontext" style={{textDecoration:"none"}}>
                        <li>
                            <GiTabletopPlayers  className="icon"/>
                            <span>Tạo câu hỏi</span>
                        </li>
                    </Link>
                    <Link to="/teacher" style={{textDecoration:"none"}}>
                        <li>
                            <IoIosCreate  className="icon"/>
                            <span>Tạo bài test</span>
                        </li>
                    </Link>
                    <Link to="/teacher/lession" style={{textDecoration:"none"}}>
                        <li>
                            <FaClipboardList  className="icon"/>
                            <span>Danh sách đề</span>
                        </li>
                    </Link>
                    <Link  style={{textDecoration:"none"}} onClick={handleLogout}>
                        <li>
                            <CiLogout  className="icon"/>
                            <span>Đăng xuất</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
     );
}

export default SidebarTeacher;
