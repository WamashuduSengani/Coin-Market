import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@material-ui/core";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Divider,
} from "@material-ui/core";
import useStyles from "./CoinList.styles";

interface CoinMarketDataProps {
  coinId: string;
  onBack: () => void;
}

interface CoinMarket {
  base: string;
  name: string;
  price: number;
  price_usd: number;
  quote: string;
  time: number;
  volume: number;
  volume_usd: number;
}

const CoinMarketData: React.FC<CoinMarketDataProps> = ({ coinId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [coinMarket, setCoinMarket] = useState<CoinMarket | null>(null);
  const coinMarketsApiUrl = `${process.env.REACT_APP_COIN_MARKETS_API_URL}${coinId}`;
  const classes = useStyles();

  useEffect(() => {
    const fetchCoinMarketData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(coinMarketsApiUrl);
        const data = response.data[0];

        setCoinMarket({
          base: data.base,
          name: data.name,
          price: data.price,
          price_usd: data.price_usd,
          quote: data.quote,
          time: data.time,
          volume: data.volume,
          volume_usd: data.volume_usd,
        });

        setLoading(false);
      } catch (error) {
        setError("Failed to fetch coin market data");
        setLoading(false);
      }
    };

    fetchCoinMarketData();
  }, [coinId, coinMarketsApiUrl]);

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
      <Typography variant="body1" color="error">
        Error: {error}
      </Typography>
    );
  }
  if (!coinMarket) {
    return null;
  }

  const { base, name, price, price_usd, quote, time, volume, volume_usd } =
    coinMarket;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Base</TableCell>
            <TableCell>{base}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{name}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>{price}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Price (USD)</TableCell>
            <TableCell>{price_usd}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Quote</TableCell>
            <TableCell>{quote}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>{time}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Volume</TableCell>
            <TableCell>{volume}</TableCell>
          </TableRow>
          <Divider />
          <TableRow>
            <TableCell>Volume (USD)</TableCell>
            <TableCell>{volume_usd}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CoinMarketData;
