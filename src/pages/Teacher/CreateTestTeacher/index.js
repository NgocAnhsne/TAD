

import { CreatTest } from '~/components/Teacher/Create/CreateTest';
import '../style.scss'
import { EditLession } from '~/components/Teacher/Create/CreateTest/EditLession';


function CreateTestTeacher() {

    return ( 
        <div className="teacher">
            <h1>Tạo bài kiểm tra </h1>
                <CreatTest/>
        </div>

     );
}

export default CreateTestTeacher;