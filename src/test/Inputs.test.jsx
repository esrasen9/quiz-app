import { render, screen } from '@testing-library/react';
import { Provider } from '../context/Context';
import React from 'react';
import { initialState, reducer } from '../reducer';
import App from '../App';

test('Quiz setting input fields', () => {
  render(<Provider reducer={reducer} initialState={initialState}>
    <App />
         </Provider>);

  const nameInput = screen.getByTestId('name-input');
  expect(nameInput).toBeInTheDocument();
  expect(nameInput).toHaveTextContent('Enter Your Name');

  const categoryInput = screen.getByTestId('category-input');
  expect(categoryInput).toBeInTheDocument();
  expect(categoryInput).toHaveTextContent('Select Category');

  const difficultyInput = screen.getByTestId('difficulty-input');
  expect(difficultyInput).toBeInTheDocument();
  expect(difficultyInput).toHaveTextContent('Select difficulty');
});
