import "../style.scss"
import {Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { IoPersonSharp } from "react-icons/io5";
import { FaGamepad } from "react-icons/fa6";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import { LuPaintbrush } from "react-icons/lu";
import logoSidebar from '~/components/asset/img/logo.jpg'
import avatar from '~/components/asset/img/—Pngtree—a girl wearing a hat_6046477.png'
function SidebarAdmin() {
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
                <img src={avatar} className="logo"></img>
                <span>Admin</span>
            </div>
            <div className="center">
                <ul>
                    <Link to="/admin" style={{textDecoration:"none"}}>
                        <li>
                            <FaHome  className="icon"/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to="/admin/users" style={{textDecoration:"none"}}>
                        <li>
                            <IoPersonSharp  className="icon"/>
                            <span>Quản lý người dùng</span>
                        </li>
                    </Link>
                    <Link to="/admin/game" style={{textDecoration:"none"}}>
                        <li>
                            <FaGamepad  className="icon"/>
                            <span>Quản lý trò chơi</span>
                        </li>
                    </Link>
                    <Link to="/admin/lession" style={{textDecoration:"none"}}>
                        <li>
                            <LuPaintbrush  className="icon"/>
                            <span>Quản lý bài học</span>
                        </li>
                    </Link>
                    <Link to="/admin/question" style={{textDecoration:"none"}}>
                        <li>
                            <BsFillQuestionOctagonFill  className="icon"/>
                            <span>Quản lý câu hỏi</span>
                        </li>
                    </Link>
                    <Link to="/" style={{textDecoration:"none"}}>
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

export default SidebarAdmin;
