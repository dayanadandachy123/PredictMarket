// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PredictMarket title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PredictMarket/i);
    expect(titleElement).toBeInTheDocument();
});
