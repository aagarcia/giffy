import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

/* test('home work as expected', async () => {
  render(<App />)
  const gifLink = await screen.findAllByAltText('Gif-link')
  expect(gifLink).toBeVisible()
}) */

test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'Matrix' }})
  fireEvent.click(button)

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible() 
})