import {render, screen, fireEvent, getByTestId, waitFor} from '@testing-library/react';
import App from "../App";
import {Provider} from "../context/Context";
import {initialState, reducer} from "../reducer";
import Quiz from "../components/pages/Quiz";
import {BrowserRouter, Route} from "react-router-dom";

test('Renders home page successfully', () => {
    render(<Provider reducer={reducer} initialState={initialState}>
        <App/>
    </Provider>);
    const homePage = screen.getByTestId("home-page");
    expect(homePage).toBeInTheDocument();

    const quizSettings = screen.getByTestId("quiz-settings");
    expect(quizSettings).toBeInTheDocument();

    const quizSettingsHeader = screen.getByTestId("quiz-header");
    expect(quizSettingsHeader).toBeInTheDocument();

    const quizSettingsContainer = screen.getByTestId("quiz-settings-container");
    expect(quizSettingsContainer).toBeInTheDocument();
});

test('Renders Quiz page successfully', async() => {
    render(<Provider reducer={reducer} initialState={initialState}>
        <BrowserRouter>
            <Route>
                <Quiz/>
            </Route>
        </BrowserRouter>
    </Provider>);
    const quizPage = screen.getByTestId("quiz-page");
    expect(quizPage).toBeInTheDocument();
    const homeLink = screen.getByTestId("go-home-link");
    expect(homeLink).toBeInTheDocument();
    const loadingProgess = screen.getByTestId("quiz-loading-progress");
    expect(loadingProgess).toBeInTheDocument();
});
