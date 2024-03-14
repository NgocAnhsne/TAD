import "./style.scss"
import {Link} from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import logoSidebar from '../../../../anhcuatao/logo.jpg'
import avatar from '../../../../anhcuatao/avatar.png'
function Sidebar() {
    return ( 
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                    <img src={logoSidebar} className="logo"></img>
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
                            <FaPlay  className="icon"/>
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

export default Sidebar;
