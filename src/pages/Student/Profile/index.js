import "./style.scss";


import ProfilesImg from "~/components/asset/img/profile.png";
import avaBtn from "~/components/asset/img/Group 90.png";
import avaImg from "~/components/asset/img/image 32.png";



function ProfileStudent() {
  return (
    <div className="profileStudent">
      <div className="profileStudent__left">
        <div className="profileStudent__left--personal">
          <div className="profileStudent__left--personal__ava shadow">
          <div className="profileStudent__left--personal__ava--img">
          <img src={avaImg} />
          </div>
          <div className="profileStudent__left--personal__ava--button">
          <img src={avaBtn} />
          </div>
          </div>
          <div className="profileStudent__left--personal__info">
              <div className="profileStudent__left--personal__info--name">
                Trần Thị Ngọc Ánh
              </div>
              <div className="profileStudent__left--personal__info--nickname">
                <div className="profileStudent__left--personal__info--nickname__name">
                  ngocanhisme
                </div>
                <div className="profileStudent__left--personal__info--nickname__sex">
        
                </div>
              </div>
              <div className="profileStudent__left--personal__info--level">
                {/* background level */}
              <div className="profileStudent__left--personal__info--level__content">
              <div className="profileStudent__left--personal__info--level__content--num">
                Cấp 6
              </div>
              </div>
              </div>
              <div className="profileStudent__left--personal__info--date">
                Đã tham gia vào tháng 3 năm 2023
              </div>
          </div>
        </div>
        <div className="profileStudent__left--statistical">
        <div className="profileStudent__left--statistical__list">
        <div className="profileStudent__left--statistical__list--item">

        </div>
        </div>
        </div>
      </div>
      <div className="profileStudent__right">
        <div className="profileStudent__right--"></div>
      </div>
    </div>
  );
}

export default ProfileStudent;
