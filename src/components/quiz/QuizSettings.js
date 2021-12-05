import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {MenuItem, TextField} from "@mui/material";
import categories from "../../data/Categories";
import "./Quiz.css";
import {useStateValue} from "../../context/Context";
import {useHistory} from "react-router-dom";
import Header from "../header/Header";
const QuizSettings = () => {
    const [{name, category, difficulty}, action] = useStateValue();
    const [error,setError] = useState(false);

    const history = useHistory();

    const handleStartQuiz = () => {
        if(!category || !difficulty || !name){
            setError(true);
        }
        else {
            setError(false);
            history.push("/quiz");
        }
    }
    return (
        <div>
            <Header/>
            <div className="quiz-settings-container">
                <TextField
                    value={name}
                    label="Enter Your Name"
                    variant="outlined"
                    style={{margin: "10px"}}
                    onChange={(e) => action({
                        type: "SET_NAME",
                        payload: e.target.value
                    })}
                />
                {error && !name &&
                        (<span className="error-message">
                            Name field is required!
                        </span>)}
                <TextField
                    value={category}
                    select
                    label="Select Category"
                    variant="outlined"
                    style={{margin: "10px"}}
                    onChange={(e) => action({
                        type: "SET_CATEGORY",
                        payload: e.target.value
                    })}
                >
                    {
                        categories.map(data => (
                            <MenuItem key={data.value} value={data.value}>
                                {data.category}
                            </MenuItem>
                        ))
                    }
                </TextField>
                {error && !category &&
                    (<span className="error-message">
                        Please select a category!
                    </span>)}
                <TextField
                    value={difficulty}
                    select
                    label="Select difficulty"
                    id="difficulty-degree"
                    variant="outlined"
                    style={{margin: "10px"}}
                    onChange={(e) => action({
                        type: "SET_DIFFICULTY",
                        payload: e.target.value
                    })}
                >
                    <MenuItem key="easy" value="easy">Easy</MenuItem>
                    <MenuItem key="medium" value="medium">Medium</MenuItem>
                    <MenuItem key="hard" value="hard">Hard</MenuItem>
                </TextField>
                {error && !difficulty &&
                    (<span className="error-message">
                        Please select a difficulty!
                    </span>)}
                <Button
                    style={
                        {
                            fontSize: "20px",
                            letterSpacing: "1.2px",
                            margin: "10px",
                            color: "crimson",
                            borderColor: "crimson"
                        }}
                    onClick={handleStartQuiz}
                    className="quiz-start-btn"
                    variant="outlined">START QUIZ</Button>
            </div>
        </div>
    );
}

export default QuizSettings;