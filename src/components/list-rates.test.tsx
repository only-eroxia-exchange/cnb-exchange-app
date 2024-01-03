import { render, screen } from '@testing-library/react'
import ListRates from './list-rates'

const mockList = [
  {
    country: 'USA',
    currency: 'dollar',
    amount: 10,
    code: 'USD',
    rate: 25,
  },
  {
    country: 'Czech Republic',
    currency: 'crown',
    amount: 5,
    code: 'CZK',
    rate: 1,
  },
]

describe('ListRates Component', () => {
  test('it renders the correct number of list items', () => {
    render(<ListRates list={mockList} />)
    const listItems = screen.getAllByTestId('listitem')
    expect(listItems.length).toBe(mockList.length)
  })
})
