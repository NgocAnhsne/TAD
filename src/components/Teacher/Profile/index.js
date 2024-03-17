import React from 'react'
import ListTest from '../List'
import './style.scss'
import avatarProfile from '~/components/asset/img/image 26.png'
import { FaRegEdit } from "react-icons/fa";


export default function Profiles() {
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
                        <FaRegEdit className='icon'/>
                    </div>
                </div>
                <div className='left_bottom'>
                    <h2>Danh Sách đề</h2>
                    <ListTest/>
                </div>
            </div>
            <div className='content_right'>
            </div>
        </div>
    </div>
  )
}
