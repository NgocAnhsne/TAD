import "./style.scss";
import logo from '~/components/asset/img/logo.jpg';
function Header() {
    return ( 
        <header class="top_navigation">
        {/* <!-- header container --> */}
        <div class="header_container">
            {/* <!-- wrapper logo --> */}
            <div class="header_logo">
                <img src={logo} alt="logo_header" />
                <div class="header_logo-title">Folk Learn</div>
            </div>
            {/* <!-- wrapper button --> */}
            <div class="header_btn-wrapper">
                <button class="header_btn header_login-btn">
                    Đăng nhập
                </button>
                <button class="header_btn header_signup-btn">
                    Đăng ký
                </button>
            </div>
        </div>
    </header>
     );
}

export default Header;