import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import CoinList from './CoinList';

// Mock the useQuery hook
jest.mock('@apollo/client');

describe('CoinList', () => {
  beforeEach(() => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: {
        coins: [
          { id: '90', name: 'Bitcoin' },
          { id: '80', name: 'Ethereum' },
        ],
      },
    });
  });

  it('renders loading state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: null,
      data: null,
    });
  });

  it('renders error state', () => {
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: { message: 'An error occurred' },
      data: null,
    });

  });

  it('renders selected coin market data', () => {
    // render(<CoinList />);


    const coinItem = screen.getByText('Bitcoin');
    fireEvent.click(coinItem);

    expect(screen.getByText('Bitcoin Market Data')).toBeInTheDocument();
    expect(screen.getByText('Back')).toBeInTheDocument();
  });


});
