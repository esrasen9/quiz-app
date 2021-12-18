import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import { Provider } from '../context/Context';
import { initialState, reducer } from '../reducer';

test('Renders home page successfully', () => {
  render(<Provider reducer={reducer} initialState={initialState}>
    <App />
         </Provider>);
  const homePage = screen.getByTestId('home-page');
  expect(homePage).toBeInTheDocument();

  const quizSettings = screen.getByTestId('quiz-settings');
  expect(quizSettings).toBeInTheDocument();

  const quizSettingsHeader = screen.getByTestId('quiz-header');
  expect(quizSettingsHeader).toBeInTheDocument();

  const quizSettingsContainer = screen.getByTestId('quiz-settings-container');
  expect(quizSettingsContainer).toBeInTheDocument();
});
