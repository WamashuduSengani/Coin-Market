import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { GET_ALL_COINS } from '../../graphQL/allCoinsQuery';
import CoinItem, { Coin } from './CoinItem';
import CoinMarketData from './CoinMarketData';
import { Box, Button, CircularProgress, Grid, Typography } from '@material-ui/core';
import { ThemeProvider,  createTheme } from '@material-ui/core/styles';
import { MonetizationOn, TrendingUp } from '@material-ui/icons';
import useStyles from './CoinList.styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4267B2',
    },
    secondary: {
      main: '#F7931A',
    },
  },
});

const CoinList: React.FC = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery<{ coins: Coin[] }>(GET_ALL_COINS);
  const [showAllCoins, setShowAllCoins] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const [hiddenCoins, setHiddenCoins] = useState<string[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState<string>('');
  const [selectedCoinName, setSelectedCoinName] = useState<string>('');


  useEffect(() => {
    const hiddenCoinsString = localStorage.getItem('hiddenCoins');
    if (hiddenCoinsString) {
      const hiddenCoinsArray = JSON.parse(hiddenCoinsString);
      setHiddenCoins(hiddenCoinsArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('hiddenCoins', JSON.stringify(hiddenCoins));
  }, [hiddenCoins]);

  const handleViewAllCoins = () => {
    setShowAllCoins(true);
  };

  const handleBackToEightCoins = () => {
    setShowAllCoins(false);
    setSelectedCoin(null);
  };

  const handleCoinClick = (coin: Coin) => {
    setSelectedCoin(coin);
    setSelectedCoinId(coin.id);
    setSelectedCoinName(coin.name);
    console.log("Selected Coin ID:", coin.id);
  };

  const handleCardClose = () => {
    setSelectedCoin(null);
  };

  const handleHideCoin = (coinId: string) => {
    setHiddenCoins([...hiddenCoins, coinId]);
    console.log(`Coin '${coinId}' successfully hidden`);
  };

  if (loading) {
    return (
      <Box className={classes.container}>
        <Box display="flex" alignItems="center" justifyContent="center" height="100vh">
          <CircularProgress />
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box className={classes.container}>
        <Typography>Error: {error.message}</Typography>
      </Box>
    );
  }

  const unhiddenCoins = data?.coins.filter((coin) => !hiddenCoins.includes(coin.id));

  const handleUnhideCoins = () => {
    setHiddenCoins([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <Box marginTop={14} marginBottom={2}>
          <Grid container spacing={2}>
            {!selectedCoin &&
              unhiddenCoins?.map((coin) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={coin.id}>
                  <CoinItem
                    coin={coin}
                    onClick={() => handleCoinClick(coin)}
                    isSelected={coin.id === selectedCoinId}
                    onHide={handleHideCoin}
                  />
                </Grid>
              ))}
          </Grid>
        </Box>

        {selectedCoin && (
        <Box position="relative" minHeight="100vh" className={classes.centeredCoin}>
        <Box>
        <Typography variant="h4" style={{ marginTop: '10px' }}>{selectedCoinName} Market Data</Typography>

          <CoinMarketData coinId={selectedCoin.id} onBack={handleBackToEightCoins} />
          <Button
            className={classes.closeButton}
            onClick={handleCardClose}
            startIcon={<MonetizationOn />}
          >
            Back
          </Button>
        </Box>
      </Box>
        )}

        {!selectedCoin && (
          <Box marginTop={2} textAlign="center">
            {!showAllCoins && (
              <Button
                className={classes.viewAllButton}
                variant="contained"
                color="primary"
                onClick={handleViewAllCoins}
                startIcon={<TrendingUp />}
              >
                View All Coins
              </Button>
            )}
            {showAllCoins && (
              <Button
                className={classes.backButton}
                variant="contained"
                color="secondary"
                onClick={handleBackToEightCoins}
                startIcon={<TrendingUp />}
              >
                Back to 8 Coins
              </Button>
            )}
          </Box>
        )}

        {hiddenCoins.length > 0 && (
          <Box marginTop={4} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Hidden Coins:
            </Typography>
            <Box marginTop={1}>
              <Button
                className={classes.hideButton}
                variant="text"
                onClick={handleUnhideCoins}
                size="small"
              >
                Unhide All Coins
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default CoinList;
