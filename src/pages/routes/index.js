import Home from '../Home/index.js';
import Login from '../../pages/Login/index.js';
import Signup from '../../pages/Signup/index.js';
import Profile from '../../pages/Profile/index.js';
import Upload from '../../pages/Upload/index.js';
import CreateTestTeacher from '../CreateTestTeacher/index.js';

const publicRoutes = [
    {path: '/', component: Home },
    {path: '/login', component: Login },
    {path: '/signup', component: Signup },
    {path: '/profile', component: Profile },
    {path: '/upload', component: Upload, layout: null },




    {path: '/create', component: CreateTestTeacher, layout: null }

]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }