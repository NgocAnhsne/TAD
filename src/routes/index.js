import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';

import Profile from '../pages/Profile/index.js';
import Upload from '../pages/Upload/index.js';

//layout

import SidebarTeacher from '~/components/Layout/SidebarTeacher';

import CreateTestTeacher from '~/pages/Teacher/CreateTestTeacher/index.js';
import AnswerStudent from '~/pages/Student/Answer/index.js';


import Game from '~/pages/Student/Game/index.js';
import ListTestTeacher from '~/pages/Teacher/ListTestTeacher/index.js';
import QuestionTextTeacher from '~/pages/Teacher/CreateQuestion/QuestionText/index.js';
import QuestionListenTeacher from '~/pages/Teacher/CreateQuestion/QuestionListen/index.js';
import QuestionImgTeacher from '~/pages/Teacher/CreateQuestion/QuestionImg/index.js';
import ProfileTeacher from '~/pages/Teacher/ProfileTeacher/index.js';
import AdminUser from '~/pages/Admin/User/User.js';
import { SidebarAdmin } from '~/components/Layout/index.js';
import EditUser from '~/pages/Admin/User/EditUser.js';
import AddUser from '~/pages/Admin/User/AddUser.js';
import AdminHome from '~/pages/Admin/Dashboard/index.js';
import AdminQuestions from '~/pages/Admin/Questions/Question.js';
import EditProfileTeacher from '~/pages/Teacher/ProfileTeacher/EditProfileTeacher.js';
import AddQuestionAdmin from '~/pages/Admin/Questions/AddQuestion.js';






const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login, layout: null},
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload},
    {path: '/answerstudent', component: AnswerStudent},
    {path: '/game', component: Game, layout: null},
    


    {path: '/teacher', component: CreateTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/list', component: ListTestTeacher, layout: SidebarTeacher },

    {path: '/teacher/profile', component: ProfileTeacher, layout: SidebarTeacher },
    {path: '/teacher/profile/edit', component: EditProfileTeacher, layout: SidebarTeacher },

    {path: '/teacher/questiontext', component: QuestionTextTeacher, layout: SidebarTeacher },
    {path: '/teacher/questiontext/:id', component: QuestionTextTeacher, layout: SidebarTeacher },

    {path: '/teacher/questionlisten', component: QuestionListenTeacher, layout: SidebarTeacher },
    {path: '/teacher/questionlisten/:id', component: QuestionListenTeacher, layout: SidebarTeacher },
    
    {path: '/teacher/questionimg', component: QuestionImgTeacher, layout: SidebarTeacher },
    {path: '/teacher/questionimg/:id', component: QuestionImgTeacher, layout: SidebarTeacher },


    {path: '/admin', component: AdminHome, layout: SidebarAdmin },  

    {path: '/admin/users', component: AdminUser, layout: SidebarAdmin },  
    {path: '/admin/users/add', component: AddUser, layout: SidebarAdmin }, 
    {path: '/admin/users/edit/:id', component: EditUser, layout: SidebarAdmin }, 

    {path: '/admin/question', component: AdminQuestions, layout: SidebarAdmin },  
    {path: '/admin/question/add', component: AddQuestionAdmin, layout: SidebarAdmin },  

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }