import React from 'react';
import {useHistory, useLocation} from "react-router-dom";
import image from "../../img/2176931.jpg"
import Button from "@mui/material/Button";
import categories from "../../data/Categories";

const QuizResult = () => {
    const location = useLocation();
    const history = useHistory();
    const {name, score, category, difficulty} = location.state;

    return (
        <div className="quiz-result-page">
            <img className="result-img" src={image} alt="quiz-result"/>
            <div className="result-content">
                <div className="result-data">
                    <h1>Name: <span>{name}</span></h1>
                    <h1>Category: <span>{categories.find(c => c.value = category).category}</span></h1>
                    <h1>Difficulty: <span>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</span></h1>
                    <h1> Final Score: <span>{score}</span></h1>
                </div>
                <Button variant="outlined" onClick={() => history.push("/")}>Go To Homepage</Button>
            </div>
        </div>
    );
}

export default QuizResult;