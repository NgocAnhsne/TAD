import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../style.scss'

import axios from 'axios';

export default function CreatQuestionText() {
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
      setLoading(true);
    } catch (err) {
      console.log("Something Wrong");
    }
  }
  if (loading) {
    return (
      navigate('/teacher/lession')
    )
  }
  return (
    <div className='teacher_component'>
      <div className="question_header">
        <div><h1>Tạo câu hỏi</h1></div>
        <div className='header_right'>
          <Link className='header_save' onClick={e => onSubmitChange(e)}>
            <span className='question_back'>Lưu các thay đổi</span>
          </Link>
        </div>
      </div>
      <div className="question_content">
          <div className="content_section" name="id" value={questionData.id}>
            <div className="content_header">
              <span>Question 1</span>
              <input placeholder='Question?'
              name='question_text'
              value={questionData.question_text} 
              onChange={e => changequestionDataHandler(e)}
              ></input>
            </div>
            <div className="content_body">
              <div className="body_a" style={{ backgroundColor: '#B0D8E6' }}>
                <span>A.</span>
                <input placeholder='Answer'
                  value={questionData.answer_a}
                  onChange={e => changequestionDataHandler(e)}
                  name='answer_a'
                ></input>
              </div>
              <div className="body_b" style={{ backgroundColor: '#EADDB5' }}>
                <span>B.</span>
                <input placeholder='Answer'
                  value={questionData.answer_b}
                  onChange={e => changequestionDataHandler(e)}
                  name='answer_b'
                ></input>
              </div>
              <div className="body_c" style={{ backgroundColor: '#81ABDF' }}>
                <span>C.</span>
                <input placeholder='Answer'
                  value={questionData.answer_c}
                  onChange={e => changequestionDataHandler(e)}
                  name='answer_c'
                ></input>
              </div>
              <div className="body_d" style={{ backgroundColor: '#FE8760' }}>
                <span>D.</span>
                <input placeholder='Answer'
                  value={questionData.answer_d}
                  name='answer_d'
                  onChange={e => changequestionDataHandler(e)}
                ></input>
              </div>
            </div>
            <div className='content_footer'>
              <div>
                <span>True Answer</span>
                <select value={questionData.answer} onChange={e => changequestionDataHandler(e)} name="answer">
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
    </div>
  )
}
