import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import Signup from '../pages/Signup/index.js';
import Profile from '../pages/Profile/index.js';
import Upload from '../pages/Upload/index.js';

//layout

import SidebarTeacher from '~/components/Layout/SidebarTeacher';

import CreateTestTeacher from '~/pages/Teacher/CreateTestTeacher/index.js';
import AnswerStudent from '~/pages/Student/Answer/index.js';

import ListTest from '~/pages/Teacher/ListTest/index.js';
import QuestionListen from '~/pages/Teacher/CreateQuestion/QuestionListen/index.js';
import QuestionImg from '~/pages/Teacher/CreateQuestion/QuestionImg/index.js';
import QuestionText from '~/pages/Teacher/CreateQuestion/QuestionText/index.js';

const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login },
    {path: '/signup', component: Signup },
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload},
    {path: '/answerstudent', component: AnswerStudent},


    {path: '/teacher/create', component: CreateTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/list', component: ListTest, layout: SidebarTeacher },

    {path: '/teacher/questiontext', component: QuestionText, layout: SidebarTeacher },
    {path: '/teacher/questiontext:id', component: QuestionText, layout: SidebarTeacher },

    {path: '/teacher/questionlisten', component: QuestionListen, layout: SidebarTeacher },
    {path: '/teacher/questionlisten:id', component: QuestionListen, layout: SidebarTeacher },
    
    {path: '/teacher/questionimg', component: QuestionImg, layout: SidebarTeacher },
    {path: '/teacher/questionimg:id', component: QuestionImg, layout: SidebarTeacher },




]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }