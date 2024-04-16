import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './style.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function AddQuestionAdmin() {
    const options = [
        { value: '', label: '---Chọn đáp án---' },
        { value: 'answer a', label: 'A' },
        { value: 'answer b', label: 'B' },
        { value: 'answer c', label: 'C' },
        { value: 'answer d', label: 'D' }
    ]
    const {id}=useParams()
    const navigate = useNavigate();
    const [isVisibleLoading, setIsVisibleLoading] = useState(false)
 
    const [questionData, setquestionData] = useState({
        id_lesstion: "",
        question_text: "",
        answer_a: "",
        answer_b: "",
        answer_c: "",
        answer_d: "",
        answer: "",
    });
 
    const changequestionDataHandler = (e) => {
        setquestionData({
            ...questionData,
            [e.target.name]: e.target.value
        });
        //console.log(questionData);
 
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://127.0.0.1:8000/api/question/create", questionData);
           setIsVisibleLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(isVisibleLoading){
        return (
            navigate('/admin/question')
        )
    }
    return (

        <div className='admin'>
            <div className='header'>
                <div><h1>Thêm câu hỏi</h1></div>
                <div>
                    <Link to='/admin/question' className='header_cancel'>
                        <span>Hủy và quay lại</span>
                    </Link>
                    <Link className='header_save'  onClick={e => onSubmitChange(e)}>
                        <span>Lưu các thay đổi</span>
                    </Link>
                </div>
            </div>
            <div className="content_section">
                <div className="content_header">
                    <span>Thêm câu hỏi:</span>
                    <input placeholder='Question?' name='question_text'
                        value={questionData.question_text || ""} onChange={e => changequestionDataHandler(e)}></input>
                </div>
                <div className="content_body">
                    <div className="body_a" style={{ backgroundColor: '#B0D8E6' }}>
                        <span>A.</span>
                        <input placeholder='Answer' value={questionData.answer_a} onChange={e => changequestionDataHandler(e)}
                            name='answer_a'></input>
                    </div>
                    <div className="body_b" style={{ backgroundColor: '#EADDB5' }}>
                        <span>B.</span>
                        <input placeholder='Answer' value={questionData.answer_b} onChange={e => changequestionDataHandler(e)}
                            name='answer_b'></input>
                    </div>
                    <div className="body_c" style={{ backgroundColor: '#81ABDF' }}>
                        <span>C.</span>
                        <input placeholder='Answer' value={questionData.answer_c} onChange={e => changequestionDataHandler(e)}
                            name='answer_c'></input>
                    </div>
                    <div className="body_d" style={{ backgroundColor: '#FE8760' }}>
                        <span>D.</span>
                        <input placeholder='Answer' value={questionData.answer_d} onChange={e => changequestionDataHandler(e)}
                            name='answer_d'></input>
                    </div>
                </div>
                <div className='content_footer'>
                    <div>
                    <span>True Answer</span>
                    <select value={questionData.answer} name='answer' onChange={e => changequestionDataHandler(e)}>
                        {options.map(options => (
                            <option value={options.value} >{options.label}</option>
                        ))}
                    </select>
                    </div>
                    <div>
                    <span>Lession</span>
                    {/* <select value={questionData.id_lesstion} name='answer' onChange={e => changequestionDataHandler(e)}>
                        {options.map(options => (
                            <option value={options.value} >{options.label}</option>
                        ))}
                    </select> */}
                    <input placeholder='Nhập bài học' value={questionData.id_lesstion} onChange={e => changequestionDataHandler(e)}
                            name='id_lesstion'></input>
                    </div>
                </div>
            </div>
        </div>
    )
}
