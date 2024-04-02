import "./style.scss";
// import ProfilesImg from "~/components/asset/img/profile.png";

function ProfileStudent() {
  return (
    <div className="profileStudent">
      <div className="profileStudent__left">
        <div className="profileStudent__left--personal">
          <div className="profileStudent__left--personal__ava">
          <div className="profileStudent__left--personal__ava--img">

          </div>
          <div className="profileStudent__left--personal__ava--button">

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
                  {/* <img src={ProfilesImg} /> */}
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
