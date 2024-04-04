import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './style.scss'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export default function EditQuestionAdmin() {
    const options = [
        { value: '', label: '---Chọn đáp án---' },
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
        { value: 'c', label: 'C' },
        { value: 'd', label: 'D' }
    ]
    const { id } = useParams()
    const navigate = useNavigate();
    const [loading, setLoading] = useState()


    const [questionField, setQuestionField] = useState({
        question_text: "",
        answer_a: "",
        answer_b: "",
        answer_c: "",
        answer_d: "",
        answer: "",
    });

    useEffect(() => {
        fetchUser();
    }, [id])

    const fetchUser = async () => {
        try {
            const result = await axios.get("http://127.0.0.1:8000/api/question/" + id);
            setQuestionField(result.data.data)
        } catch (err) {
            console.log("Something Wrong");
        }
    }

    const changeQuestionFieldHandler = (e) => {
        setQuestionField({
            ...questionField,
            [e.target.name]: e.target.value
        });
        //console.log(questionField);

    }

    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/question/update/" + id, questionField);
            navigate('/admin/question')
        } catch (err) {
            console.log("Something Wrong");
        }
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
                    <span>Question 1:</span>
                    <input placeholder='Question?' name='question_text'
                        value={questionField.question_text || ""} onChange={e => changeQuestionFieldHandler(e)}></input>
                </div>
                <div className="content_body">
                    <div className="body_a" style={{ backgroundColor: '#B0D8E6' }}>
                        <span>A.</span>
                        <input placeholder='Answer' value={questionField.answer_a} onChange={e => changeQuestionFieldHandler(e)}
                            name='answer_a'></input>
                    </div>
                    <div className="body_b" style={{ backgroundColor: '#EADDB5' }}>
                        <span>B.</span>
                        <input placeholder='Answer' value={questionField.answer_b} onChange={e => changeQuestionFieldHandler(e)}
                            name='answer_b'></input>
                    </div>
                    <div className="body_c" style={{ backgroundColor: '#81ABDF' }}>
                        <span>C.</span>
                        <input placeholder='Answer' value={questionField.answer_c} onChange={e => changeQuestionFieldHandler(e)}
                            name='answer_c'></input>
                    </div>
                    <div className="body_d" style={{ backgroundColor: '#FE8760' }}>
                        <span>D.</span>
                        <input placeholder='Answer' value={questionField.answer_d} onChange={e => changeQuestionFieldHandler(e)}
                            name='answer_d'></input>
                    </div>
                </div>
                <div className='content_footer'>
                    <span>True Answer</span>
                    <select value={questionField.answer} name='answer' onChange={e => changeQuestionFieldHandler(e)}>
                        {options.map(options => (
                            <option value={options.value} >{options.label}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}
