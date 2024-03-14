import "../style.scss"
import {Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GiTabletopPlayers } from "react-icons/gi";
import { IoIosCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import logo from '~/components/asset/img/logo.jpg'
import avatar from '~/components/asset/img/—Pngtree—a girl wearing a hat_6046477.png'
function SidebarTeacher() {
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
            <div className="user">
                <img src={avatar} className="logo"></img>
                <span>Teacher</span>
            </div>
            <div className="center">
                <ul>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li>
                            <FaHome  className="icon"/>
                            <span>Trang chủ</span>
                        </li>
                    </Link>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li>
                            <GiTabletopPlayers  className="icon"/>
                            <span>Chơi 2 người</span>
                        </li>
                    </Link>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li>
                            <IoIosCreate  className="icon"/>
                            <span>Tạo bài test</span>
                        </li>
                    </Link>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <li>
                            <FaClipboardList  className="icon"/>
                            <span>Danh sách đề</span>
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

export default SidebarTeacher;
