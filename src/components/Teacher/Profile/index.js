import React, { useContext, useEffect, useState } from 'react'
import ListTest from '../List'
import '../style.scss'
import './style.scss'
import avatarProfile from '~/components/asset/img/image 26.png'
import background from '~/components/asset/img/_11.jpg'
import { FaRegEdit } from "react-icons/fa";
import EditProfileTeacher from '../../../pages/Teacher/ProfileTeacher/EditProfileTeacher'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'





export default function Profiles() {
    
    const {id}=useParams()
    const [loading,setLoading]=useState()
    const user = JSON.parse(localStorage.getItem('user'));
 
    const [userField, setUserField] = useState([]);
    

    var moment = require('moment')
   
  return (
    <div className='teacher_component'>      
        <div className='teacher_content'>
            <div className='content_left'>
                <div className='left_top'>
                    <div className='left_avatar'>
                        <img src={avatarProfile}></img>
                    </div>
                    <div className='left_content'>
                        <div className='left_name'>
                            <div><span className='meidum'>{user.name}</span></div>
                            {/* <div><span className='opacity'>nguyenvana</span></div> */}
                        </div>
                        <div className='left_email'><span>Email: <span>{user.email}</span></span></div>
                        <div className='left_role'><span>Role: <span>{(user.role == 0) ? 'Học Sinh': 'Giáo Viên'}</span></span></div>
                        <div className='left_join'><span format='YYYY MMMM dddd' className='body_opacity opacity'>Đã tham gia vào {moment(user.created_at).format('L')}</span></div>
                    </div>
                    <div className='left_edit'>
                        <Link to={`/teacher/profile/edit/${user.id}`}>
                            <FaRegEdit className='icon'/>
                        </Link>
                    </div>
                </div>
                <div className='left_bottom'>
                    <h2>Danh Sách đề</h2>
                    <ListTest/>
                </div>
            </div>
         
            <div className='content_right'>
                <img className='content_right_background' src={background}></img>
                <div className='img__right1'></div>
                <div className='img__right1'></div>
                <div className='img__right1'></div>
            </div>
   
        </div>
             
    </div>
  )
}
