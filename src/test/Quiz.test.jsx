import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from '../context/Context';
import { initialState, reducer } from '../reducer';
import Quiz from '../components/pages/Quiz';
import React from 'react';

test('Renders Quiz page successfully', async () => {
  render(<Provider reducer={reducer} initialState={initialState}>
    <BrowserRouter>
      <Route>
        <Quiz />
      </Route>
    </BrowserRouter>
         </Provider>);

  const quizPage = screen.getByTestId('quiz-page');
  expect(quizPage).toBeInTheDocument();

  const homeLink = screen.getByTestId('go-home-link');
  expect(homeLink).toBeInTheDocument();

  const loadingProgess = screen.getByTestId('quiz-loading-progress');
  expect(loadingProgess).toBeInTheDocument();
});
