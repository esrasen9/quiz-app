import React, {useEffect, useState} from 'react';
import {getQuestions} from "../../reducer";
import {useStateValue} from "../../context/Context";
import img from "../../img/flat-people-asking-questions-illustration_23-2148910627.jpeg";
import {Link} from "react-router-dom";
import {CircularProgress} from "@mui/material";
import Question from "../quiz/Question";

const Quiz = () => {
    const [{category, difficulty, questions, isLoaded}, action] = useStateValue();
    const [options, setOptions] = useState([]);
    const [current, setCurrent] = useState(0);
    const setMixedOptions = (answers) => {
        let len = answers.length;
        let random, temp;
        while (len) {
            random = Math.floor(Math.random() * len--) | 0;
            temp = answers[len];
            answers[len] = answers[random];
            answers[random] = temp;
        }
        setOptions(answers);
    };

    useEffect(() => {
        let cancel = false;
        getQuestions(category, difficulty)
            .then(results => {
                if (cancel) return;
                action({
                    type: "SET_QUESTIONS",
                    payload: results
                })
            })
            .catch(err => console.error(err));
        return () => {
            cancel = true;
        }
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const currentQuestion = questions[current];
            const correctAnswer = currentQuestion?.correct_answer;
            const incorrectAnswers = currentQuestion?.incorrect_answers;
            const answers = [correctAnswer, ...incorrectAnswers];
            setMixedOptions([...answers]);
        }
    }, [current, isLoaded, questions])

    return (
        <div data-testid="quiz-page" className="quiz-container">
            <Link data-testid="go-home-link" to="/">
                <img className="ill-img" src={img} alt=""/>
            </Link>
            {
                questions[current] ? (
                    <div data-testid="quiz-question" className="quiz-question">
                        <Question
                            currentQuestion={questions[current].question}
                            correct={questions[current]?.correct_answer}
                            options={options}
                            current={current}
                            setCurrent={setCurrent}/>
                    </div>
                ) : <CircularProgress data-testid="quiz-loading-progress" color="inherit" size={100}/>
            }
        </div>
    );
}

export default Quiz;