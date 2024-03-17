import { useEffect } from 'react';
import '../style.scss'
import caydua from '~/components/asset/img/CayDua.jpg'

import ListTest from '~/components/Teacher/List';
function ListTestTeacher() {
    useEffect(() => {
        document.title = "Giới thiệu";
      }, []);
    return (
        <div className="teacher">
            <h1>Danh sách bộ đề</h1>
            <img src={caydua}></img>
            <ListTest/>
        </div>
    );
}

export default ListTestTeacher;