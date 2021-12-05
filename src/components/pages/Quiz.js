import React, {useEffect, useState} from 'react';
import {getQuestions} from "../../reducer";
import {useStateValue} from "../../context/Context";
import img from "../../img/flat-people-asking-questions-illustration_23-2148910627.jpeg";
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import Question from "../quiz/Question";

const Quiz = () => {
    const [{category, difficulty,questions},action] = useStateValue();
    const [options,setOptions] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);

    const setMixedOptions = (answers) => {
        let len = answers.length;
        let random,temp;
        while (len){
            random = Math.floor(Math.random() * len--) | 0;
            temp = answers[len];
            answers[len] = answers[random];
            answers[random] = temp;
        }
        setOptions(answers);
    };

    useEffect(() =>{
        let cancel = false;
        getQuestions(category,difficulty)
            .then(results =>{
                if(cancel) return;
                action({
                    type: "SET_QUESTIONS",
                    payload: results
                })
            })
            .catch(err => console.error(err));
        return () => {
            cancel = true;
        }
    },[]);

    useEffect(()=>{
        console.log(questions[currentQuestion]?.incorrect_answers);
        /*setMixedOptions([questions[currentQuestion]?.correct_answer,...(questions[currentQuestion]?.incorrect_answers)]);
         */
    },[currentQuestion, questions])

    return (
        <div className="quiz-container">
            <Link to="/">
                <img className="ill-img" src={img} alt=""/>
            </Link>
            {
                questions[currentQuestion] ? (
                    <div className="quiz-question">
                        <Question options={options} current={questions[currentQuestion]} setCurrentQuestion={setCurrentQuestion}/>
                    </div>
                ) : <CircularProgress color="inherit" size={100}/>
            }
        </div>
    );
}

export default Quiz;