// src/App.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component - The Testing Lab', () => {
  
  // Test 1: Does it start at 0?
  it('renders the initial bug count as 0', () => {
    // 1. Arrange: Render the component in our virtual DOM
    render(<App />)
    
    // 2. Act: Find the counter element
    const counter = screen.getByTestId('bug-counter')
    
    // 3. Assert: Check if it has the correct text
    expect(counter).toHaveTextContent('Bugs Squashed: 0')
  })

  // Test 2: Does the button work?
  it('increments the bug count when the button is clicked', () => {
    render(<App />)
    
    const button = screen.getByText('💥 Squash a Bug 💥')
    
    // Simulate a user clicking the button
    fireEvent.click(button)
    
    const counter = screen.getByTestId('bug-counter')
    expect(counter).toHaveTextContent('Bugs Squashed: 1')
  })

  // Test 3: Does the conditional rendering work?
  it('shows a success message after 5 bugs are squashed', () => {
    render(<App />)
    const button = screen.getByText('💥 Squash a Bug 💥')

    // Simulate clicking 5 times quickly
    for(let i = 0; i < 5; i++) {
      fireEvent.click(button)
    }

    // Assert the secret message appears
    const successMessage = screen.getByText('Wow! You are a master QA engineer!')
    expect(successMessage).toBeInTheDocument()
  })
})