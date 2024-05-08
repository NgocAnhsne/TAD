import Home from '../pages/Home/index.js';
import Login from '../pages/Login/index.js';
import privateRoutes from './privateRoutes.js';


import rolechooser from '../pages/RoleChooser/rolechoosen.js';

import Upload from '../pages/Upload/index.js';

//layout
import SidebarTeacher from '~/components/Layout/SidebarTeacher';
import CreateTestTeacher from '~/pages/Teacher/CreateTestTeacher/index.js';
import { SidebarAdmin } from '~/components/Layout/index.js';


// student
import AnswerStudent from '~/pages/Student/Answer/index.js';
import Rank from '~/pages/Student/Rank/index.js';
import HistoryStudent from '~/pages/Student/History/index.js';
import SuccessStudent from '~/pages/Student/Success/index.js';
import ProfileStudent from '~/pages/Student/Profile/index.js';
import LessonStudent from '~/pages/Student/Lesson/index.js';

import Quiz from '~/components/Student/Quiz/Quiz.jsx';
import QuizTest from '~/components/Student/QuizTest/index.js';


import Game from '~/pages/Student/Game/LatBike.js';
import ListTestTeacher from '~/pages/Teacher/ListTestTeacher/index.js';
import QuestionListenTeacher from '~/pages/Teacher/CreateQuestion/QuestionListen/index.js';
import QuestionImgTeacher from '~/pages/Teacher/CreateQuestion/QuestionImg/index.js';
import ProfileTeacher from '~/pages/Teacher/ProfileTeacher/index.js';
import AdminUser from '~/pages/Admin/User/User.js';
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
import game_chooser from '~/pages/Student/gameChooser/game_chooser.js';

import TopicGameAdmin from '~/pages/Admin/Game/TopicGame/TopicGame.js';
import EditTopicAdmin from '~/pages/Admin/Game/TopicGame/EditTopic.js';
import AddGameAdmin from '~/pages/Admin/Game/AddGame.js';
import AddTopicAdmin from '~/pages/Admin/Game/TopicGame/AddTopic.js';
import WordlTopicAdmin from '~/pages/Admin/Game/TopicGame/WordlTopic/WordlTopic.js';
import EditWordlTopicAdmin from '~/pages/Admin/Game/TopicGame/WordlTopic/EditWordlTopic.js';
import AddWordlTopicAdmin from '~/pages/Admin/Game/TopicGame/WordlTopic/AddWordTopic.js';
import topic_chooser from '~/pages/Student/Game/topicChooser.js';
import GuessWord from '~/pages/Student/Game/GuessWordsGame/GuessWord.js';
import PetBag from '~/pages/Student/Pet/Bag/index.js';
// import topic_chooser from '~/pages/Student/gameChooser/topicChooser.js';
import HistoryTestTeacher from '~/pages/Teacher/HistoryTestTeacher/index.js';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditProfileStudent from '~/pages/Student/Profile/editProfile.js';
import Test from '~/pages/Student/Test/index.js';
import HistoryTestStudent from '~/pages/Student/History/historyTest.js';
import WordsMystery from '~/pages/Student/Game/WordsMystery/wordsmystery.js';
import PikachuGame from '~/pages/Student/Game/PikachuGame/index.js';
import Shop from '~/pages/Student/Pet/Shop/index.js';
import AdminShop from '~/pages/Admin/Shop/Shop.js';
import AddShopAdmin from '~/pages/Admin/Shop/AddShop.js';
import EditShop from '~/pages/Admin/Shop/EditShop.js';



const publicRoutes = [
    {path: '/', component: Home, layout: null},
    {path: '/login', component: Login, layout: null},
    {path: '/upload', component: Upload},

    //student
    {path: '/student/lesson/:id', component: AnswerStudent, layout: null},
    {path: '/student/rank', component: Rank},
    {path: '/student/bag', component: PetBag},
    {path: '/student/quiz', component: Quiz},
    {path: '/student/success', component: SuccessStudent, layout: null},
    {path: '/student/profile', component: ProfileStudent },
    {path: '/student/profile/edit/:id', component: EditProfileStudent },
    {path: '/student/lesson', component: LessonStudent },
    //test
    {path:'/student/test',component:Test},
    {path:'/student/quiztest',component:QuizTest, layout: null},
    {path: '/student/test/:id', component: QuizTest, layout: null},

    //pet
    {path:'/student/shop',component:Shop},

    // Xem lịch sử:
    {path: '/student/lesson', component: History },
    {path: '/student/history/', component: HistoryStudent},
    {path: '/student/historytest/', component: HistoryTestStudent},

    {path:'/student/game',component:game_chooser},
    
    // {path:'/student/GuessWordGame',component:GuessWord},
    {path: '/student/game/1/topic/:id', component: Game, layout: null},
    {path: '/student/game/4/topic/:id', component: GuessWord},
    {path:'/student/game/:id/topic/',component:topic_chooser},

    //game mystery
    {path:'/student/game/mystery',component:WordsMystery},
    {path:'/student/game/pikachu',component:PikachuGame},


    //role
    {path: '/rolechooser', component: rolechooser, layout: null},

    //teacher
    {path: '/teacher', component: CreateTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/test', component: ListTestTeacher, layout: SidebarTeacher },
    {path: '/teacher/test/edit/:id', component: EditLessionTeacher, layout: SidebarTeacher },
    {path: '/teacher/test/history/:id', component: HistoryTestTeacher, layout: SidebarTeacher },

    {path: '/teacher/profile/', component: ProfileTeacher, layout: SidebarTeacher },
    {path: '/teacher/profile/edit/:id', component: EditProfileTeacher, layout: SidebarTeacher },

    {path: '/teacher/questiontext/view/:id', component: ViewQuestionTextTeacher, layout: SidebarTeacher },


    // {path: '/teacher/questionlisten', component: QuestionListenTeacher, layout: SidebarTeacher },
    // {path: '/teacher/questionlisten/:id', component: QuestionListenTeacher, layout: SidebarTeacher },
    // {path: '/teacher/questionimg', component: QuestionImgTeacher, layout: SidebarTeacher },
    // {path: '/teacher/questionimg/:id', component: QuestionImgTeacher, layout: SidebarTeacher },
  
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
    {path: '/admin/topic/wordl/add/:id', component: AddWordlTopicAdmin, layout: SidebarAdmin },
    {path: '/admin/lession', component: AdminLession, layout: SidebarAdmin },   
    {path: '/admin/lession/add', component: AddLessionAdmin, layout: SidebarAdmin },   
    {path: '/admin/lession/view/:id', component: ViewQuestion, layout: SidebarAdmin },   
    {path: '/admin/lession/edit/:id', component: EditLession, layout: SidebarAdmin },  

    {path: '/admin/shop', component: AdminShop, layout: SidebarAdmin },   
    {path: '/admin/shop/add', component: AddShopAdmin, layout: SidebarAdmin },   
    {path: '/admin/shop/edit/:id', component: EditShop, layout: SidebarAdmin },  
    
    {path: '/*', component: NotFound,layout: null },  

]


export { publicRoutes }