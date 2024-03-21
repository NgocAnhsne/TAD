import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdminUser from './User';

export default function EditUser() {

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
            navigate('/admin/users')
        } catch (err) {
            console.log("Something Wrong");
        }
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
                  value={userField.name}
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
                  value={userField.email}
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
                  value={userField.password} 
                  onChange={e => changeUserFieldHandler(e)}
                />
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống
                </Form.Control.Feedback>
              </div>
            </div>
            <div className="row mb-3">
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
                  <option value="2">-- Admin--</option>
                  <option value="0">-- Student--</option>
                  <option value="1">-- Teacher--</option>

                  {/* {userField.role.length > 0 &&
                    userField.role.map((item, index) => (
                      <option key={index} value={item.value}>
                        {item.text}
                      </option>
                    ))} */}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Không được bỏ trống.
                </Form.Control.Feedback>
              </div>
            </div>
          </Form>
    </div>
  )
}
