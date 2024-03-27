  import Header from "~/components/Layout/DefaultLayout/Header";

  import "./style.scss";
  import imgBanner1 from "~/components/asset/img/homeBanner1.jpg";
  import imgBanner2 from "~/components/asset/img/home_banner2.png";
  import imgBanner3 from "~/components/asset/img/homebanner3.png";
  import Login from "../Login/index";
  import Popup from "~/components/Popup/Popup";
  import { useState } from "react";
  // import SidebarStudent from "~/components/Layout/DefaultLayout/Sidebar/SidebarStudent";

  function Home() {
    const [buttonLogin,setButtonPopup]=useState(false);
    const [openPopup, setOpenPopup]=useState(false)
    return (
      <div>
        <Header />

        <div className="home_wrapper">
          <div className="home_container">
            {/* banner 1 */}
            <div className="home_first-banner">
              <img src={imgBanner1}></img>
            </div>
            <div className="home_first-banner_content">
              <div className="home_first-banner_content-title">
                Nâng cao kỹ năng tiếng Anh với các trò chơi dân gian
              </div>
              <div className="home_first-banner_content-desc">
                <button 
                  className="home_first-banner_content-desc_btn box_shadow" 
                  onClick={()=>setOpenPopup(true)}>
                  Bắt đầu ngay !
                </button>
                {/* <img src="../imgs/home_firstBanner_gif.jpg" alt=""> */}
              </div>
            </div>
          </div>
          <div className="home_container">
            {/* banner 2 */}
          
            <div className="home_first-banner_content">
              <div className="home_first-banner_content-title">
              Vui chơi cùng bạn bè
              </div>
              <div className="home_first-banner_content-desc">
              Tham gia các trò chơi và tận hưởng cùng những người bạn 
              </div>
            </div>
            <div className="home_first-banner">
              <img src={imgBanner2}></img>
            </div>
          </div>
            {/* banner 3 */}
          <div className="home_container">
            <div className="home_first-banner">
              <img src={imgBanner3}></img>
            </div>
            <div className="home_first-banner_content">
              <div className="home_first-banner_content-title">
            Tạo thêm động lực
              </div>
              <div className="home_first-banner_content_desc">
              Theo dõi lộ trình,  xây dựng thói quen học tập, qua những tính năng mô phỏng trò chơi, các thử thách vui vẻ, và nhắc nhở mỗi ngày
              </div>
            </div>
          </div>

          {/* homeRating */}
          <div className="homeRating">
              <div className="homeRating_title">
                  Đánh giá
              </div>
              <div className="homeRating_viewmore">
                  <button className="homeRating_viewmore-btn box_shadow">Xem thêm</button>
              </div>
          </div>
        </div>
        <svg
          width="1900"
          height="850"
          viewBox="0 0 1900 850"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          <path
            d="M-8.72612e-05 99.8007C306.248 485.034 1917 -256.294 1917 99.8007C1917 455.895 1917 850 1917 850H-8.72612e-05V99.8007Z"
            fill="#3D6194"></path>
        </svg>
      </div>
    );
  }

  export default Home;
