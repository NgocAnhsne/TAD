import React, { useEffect, useState } from 'react'
import ListTest from '../List'
import '../style.scss'
import './style.scss'
import avatarProfile from '~/components/asset/img/image 26.png'
import { FaRegEdit } from "react-icons/fa";
import EditProfileTeacher from '../../../pages/Teacher/ProfileTeacher/EditProfileTeacher'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export default function Profiles() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    
 
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });
    
    useEffect(()=>{
        fetchUser();
    },[id])
    
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/user/"+id);
            setUserField(result.data.data)
            console.log(result.data.data)
        }catch(err){
            console.log("Something Wrong");
        }
    }

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
                            <div><span className='meidum'>Teacher</span></div>
                            <div><span className='opacity'>nguyenvana</span></div>
                        </div>
                        <div className='left_email'><span>Email: <span>nguyenvana@gmail.com</span></span></div>
                        <div className='left_role'><span>Role: <span>Teacher</span></span></div>
                        <div className='left_join'><span>Đã tham gia vào Tháng Ba 2023</span></div>
                    </div>
                    <div className='left_edit'>
                        <Link to='/teacher/profile/edit'>
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
                <h3>Tính năng</h3>
                <p>Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                v
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                vàovv
                v
                v
                v
                v
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                Kiếm thật nhiều KN từ các bài học để thi đua với những người học khác trên bảng xếp hạng hằng tuần
                
                </p>
            </div>
        </div>
    </div>
  )
}
