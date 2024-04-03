import "./style.scss";
import ProfilesImg from "~/components/asset/img/profile.png";
import avaBtn from "~/components/asset/img/Group 90.png";
import avaImg from "~/components/asset/img/image 32.png";
import { FaRegEdit } from "react-icons/fa";
import scoreImg from "~/components/asset/img/score.svg";
import { FaRankingStar } from "react-icons/fa6";
import rankProfileImg from "~/components/asset/img/rank 1.png";

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
              ngocanhisme
            </div>
            <div className="profileStudent__left--personal__info--level">
              {/* background level */}
              <div className="profileStudent__left--personal__info--level__content">
                Cấp 6
              </div>
            </div>
            <div className="profileStudent__left--personal__info--date">
              Đã tham gia vào tháng 3 năm 2023
            </div>
          </div>
          <div className="profileStudent__left--personal__edit">
            <div className="profileStudent__left--personal__edit--btn">
              <FaRegEdit />
            </div>
          </div>
        </div>
        <div className="profileStudent__left--statistical">
          <div className="profileStudent__left--statistical__title">
            <h1>Thống kê</h1>
          </div>
          <div className="profileStudent__left--statistical__list">
            <div className="profileStudent__left--statistical__list--item">
              <div className="profileStudent__left--statistical__list--item__img">
                <FaRankingStar />
              </div>
              <div className="profileStudent__left--statistical__list--item__content">
                <div className="profileStudent__left--statistical__list--item__content--top">
                  Chưa có xếp hạng
                </div>
                <div className="profileStudent__left--statistical__list--item__content--bottom">
                  Xếp hạng
                </div>
              </div>
            </div>
            <div className="profileStudent__left--statistical__list--item">
              <div className="profileStudent__left--statistical__list--item__img">
                <img src={scoreImg} />
              </div>
              <div className="profileStudent__left--statistical__list--item__content">
                <div className="profileStudent__left--statistical__list--item__content--top">
                  20
                </div>
                <div className="profileStudent__left--statistical__list--item__content--bottom">
                  Tổng điểm KN
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="profileStudent__right">
        <div className="profileStudent__right--content">
          <div className="profileStudent__right--content__week">
            <div className="profileStudent__right--content__week--left">
              Xếp hạng tuần
            </div>
            <div className="profileStudent__right--content__week--right">
            <div className="profileStudent__right--content__week--right__ord">
              12th
            </div>
            <div className="profileStudent__right--content__week--right__img">
              <img src={rankProfileImg} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStudent;
