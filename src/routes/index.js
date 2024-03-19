import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import Signup from '../pages/Signup/index.js';
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


const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login, layout: null},
    {path: '/signup', component: Signup },
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload},
    {path: '/answerstudent', component: AnswerStudent},
    {path: '/game', component: Game, layout: null},
    


    {path: '/teacher/create', component: CreateTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/list', component: ListTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/profile', component: ProfileTeacher, layout: SidebarTeacher },

    {path: '/teacher/questiontext', component: QuestionTextTeacher, layout: SidebarTeacher },
    {path: '/teacher/questiontext/:id', component: QuestionTextTeacher, layout: SidebarTeacher },

    {path: '/teacher/questionlisten', component: QuestionListenTeacher, layout: SidebarTeacher },
    {path: '/teacher/questionlisten/:id', component: QuestionListenTeacher, layout: SidebarTeacher },
    
    {path: '/teacher/questionimg', component: QuestionImgTeacher, layout: SidebarTeacher },
    {path: '/teacher/questionimg/:id', component: QuestionImgTeacher, layout: SidebarTeacher },




]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }