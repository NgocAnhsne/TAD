import React, { useState } from "react";
import Header from "~/components/Layout/DefaultLayout/Header";
import "./style.scss";
import teacher_image from "~/components/asset/img/teacher_role_img-.png";
import student_image from "~/components/asset/img/student_role.png";
import { useNavigate } from "react-router-dom";

const RoleChooser = () => {
    const [userField, setUserField] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // Hàm xử lý sự kiện khi nhấn nút "Khám phá ngay" cho vai trò Giáo viên hoặc Học sinh hoặc Admin
    const handleRoleSelection = async (role) => {
        setUserField({
            ...userField,
            role: role.toString() // Chuyển giá trị sang chuỗi
        });
        onSubmitChange();
    };

    const onSubmitChange = async () => {
        setLoading(true);
        if (userField.role === '1') {
            console.log(userField)
            navigate('/teacher'); // Chuyển hướng nếu là giáo viên
        } else if (userField.role === '0') {
            console.log(userField)
            navigate('/student/profile'); // Chuyển hướng nếu là học sinh
        } else if (userField.role === '2') {
            console.log(userField)
            navigate('/admin'); // Chuyển hướng nếu là admin
        }
    }
    
    return (
        <div>
            <Header />
            <div className="roleChooser">
                <div className="roleChooser_container">
                    <div className="roleChooser_container-wrapper">
                        <div className="roleChooser_container-wrapper_banner ">
                            <img src={teacher_image} alt="Teacher"></img>
                            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-left">
                                <div className="roleChooser_container-wrapper_banner-box_title">
                                    Giáo viên
                                </div>
                                <div className="roleChooser_container-wrapper_banner-box_desc">
                                    Mở lớp học, quản lý các bài học đa dạng và các học sinh của mình
                                </div>
                                <span>
                                    <button className="roleChooser_container-wrapper_banner-box_button
                                        roleChooser_container-wrapper_banner-box_button-left"
                                        onClick={() => handleRoleSelection('1')}>
                                        Khám phá ngay
                                    </button>
                                </span>
                            </div>
                        </div>
                        <div className="roleChooser_container-wrapper_banner">
                            <div className="roleChooser_container-wrapper_banner-box roleChooser_container-wrapper_banner-right">
                                <div className="roleChooser_container-wrapper_banner-box_title">
                                    Học sinh
                                </div>
                                <div className="roleChooser_container-wrapper_banner-box_desc">
                                    Tham gia các trò chơi thú vị cùng bạn bè, khám phá bài học mới mẻ
                                </div>
                                <span>
                                    <button className="roleChooser_container-wrapper_banner-box_button
                                        roleChooser_container-wrapper_banner-box_button-right"
                                        onClick={() => handleRoleSelection('0')}>
                                        Khám phá ngay
                                    </button>
                                </span>
                            </div>
                            <img className="right_img" src={student_image} alt="Student"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RoleChooser;
