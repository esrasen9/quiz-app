import React, {useState} from 'react';
import Button from "@mui/material/Button";
import {useStateValue} from "../../context/Context";
import {useHistory} from "react-router-dom";

const Question = ({current, setCurrent, options, correct, currentQuestion}) => {
    const [{score, name, category, difficulty}, action] = useStateValue();
    const [selectError, setSelectError] = useState()
    const [selectedOption, setSelectedOption] = useState();
    const history = useHistory();

    const handleSelect = (option) => {
        if (selectedOption === option && selectedOption === correct) {
            return "correct-option";
        } else if (selectedOption === option && selectedOption !== correct) {
            return "wrong-option";
        } else if (option === correct) {
            return "correct-option";
        }
    }

    const handleCheck = (option) => {
        setSelectedOption(option);
        if (option === correct) {
            action({type: "SET_SCORE", payload: score + 1});
        }
        setSelectError(false);
    }

    const handleNextQuestion = () => {
        if (current > 10) {
            handleQuit();
        } else if (selectedOption) {
            setCurrent(current + 1);
            setSelectedOption();
        } else {
            setSelectError("Please select an option!");
        }
    }

    const handleQuit = () => {
        setCurrent(0);
        history.push({
            pathname: "/result",
            state: {score, name, category, difficulty}
        });
    }
    return (
        <div className="quiz-question-container">
            <h1>{currentQuestion}</h1>
            <div className="quiz-answer-options">
                {
                    options.map((option, index) =>
                        (<button
                                disabled={selectedOption}
                                onClick={() => handleCheck(option)}
                                className={`option ${selectedOption && handleSelect(option)}`}
                                key={index}>{option}
                            </button>
                        )
                    )
                }</div>
            {selectError && (<span>{selectError}</span>)}
            <div className="control-buttons">
                <Button onClick={handleQuit}>{current <= 10 ? "Finish Quiz" : ""}</Button>
                <Button onClick={handleNextQuestion}>{current > 10 ? "Submit Quiz" : "Next Question"}</Button>
            </div>
        </div>
    );
}

export default Question;