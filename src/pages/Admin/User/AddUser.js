import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdminUser from './User';

export default function AddUser() {

    const {id}=useParams()
    const navigate = useNavigate();
    const [loading,setLoading]=useState()
    const [validated, setValidated] = useState(false);
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });
 
    const changeUserFieldHandler = (e) => {
        setUserField({
            ...userField,
            [e.target.name]: e.target.value
        });
        //console.log(userField);
 
    }
    
    const onSubmitChange = async (e) => {
        e.preventDefault();
        setValidated(true);
        try {
           await axios.post("http://127.0.0.1:8000/api/register", userField);
            setLoading(true);
        } catch (err) {
            console.log("Something Wrong");
        }
    }
    if(loading){
        return (
            navigate('/admin/users')
        )
    }


  return (
    <div className='admin'>
        <div className='header'>
                <div><h1>Thêm/cập nhật người dùng</h1></div>
                <div>
                <Link to='/admin/users' className='header_cancel'>
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
              <Form.Label className="col-sm-2 col-form-label">Tên người dùng</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="name"
                  title="name"
                  required
                  onChange={e => changeUserFieldHandler(e)} 
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Email
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="email"
                  title="Email"
                  required
                  onChange={e => changeUserFieldHandler(e)} 
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>

            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Password
              </Form.Label>
              <div className="col-sm-10">
                <Form.Control
                 id="password"
                  type="text"
                  name="password"
                  title="Password"
                  required
                  onChange={e => changeUserFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>
            {/* <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">
                Vai trò
              </Form.Label>
              <div className="col-sm-10">
                <Form.Select
                  name="role"
                  title="role"
                  value={userField.role}
                  required
                  onChange={e => changeUserFieldHandler(e)}
                >
                  <option value="">-- Vai trò--</option>
                  <option value="0">-- Admin--</option>
                  <option value="1">-- Student--</option>
                  <option value="2">-- Teacher--</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div> */}
          </Form>
    </div>
  )
}
