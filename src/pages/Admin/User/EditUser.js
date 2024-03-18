import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    const [validated, setValidated] = useState(false);
    const initialState = {
        id: 0,
        fullName: "",
        urlSlug: "",
        email: "",
        password: "",
        roleId: "",
      },
      [user, setUser] = useState(initialState),
      [filter, setFilter] = useState({roleList: []});
  
    const navigate = useNavigate();
  
    let { id } = useParams();
    id = id ?? 0;
  
    // useEffect(() => {
    //   document.title = "Thêm/cập nhật user";
  
    //   getUserById(id).then((data) => {
    //     if (data) {
    //       console.log("data: ", data);
    //       setUser(data);
    //     } else {
    //       setUser(initialState);
    //     }
    //   });
  
    //   getUserFilter().then((data) => {
    //     if (data) {
    //       setFilter({
    //         roleList: data.roleList
    //       });
    //     }
    //     else{
    //       setFilter({roleList: []});
    //     }
    //   })
    // }, []);
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (e.currentTarget.checkValidity() === false) {
    //     e.stopPropagation();
    //     setValidated(true);
    //   } else {
    //     let data = new FormData(e.target);
        
    //     updateUser(id, data).then((data) => {
    //       if (data) {
    //         alert("Đã lưu thành công");
    //         navigate(`/admin/users`)
    //       } else {
    //         alert("Xảy ra lỗi khi lưu");
    //       }
    //     });
    //   }
    // };
    

  return (
    <div className='Admin'>
        <div className='header'>
                <div><h1>Thêm/cập nhật người dùng</h1></div>
                <div>
                <Link to='/admin/users' className='header_cancel'>
                    <span>Hủy và quay lại</span>
                </Link>
                <Link className='header_save'>
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
            <Form.Control type="hidden" name="id" value={user.id} />
            <div className="row mb-3">
              <Form.Label className="col-sm-2 col-form-label">Tên người dùng</Form.Label>
              <div className="col-sm-10">
                <Form.Control
                  type="text"
                  name="fullName"
                  title="Full Name"
                  required
                //   value={user.fullName || ""}
                //   onChange={(e) =>
                //     setUser({ ...user, fullName: e.target.value })
                //   }
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
                //   value={user.email || ""}
                //   onChange={(e) =>
                //     setUser({ ...user, email: e.target.value })
                //   }
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
                  type="text"
                  name="password"
                  title="Password"
                  required
                //   value={user.password || ""}
                //   onChange={(e) =>
                //     setUser({ ...user, password: e.target.value })
                //   }
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
                  name="roleId"
                  title="role Id"
                //   value={user.roleId}
                  required
                //   onChange={(e) =>
                //     setUser({
                //       ...user,
                //       roleId: e.target.value,
                //     })
                //   }
                >
                  <option value="">-- Vai trò--</option>
                  {/* {filter.roleList.length > 0 &&
                    filter.roleList.map((item, index) => (
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
