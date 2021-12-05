import React, {useState} from 'react';

const Question = ({current,options}) => {
    const [error,setError] = useState(false);
    const [selectedOption,setSelectedOption] = useState();
    return (
        <div className="quiz-question-container">
            <h1>{current.question}</h1>
            {error && (<span className="error-message">
                        Please select a category!
                    </span>)}
            <div className="quiz-answer-options">
                {
                options.map((option,index) =>
                    (<button
                        className="option"
                        key={index}>{option}</button>))
            }</div>
        </div>
    );
}

export default Question;