import Header from "~/components/Layout/DefaultLayout/Header";
import "./style.scss";
import imgBanner1 from "~/components/asset/img/home_banner1.png";
import imgBanner2 from "~/components/asset/img/home_banner2.png";
import imgFooter from "~/components/asset/img/img_footer.png";
import Popup from "../../components/Popup/Popup";

import { useState,useEffect } from "react";

// import SidebarStudent from "~/components/Layout/DefaultLayout/Sidebar/SidebarStudent";


function Home() {
  const [openPopup, setOpenPopup] = useState(false);
  
  useEffect(() => {
    function checkPosition() {
      const elementToShow = document.querySelector('.home_container_3');
      if (!elementToShow) return;
  
      const elementPosition = elementToShow.getBoundingClientRect().top;
      const windowPosition = window.innerHeight;
  
      if (elementPosition < windowPosition) {
        setTimeout(() => {
          elementToShow.classList.add('show');
        });
      } else {
        elementToShow.classList.remove('show');
      }
    }
  
    window.addEventListener('scroll', checkPosition);
    checkPosition();
   
  }, []);
  return (
    <div className="home_cover">
      <Popup openPopup={openPopup} setOpenPopup={setOpenPopup}></Popup>
      <Header />
      <div className="home_wrapper">
        <div className="home_container home_container_1">
          {/* banner 1 */}
          <div className="home_first-banner">
            <img src={imgBanner2}></img>
          </div>
          <div className="home_first-banner_content">
            <div className="home_first-banner_content-title">
              Nâng cao kỹ năng tiếng Anh với các trò chơi 
            </div>
            <div className="home_first-banner_content-desc">
              <div className="home_first-banner_content-desc_btn">
              <button
                className="home_first-banner_content-desc_btn-inner box_shadow"
                onClick={() => setOpenPopup(true)}
              >
                Bắt đầu ngay !
              </button>
              </div>
              {/* <img src="../imgs/home_firstBanner_gif.jpg" alt=""> */}
            </div>
          </div>
        </div>
        <div className="home_container home_container_2">
          {/* banner 2 */}

          <div className="home_first-banner_content">
            <div className="home_first-banner_content-title">
              Vui chơi cùng bạn bè
            </div>
            <div className="home_first-banner_content-desc">
              Tham gia các trò chơi và học tập cùng những người bạn
            </div>
          </div>
          <div className="home_first-banner">
            <img src={imgBanner1}></img>
          </div>
        </div>
        {/* banner 3 */}
        <div className="home_container home_container_3" >
          {/* <div className="home_first-banner">
            <img src={imgBanner3}></img>
          </div> */}
        
          <div className="home_first-banner_content banner_3">
            <div className="home_first-banner_content-title">
              Tạo thêm động lực
            </div>
            <div className="home_first-banner_content_desc">
              Theo dõi lộ trình, xây dựng thói quen học tập, qua những tính năng
              mô phỏng trò chơi, các thử thách vui vẻ
            </div>

            <div className="home_first-banner_content-desc_btn" style={{marginTop:60}}>
              <button
                className="home_first-banner_content-desc_btn-inner box_shadow"
                onClick={() => setOpenPopup(true)}
              >
                Bắt đầu ngay !
              </button>
              </div>
          </div>
        </div>
      </div>
          
      <footer class="footer__layout--desktop">
    <div class="layout__footer--devider "></div>
    <div class="layout__footer--wrapper row-max-width">
        <div class="layout__footerBanner--wrapper">
            <div class="footer__banner--left">
                <div class="footer__banner">
                    <div class="footer__banner--title">
                        Thông tin
                    </div>
                    <div class="footer__banner--content">
                        <ul class="footer__listUnit">
                            <li>Website học tiếng Anh TAD</li>
                        </ul>
                    </div>
                </div>
                <div class="footer__banner">
                    <div class="footer__banner--title">
                        Dịch vụ
                    </div>
                    <div class="footer__banner--content">
                        <ul class="footer__listUnit">
                            <li><a href="">Làm kiểm tra</a></li>
                            <li><a href="">Trò chơi</a></li>
                            <li><a href="">Cài đặt tài khoản</a></li>
                        </ul>
                    </div>
                </div>
                <div class="footer__banner">
                    <div class="footer__banner--title">
                        Thành viên
                    </div>
                    <div class="footer__banner--content">
                        <ul class="footer__listUnit">
                            <li><a href="">Lê Minh Tiến Đạt - 2011364</a></li>
                            <li><a href="">Nguyễn Lê Thanh Tỉnh - 2012384</a></li>
                            <li><a href="">Trần Thị Ngọc Ánh - 2011354</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <img src={imgFooter} alt="Footer Image"></img>
    </div>
</footer>

    </div>
  );
}

export default Home;
