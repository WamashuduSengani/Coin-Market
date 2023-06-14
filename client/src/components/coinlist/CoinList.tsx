import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { GET_ALL_COINS } from "../../graphQL/allCoinsQuery";
import CoinItem, { Coin } from "./CoinItem";
import CoinMarketData from "./CoinMarketData";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { MonetizationOn } from "@material-ui/icons";
import useStyles from "./CoinList.styles";
import AppBarr from "../appBar/AppBar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: "#F7931A",
    },
  },
});

const CoinList: React.FC = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery<{ coins: Coin[] }>(GET_ALL_COINS);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const [hiddenCoins, setHiddenCoins] = useState<string[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState<string>("");
  const [selectedCoinName, setSelectedCoinName] = useState<string>("");

  useEffect(() => {
    const hiddenCoinsString = localStorage.getItem("hiddenCoins");
    if (hiddenCoinsString) {
      const hiddenCoinsArray = JSON.parse(hiddenCoinsString);
      setHiddenCoins(hiddenCoinsArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("hiddenCoins", JSON.stringify(hiddenCoins));
  }, [hiddenCoins]);

  const handleBack = () => {

    setSelectedCoin(null);
  };

  const handleCoinClick = (coin: Coin) => {
    setSelectedCoin(coin);
    setSelectedCoinId(coin.id);
    setSelectedCoinName(coin.name);
  };

  const handleCardClose = () => {
    setSelectedCoin(null);
  };

  const handleHideCoin = (coinId: string) => {
    setHiddenCoins([...hiddenCoins, coinId]);
  };

  if (loading) {
    return (
      <Box className={classes.container}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
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

  const unhiddenCoins = data?.coins.filter(
    (coin) => !hiddenCoins.includes(coin.id)
  );

  const handleUnhideCoins = () => {
    setHiddenCoins([]);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBarr />

      <Box className={classes.container}>
        <Box marginTop={3} marginBottom={2}>
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
          <Box
            minHeight="100vh"
            className={classes.centeredCoin}
            style={{ marginTop: "-165px" }}
          >
            <Box>
              <Typography variant="h4" style={{ marginTop: "50px" }}>
                {selectedCoinName} Market Data
              </Typography>

              <CoinMarketData coinId={selectedCoin.id} onBack={handleBack} />
              <Button
                className={classes.closeButton}
                onClick={handleCardClose}
                startIcon={<MonetizationOn />}
                style={{ marginTop: "100px", marginLeft: "-200px" }}
              >
                Back
              </Button>
            </Box>
          </Box>
        )}

        {hiddenCoins.length > 0 && (
          <Box mt={4} textAlign="center">
            <Box marginTop={1}>
              <Button
                className={`${classes.hideButton} ${classes.moveButtonDown}`}
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
