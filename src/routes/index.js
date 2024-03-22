import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import Signup from '../pages/Signup/index.js';
import Profile from '../pages/Profile/index.js';
import Upload from '../pages/Upload/index.js';

//layout

import SidebarTeacher from '~/components/Layout/SidebarTeacher';

import CreateTestTeacher from '~/pages/Teacher/CreateTestTeacher/index.js';
// student
import AnswerStudent from '~/pages/Student/Answer/index.js';
import Rank from '~/pages/Student/Rank/index.js';

const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login },
    {path: '/signup', component: Signup },
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload},
    {path: '/answerstudent', component: AnswerStudent, layout: null},
    {path: '/rank', component: Rank},


    {path: '/create', component: CreateTestTeacher, layout: SidebarTeacher }




]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }