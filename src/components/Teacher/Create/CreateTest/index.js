import React, { useEffect, useState } from 'react'

import './style.scss'


import { BsFillQuestionCircleFill } from "react-icons/bs";
import Select from 'react-select'
import { FaRegImage } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const options = [
    { value: '', label: '---Chọn thời gian---' },
    { value: '15', label: '15p' },
    { value: '30', label: '30p' },
    { value: '45', label: '45p' }
]
const optionType = [
    { value: '', label: '---Chọn kiểu---' },
    { value: 'text', label: 'Chữ' },
    { value: 'image', label: 'Ảnh' },
    { value: 'listen', label: 'Nghe' }
]

export const CreatTest = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState()
    const user = JSON.parse(localStorage.getItem('user'));
    const [testField, setTestField] = useState({
        id_user: user.id,
        name: "",
        description: "",
        time: "",
        type: "",
    });

    const changeTestFieldHandler = (e) => {
        setTestField({
            ...testField,
            [e.target.name]: e.target.value
        });
        // console.log(testField);

    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://127.0.0.1:8000/api/test/create", testField);
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if (loading) {
        return (
            navigate(`/teacher/lession/`)
        )
    }



    return (
        <div className='teacher_component'>
            <div className='create_container' name='id' value={id}>
                <div className='container_left'>
                    <div className='left_top'>
                        <div className='top_text'>
                            <span
                            >Tên bài test (bắt buộc)</span>
                            <input name="name"
                                onChange={e => changeTestFieldHandler(e)}></input>
                        </div>
                    </div>
                    <div className='left_bottom'>
                        <span >Tạo loại câu hỏi</span>
                        <select onChange={e => changeTestFieldHandler(e)} name="type">
                            {optionType.map(options => (
                                    <option value={options.value} >{options.label}</option>
                                ))}
                        </select>
                    </div>
                </div>
                <div className='container_right'>
                    <div className='right_time'>
                        <span >Thời gian</span>
                        <select onChange={e => changeTestFieldHandler(e)} name="time">
                            {options.map(options => (
                                    <option value={options.value} >{options.label}</option>
                                ))}
                        </select>
                    </div>
                    <div className='right_des'>
                        <span >Mô tả</span>
                        <textarea onChange={e => changeTestFieldHandler(e)} name="description"></textarea>
                    </div>
                </div>
            </div>
            <div className='btn_end' onClick={e => onSubmitChange(e)}>
                <button>Tạo</button>
            </div>
        </div>
    )
}
