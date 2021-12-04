import React, {useEffect, useState} from 'react';
import {getQuestions} from "../../reducer";
import {useStateValue} from "../../context/Context";

const Quiz = () => {
    const [{name, category, difficulty, score},action] = useStateValue();
    const [questions,setQuestions] = useState([]);
    const [currentQuestion,setCurrentQuestion] = useState(0);

    const mixOptions = (answers) => {
        let len = answers.length;
        let random,temp;
        while (len){
            random = Math.floor(Math.random() * len--) | 0;
            temp = answers[len];
            answers[len] = answers[random];
            answers[random] = temp;
        }
        return answers;
    };

    useEffect(() =>{
        getQuestions(category,difficulty)
            .then(res =>setQuestions([...res]))
            .catch(error => console.error(error));
    },[]);


    return (
        <div>
                Quiz
        </div>
    );
}

export default Quiz;