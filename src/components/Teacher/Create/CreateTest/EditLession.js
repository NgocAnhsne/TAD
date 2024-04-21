import React, { useEffect, useState } from 'react'

import './style.scss'
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


    const [testField, setTestField] = useState({
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
            const result = await axios.get("http://127.0.0.1:8000/api/test/" + id);
            setTestField(result.data.data)
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const changeTestFieldHandler = (e) => {
        setTestField({
            ...testField,
            [e.target.name]: e.target.value
        });
        //console.log(testField);

    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/test/update/" + id, testField);
            navigate('/teacher/test')
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
                                value={testField.name}
                                onChange={e => changeTestFieldHandler(e)}
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
                        <textarea name="description" value={testField.description}
                                onChange={e => changeTestFieldHandler(e)}></textarea>
                    </div>
                </div>
            </div>
            <div className='btn_end' onClick={e => onSubmitChange(e)}>
                <button>Lưu các thay đổi</button>
            </div>
        </div>
    )
}
