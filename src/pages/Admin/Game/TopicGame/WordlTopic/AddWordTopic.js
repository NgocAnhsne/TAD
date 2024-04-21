import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'


export default function AddWordlTopicAdmin() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    const [topicData,setTopicData]=useState()
    const [validated, setValidated] = useState(false);
    const [topicField, setTopicField] = useState({
      id_wordle: id,
      english: "",
      vietnamese: "",
      type: "",
      pronounce: "",
      description: "",
    });
    const goBack = () => {
      navigate(-1)
    };
    const changetopicFieldHandler = (e) => {
        setTopicField({
            ...topicField,
            [e.target.name]: e.target.value
        });
        //console.log(topicField);
 
    }
    useEffect(()=>{
      fetchUser();
  },[id])
  
  const fetchUser=async()=>{
      try{
          const result=await axios.get("http://127.0.0.1:8000/api/wordl/"+id);
          setTopicData(result.data.data)
          console.log(result.data.data)
      }catch(err){
          console.log("Something Wrong");
      }
  }
    const onSubmitChange = async (e) => {
        e.preventDefault();
        setValidated(true)
        try {
           await axios.post("http://127.0.0.1:8000/api/wordl/create", topicField);
            setLoading(true);
            
            navigate(-1)
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    
    

  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Cập nhật trò chơi</h1></div>
                <div>
                <Link onClick={goBack} className='header_cancel'>
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
            validated={validated}
          >
            <Form.Control type="hidden" name="id" value={id} />
          
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
