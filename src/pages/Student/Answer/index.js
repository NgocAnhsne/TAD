import { useState } from "react";
import "./style.scss";
import { IoIosArrowBack } from "react-icons/io";
import AnswerStudentImg from "~/components/asset/img/AnswerStudent.png";
import Quiz from "~/components/Student/Quiz/Quiz";
function AnswerStudent() {
  
  return (
    <div className="answerStudent">
      <Quiz />
    </div>
  );
}

export default AnswerStudent;