import "./style.scss";
import avaBtn from "~/components/asset/img/Group 90.png";
import avaImg from "~/components/asset/img/student_avatar.png";
import { FaRegEdit } from "react-icons/fa";
import scoreImg from "~/components/asset/img/score.svg";
import { FaRankingStar } from "react-icons/fa6";
import rankProfileImg from "~/components/asset/img/rank 1.png";
import { Link } from "react-router-dom";

function ProfileStudent() {
  const user = JSON.parse(localStorage.getItem('user'));
  var moment = require('moment');
  const width = `${(user.score / 10) * 10}%`;
  return (
    <div className="profileStudent">
      <div className="profileStudent__left">
        <div className="profileStudent__left--personal shadow">
          <div className="profileStudent__left--personal__ava">
            <div className="profileStudent__left--personal__ava--img">
              <img src={user.avatar}/>
            </div>
            <div className="profileStudent__left--personal__ava--button">
              <img src={avaBtn}/>
            </div>
          </div>
          <div className="profileStudent__left--personal__info">
            <div className="profileStudent__left--personal__info--name">
            {user.name}
            </div>
            <div className="profileStudent__left--personal__info--email">
            <div>Email: </div> <div className="profileStudent__left--personal__info--email__item"> {user.email}</div>
            </div>
            <div className='profileStudent__left--personal__info--role'>
              <div>Vai trò: </div>
              <div className="profileStudent__left--personal__info--role__item">{(user.role == 0) ? 'Học Sinh': 'Giáo Viên'}</div></div>
              
              <div style={{fontWeight:800,display:"flex", alignItems:"center"}} className="profileStudent__left--personal__info--role">
                <div style={{width:"100%"}}>Cấp độ:{Math.floor(user.score / 10)}:</div>
              <div className="profileStudent__left--personal__info--level">
              <div className="profileStudent__left--personal__info--level__content" style={{ width }}>
              </div>
            </div>
              </div>
            <div className="profileStudent__left--personal__info--date">
            Đã tham gia vào {moment(user.created_at).format('L')}
            </div>
          </div>
          <div className="profileStudent__left--personal__edit">
            <div className="profileStudent__left--personal__edit--btn">
            <Link to={`/student/profile/edit/${user.id}`}>
                <FaRegEdit className="icon" />
              </Link>
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
                    {user.score}
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
            
            </div>
            <div className="profileStudent__right--content__week--right__img">
              <img src={rankProfileImg} />
            </div>
            </div>
          </div>
        <div className="profileStudent__right--content__score">
        <div className="profileStudent__right--content__score--title">
          Điểm tuần này: {user.rank}
        </div>
        <div className="profileStudent__right--content__score--content">
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileStudent;
