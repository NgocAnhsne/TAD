import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import Signup from '../pages/Signup/index.js';
import Profile from '../pages/Profile/index.js';
import Upload from '../pages/Upload/index.js';

//layout

import SidebarTeacher from '~/components/Layout/DefaultLayout/Sidebar/SidebarTeacher/index.js';

import CreateTestTeacher from '~/pages/Teacher/CreateTestTeacher/index.js';
import AnswerStudent from '~/pages/Student/Answer/index.js';

const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login },
    {path: '/signup', component: Signup },
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload},
    {path: '/answerstudent', component: AnswerStudent},




    {path: '/create', component: CreateTestTeacher, layout: SidebarTeacher }


]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }