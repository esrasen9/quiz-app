import React, {Component} from 'react';
import QuizSettings from "../quiz/QuizSettings";

class Home extends Component {
    render() {
        return (
            <div data-testid="home-page">
                <QuizSettings/>
            </div>
        );
    }
}

export default Home;