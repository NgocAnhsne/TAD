import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function EditWordlTopicAdmin() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    
 
    const [topicField, setTopicField] = useState({
        id_wordle: "",
        english: "",
        vietnamese: "",
        type: "",
        pronounce: "",
        description: "",
    });
 
    useEffect(()=>{
        fetchUser();
    },[id])
    
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/wordl/"+id);
            setTopicField(result.data.data)
            console.log(result.data.data)
        }catch(err){
            console.log("Something Wrong");
        }
    }
    
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
            await axios.put("http://127.0.0.1:8000/api/wordl/update/"+id, topicField);
            navigate(`/admin/topic/wordl/${topicField.id}`)
        } catch (err) {
            console.log("Something Wrong");
        }
    }


  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Cập nhập/sửa đáp án</h1></div>
                <div>
                <Link to={`/admin/topic/wordl/${topicField.id}`}className='header_cancel'>
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
              <Form.Label className="col-sm-2 col-form-label">Tên Topic</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="id_wordle"
                  title="name"
                  required
                  value={topicField.id_wordle}
                  onChange={e => changetopicFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên tiếng anh</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="english"
                  title="name"
                  required
                  value={topicField.english}
                  onChange={e => changetopicFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên tiếng việt</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="vietnamese"
                  title="name"
                  required
                  value={topicField.vietnamese}
                  onChange={e => changetopicFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Loại từ</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="type"
                  title="type"
                  required
                  value={topicField.type}
                  onChange={e => changetopicFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Phát âm</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="pronounce"
                  title="name"
                  required
                  value={topicField.pronounce}
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
