import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function AddTopicAdmin() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
 
    const [topicField, setTopicField] = useState({
        name: "",
        description: "",
    });
 
    const changetopicFieldHandler = (e) => {
        setTopicField({
            ...topicField,
            [e.target.name]: e.target.value
        });
        //console.log(topicField);
 
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
           await axios.post("http://127.0.0.1:8000/api/wordle/create", topicField);
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return (
            navigate(`/admin/topic/${topicField.id}`)
        )
    }

  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Cập nhật trò chơi</h1></div>
                <div>
                <Link to={`/admin/topic/${topicField.id}`} className='header_cancel'>
                    <span>Hủy và quay lại</span>
                </Link>
                <Link className='header_save' onClick={e => onSubmitChange(e)}>
                    <span>Lưu các thay đổi</span>
                </Link>
                </div>
            </div>
            <Form
            method="post"
            encType=""
            noValidate
          >
            <Form.Control type="hidden" name="id" value={id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên trò chơi</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="name"
                  required
                  value={topicField.name}
                  onChange={e => changetopicFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Mô tả
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="description"
                  required
                  value={topicField.description}
                  onChange={e => changetopicFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>
          </Form>
    </div>
  )
}
