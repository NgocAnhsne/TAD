import "../style.scss"
import {Link, useNavigate} from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { GiTabletopPlayers } from "react-icons/gi";
import { FaRankingStar } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import logoSidebar from '~/components/asset/img/logo.jpg'
import avatar from '~/components/asset/img/—Pngtree—a girl wearing a hat_6046477.png'
import { SiTestcafe } from "react-icons/si";

import { useAuth } from "~/pages/Login/AuthContext";

function SidebarStudent() {
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
                    <img src={logoSidebar} className="logo"></img>
                    <span>TAD</span>
                    </div>
                </Link>
            </div>
            <hr />
            <div className="user">
                <Link to='/student/profile'>
                <img src={avatar} className="logo"></img>
                <span>Student</span>
                </Link>
            </div>
            <div className="center">
                <ul>
                   
                    <Link to="/student/game" style={{textDecoration:"none"}}>
                        <li>
                            <FaPlay  className="icon"/>
                            <span>Chơi</span>
                            
                        </li>
                    </Link>
                    <Link to="/student/lesson" style={{textDecoration:"none"}}>
                        <li>
                            <GiTabletopPlayers  className="icon"/>
                            <span>Lộ trình</span>
                        </li>
                    </Link>
                    <Link to="/student/test" style={{textDecoration:"none"}}>
                        <li>
                            <SiTestcafe  className="icon"/>
                            <span>Bài kiểm tra</span>
                        </li>
                    </Link>
                    <Link to="/student/rank" style={{textDecoration:"none"}}>
                        <li>
                            <FaRankingStar  className="icon"/>
                            <span>Xếp hạng</span>
                        </li>
                    </Link>
                    <Link to="/student/history" style={{textDecoration:"none"}}>
                        <li>
                            <FaHistory  className="icon"/>
                            <span>Lịch sử</span>
                        </li>
                    </Link>
                    <Link to="/" style={{textDecoration:"none"}} onClick={handleLogout} >
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

export default SidebarStudent;
