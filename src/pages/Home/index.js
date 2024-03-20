import Header from "~/components/Layout/DefaultLayout/Header";
import "./style.css";
import imgBanner1 from "~/components/asset/img/homeBanner1.jpg";
import imgBanner2 from "~/components/asset/img/home_banner2.png";
import imgBanner3 from "~/components/asset/img/homebanner3.png";
// import SidebarStudent from "~/components/Layout/DefaultLayout/Sidebar/SidebarStudent";

function Home() {
  return (
    <div>
      <Header />
      <div class="home_wrapper">
        <div class="home_container">
          {/* banner 1 */}
          <div class="home_first-banner">
            <img src={imgBanner1}></img>
          </div>
          <div class="home_first-banner_content">
            <div class="home_first-banner_title">
              Nâng cao kỹ năng tiếng Anh với các trò chơi dân gian
            </div>
            <div class="home_first-banner_desc">
              <button>Bắt đầu ngay !</button>
              {/* <img src="../imgs/home_firstBanner_gif.jpg" alt=""> */}
            </div>
          </div>
        </div>
        <div class="home_container">
          {/* banner 2 */}
         
          <div class="home_first-banner_content">
            <div class="home_first-banner_title">
            Vui chơi cùng bạn bè
            </div>
            <div class="home_first-banner_desc">
            Tham gia các trò chơi và tận hưởng cùng những người bạn 
            </div>
          </div>
          <div class="home_first-banner">
            <img src={imgBanner2}></img>
          </div>
        </div>
          {/* banner 3 */}
        <div class="home_container">
          <div class="home_first-banner">
            <img src={imgBanner3}></img>
          </div>
          <div class="home_first-banner_content">
            <div class="home_first-banner_title">
           Tạo thêm động lực
            </div>
            <div class="home_first-banner_desc">
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
                <button>Xem thêm</button>
            </div>
        </div>
      </div>
      <svg
        width="1700"
        height="850"
        viewBox="0 0 1700 850"
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
