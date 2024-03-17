import React from 'react'

import './style.scss'

import { BsFillQuestionCircleFill } from "react-icons/bs";
import Select from 'react-select'
import { FaRegImage } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { Link } from 'react-router-dom';

const options = [
    { value: '15p', label: '15p' },
    { value: '30p', label: '30p' },
    { value: '45p', label: '45p' }
  ]

export const CreatTest = () => {
  return (
    <div className='teacher_component'>
            <div className='create_container'>
                <div className='container_left'>
                    <div className='left_top'>
                        <div className='top_text'>
                            <span>Tên bài test (bắt buộc)</span>
                            <input></input>
                        </div>
                        <div className='top_text'>
                            <span>Số lượng câu hỏi</span>
                            <input type='number'></input>
                        </div>
                    </div>
                    <div className='left_bottom'>
                        <span>Tạo loại câu hỏi</span>
                        <div className='bottom_btn'>
                            <Link to='/teacher/questiontext'>
                                <div>
                                    <BsFillQuestionCircleFill className='left_icon'/>
                                    <span>Chữ</span>
                                </div>
                            </Link>
                            <Link to='/teacher/questionlisten'>
                            <div>
                                <HiSpeakerWave className='left_icon'/>
                                <span>Âm thanh</span>
                            </div>
                            </Link>
                            <Link to='/teacher/questionimg'>
                                <div>
                                    <FaRegImage className='left_icon'/>
                                    <span>Hình ảnh</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='container_right'>
                    <div className='right_time'>
                        <span>Thời gian</span>
                        <Select options={options} />
                    </div>
                    <div className='right_des'>
                        <span>Mô tả</span>
                        <textarea></textarea>
                    </div>
                </div>
            </div>
    </div>
  )
}
