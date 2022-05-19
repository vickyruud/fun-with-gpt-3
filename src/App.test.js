import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

describe('App', () => {
  test('renders App component and loads the NavBar', () => {
    render(<App />);
    screen.getByText('Triv-AI - Ask AI anything');
     
    screen.debug()
  });

  test('Clicking on Load an Example loads a new example', () => {
    render(<App />);

    const button = screen.getByRole('button', {name: 'Load an example'})
    fireEvent.click(button)
    screen.debug();
  })
});