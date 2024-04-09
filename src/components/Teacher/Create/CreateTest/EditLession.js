import React, { useEffect, useState } from 'react'

import './style.scss'


import { BsFillQuestionCircleFill } from "react-icons/bs";
import Select from 'react-select'
import { FaRegImage } from "react-icons/fa";
import { HiSpeakerWave } from "react-icons/hi2";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const options = [
    { value: '15', label: '15p' },
    { value: '30', label: '30p' },
    { value: '45', label: '45p' }
]
const optionType = [
    { value: 'text', label: 'Chữ' },
    { value: 'image', label: 'Ảnh' },
    { value: 'listen', label: 'Nghe' }
]

export const EditLession = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState()


    const [lessionField, setlessionField] = useState({
        name: "",
        description: "",
        time: "",
        type: "",
    });

    useEffect(() => {
        fetchUser();
    }, [id])

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/lession/" + id);
            setlessionField(result.data.data)
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const changelessionFieldHandler = (e) => {
        setlessionField({
            ...lessionField,
            [e.target.name]: e.target.value
        });
        //console.log(lessionField);

    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/lession/update/" + id, lessionField);
            navigate('/admin/users')
        } catch (err) {
            console.log("Something Wrong");
        }
    }



    return (
        <div className='teacher_component'>
            <div className='create_container' name='id' value={id}>
                <div className='container_left'>
                    <div className='left_top'>
                        <div className='top_text'>
                            <span
                            >Tên bài test (bắt buộc)</span>
                            <input name="name" required
                                value={lessionField.name}
                                onChange={e => changelessionFieldHandler(e)}
                            ></input>
                        </div>
                    </div>
                    <div className='left_bottom'>
                        <span >Tạo loại câu hỏi</span>
                        <select name="type">
                            {optionType.map(options => (
                                <option value={options.value} >{options.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='container_right'>
                    <div className='right_time'>
                        <span >Thời gian</span>
                        <select name="time">
                            {options.map(options => (
                                <option value={options.value} >{options.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className='right_des'>
                        <span >Mô tả</span>
                        <textarea name="description" value={lessionField.description}
                                onChange={e => changelessionFieldHandler(e)}></textarea>
                    </div>
                </div>
            </div>
            <div className='btn_end' onClick={e => onSubmitChange(e)}>
                <button>Lưu các thay đổi</button>
            </div>
        </div>
    )
}
