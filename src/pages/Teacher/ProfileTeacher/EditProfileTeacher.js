import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditProfileStudent() {

  const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    
 
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });
    useEffect(()=>{
        fetchUser();
    },[id])
    
    const fetchUser=async()=>{
        try{
            const result=await axios.get("http://127.0.0.1:8000/api/user/"+id);
            setUserField(result.data.data)
        }catch(err){
            console.log("Something Wrong");
        }
    }
    
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
 
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        try {
            await axios.put("http://127.0.0.1:8000/api/user/update/"+id, userField);
            navigate(`/teacher/profile/${userField.id}`)
        } catch (err) {
            console.log("Something Wrong");
        }
    }



  return (
    <div className='teacher'>
      <div className='header'>
                <div><h1>Sửa thông tin giáo viên</h1></div>
                <div>
                <Link to={`/teacher/profile/`} className='header_cancel'>
                    <span>Hủy và quay lại</span>
                </Link>
                <Link className='header_save' onClick={e => onSubmitChange(e)} onSubmitChange={e => onSubmitChange(e)}>
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
              <Form.Label className="col-sm-2 col-form-label form_color">Tên người dùng</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="name"
                  required
                  value={userField.name}
                  onChange={e => changeUserFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label form_color">
                Email
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="email"
                  title="Email"
                  required
                  value={userField.email}
                  onChange={e => changeUserFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label form_color">
                 Thay đổi mật khẩu
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                 id="password"
                  type="text"
                  name="password"
                  title="Password"
                  required
                  value={userField.password} 
                  onChange={e => changeUserFieldHandler(e)}
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
