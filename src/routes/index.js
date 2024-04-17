import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import privateRoutes from './privateRoutes.js';


import rolechooser from '../pages/RoleChooser/rolechoosen.js';

import Upload from '../pages/Upload/index.js';

//layout

import SidebarTeacher from '~/components/Layout/SidebarTeacher';

import CreateTestTeacher from '~/pages/Teacher/CreateTestTeacher/index.js';
// student
import AnswerStudent from '~/pages/Student/Answer/index.js';
import Rank from '~/pages/Student/Rank/index.js';
import HistoryStudent from '~/pages/Student/History/index.js';
import SuccessStudent from '~/pages/Student/Success/index.js';
import ProfileStudent from '~/pages/Student/Profile/index.js';
import LessonStudent from '~/pages/Student/Lesson/index.js';


import Game from '~/pages/Student/Game/LatBike.js';
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
import EditQuestionAdmin from '~/pages/Admin/Questions/EditQuestion.js';
import NotFound from '~/components/Layout/NotFound.js';
import EditLessionTeacher from '~/pages/Teacher/EditLession/index.js';
import AdminGame from '~/pages/Admin/Game/Game.js';
import EditGame from '~/pages/Admin/Game/EditGame.js';
import AdminLession from '~/pages/Admin/Lession/Lession.js';
import EditLession from '~/pages/Admin/Lession/EditLession.js';
import AddLessionAdmin from '~/pages/Admin/Lession/AddLession.js';
import ViewQuestion from '~/pages/Admin/Lession/ViewLession.js';
import ViewQuestionTextTeacher from '~/pages/Teacher/CreateQuestion/QuestionText/ViewQuestion.js';
import game_chooser from '~/pages/gameChooser/game_chooser.js';

import TopicGameAdmin from '~/pages/Admin/Game/TopicGame/TopicGame.js';
import EditTopicAdmin from '~/pages/Admin/Game/TopicGame/EditTopic.js';
import AddGameAdmin from '~/pages/Admin/Game/AddGame.js';
import AddTopicAdmin from '~/pages/Admin/Game/TopicGame/AddTopic.js';
import WordlTopicAdmin from '~/pages/Admin/Game/TopicGame/WordlTopic/WordlTopic.js';
import EditWordlTopicAdmin from '~/pages/Admin/Game/TopicGame/WordlTopic/EditWordlTopic.js';
import AddWordlTopicAdmin from '~/pages/Admin/Game/TopicGame/WordlTopic/AddWordTopic.js';


import topic_chooser from '~/pages/gameChooser/topicChooser.js';



const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login, layout: null},
    {path: '/upload', component: Upload},

    //student
    {path: '/student/answer', component: AnswerStudent, layout: null},
    {path: '/student/rank', component: Rank},
    {path: '/student/history', component: HistoryStudent},
    {path: '/student/success', component: SuccessStudent, layout: null},
    {path: '/student/profile', component: ProfileStudent },
    {path: '/student/lesson', component: LessonStudent },
    {path:'/student/game',component:game_chooser},
    {path:'/student/game/topic/:id',component:topic_chooser},

//role
    {path: '/rolechooser', component: rolechooser, layout: null},


    {path: '/game', component: Game, layout: null},
    

//teacher
    {path: '/teacher', component: CreateTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/lession', component: ListTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/lession/edit/:id', component: EditLessionTeacher, layout: SidebarTeacher },

    {path: '/teacher/profile/', component: ProfileTeacher, layout: SidebarTeacher },
    {path: '/teacher/profile/edit/:id', component: EditProfileTeacher, layout: SidebarTeacher },

    {path: '/teacher/questiontext', component: QuestionTextTeacher, layout: SidebarTeacher },
    {path: '/teacher/questiontext/view/:id', component: ViewQuestionTextTeacher, layout: SidebarTeacher },


    {path: '/teacher/questionlisten', component: QuestionListenTeacher, layout: SidebarTeacher },
    {path: '/teacher/questionlisten/:id', component: QuestionListenTeacher, layout: SidebarTeacher },
    
    {path: '/teacher/questionimg', component: QuestionImgTeacher, layout: SidebarTeacher },
    {path: '/teacher/questionimg/:id', component: QuestionImgTeacher, layout: SidebarTeacher },
  
//admin
    {path: '/admin', component: AdminHome, layout: SidebarAdmin },  

    {path: '/admin/users', component: AdminUser, layout: SidebarAdmin },  
    {path: '/admin/users/add', component: AddUser, layout: SidebarAdmin }, 
    {path: '/admin/users/edit/:id', component: EditUser, layout: SidebarAdmin }, 

    {path: '/admin/question', component: AdminQuestions, layout: SidebarAdmin },  
    {path: '/admin/question/add', component: AddQuestionAdmin, layout: SidebarAdmin },  
    {path: '/admin/question/edit/:id', component: EditQuestionAdmin, layout: SidebarAdmin },  
    
    {path: '/admin/game', component: AdminGame, layout: SidebarAdmin }, 
    {path: '/admin/game/edit/:id', component: EditGame, layout: SidebarAdmin },   
    {path: '/admin/game/add', component: AddGameAdmin, layout: SidebarAdmin },   

    {path: '/admin/topic/:id', component: TopicGameAdmin, layout: SidebarAdmin },   
    {path: '/admin/topic/edit/:id', component: EditTopicAdmin, layout: SidebarAdmin },   
    {path: '/admin/topic/add', component: AddTopicAdmin, layout: SidebarAdmin }, 
    
    
    {path: '/admin/topic/wordl/:id', component: WordlTopicAdmin, layout: SidebarAdmin },
    {path: '/admin/topic/wordl/edit/:id', component: EditWordlTopicAdmin, layout: SidebarAdmin },
    {path: '/admin/topic/wordl/:id', component: WordlTopicAdmin, layout: SidebarAdmin },
    {path: '/admin/topic/wordl/add/', component: AddWordlTopicAdmin, layout: SidebarAdmin },

    {path: '/admin/lession', component: AdminLession, layout: SidebarAdmin },   
    {path: '/admin/lession/add', component: AddLessionAdmin, layout: SidebarAdmin },   
    {path: '/admin/lession/view/:id', component: ViewQuestion, layout: SidebarAdmin },   
    {path: '/admin/lession/edit/:id', component: EditLession, layout: SidebarAdmin },   
    
    {path: '/*', component: NotFound,layout: null },  

]


export { publicRoutes }