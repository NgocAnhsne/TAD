
import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import Signup from '../pages/Signup/index.js';
import Profile from '../pages/Profile/index.js';
import Upload from '../pages/Upload/index.js';
import CreateTestTeacher from '../pages/CreateTestTeacher/index.js';
import AnswerStudent from '~/pages/AnswerStudent/index.js';

const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login },
    {path: '/signup', component: Signup },
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload},
    {path: '/answerstudent', component: AnswerStudent},




    {path: '/create', component: CreateTestTeacher, layout: null }


]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }