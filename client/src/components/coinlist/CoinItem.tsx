import { Card, CardContent, Typography, Button } from '@material-ui/core';
import { AttachMoney } from '@material-ui/icons';
import React from 'react';
import useStyles from './CoinList.styles';

export interface Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
}

interface CoinItemProps {
  coin: Coin;
  onClick: () => void;
  isSelected: boolean;
  onHide: (coinId: string) => void;
}

const CoinItem: React.FC<CoinItemProps> = ({ coin, onClick, isSelected, onHide }) => {
  const classes = useStyles();

  const handleHide = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevents the card from being selected
    onHide(coin.id);
    // Display toast message
    console.log(`Coin '${coin.name}' successfully hidden`);
  };

  if (isSelected) {
    return (
      <Card className={`${classes.card} ${classes.selectedCard}`} onClick={onClick}>
        <CardContent>
          <div className={classes.iconContainer}>
            <AttachMoney className={classes.icon} />
            <Typography className={classes.name}>{coin.name}</Typography>
          </div>
          <Typography className={classes.symbol}>{coin.symbol}</Typography>
        </CardContent>
        <CardContent>
          <Typography className={classes.rank}>Rank: {coin.rank}</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={classes.card} onClick={onClick}>
      <CardContent>
        <div className={classes.iconContainer}>
          <AttachMoney className={classes.icon} />
          <Typography className={classes.name}>{coin.name}</Typography>
        </div>
        <Typography className={classes.symbol}>{coin.symbol}</Typography>
      </CardContent>
      <CardContent>
        <Typography className={classes.rank}>Rank: {coin.rank}</Typography>
      </CardContent>
      <CardContent>
        <Button variant="outlined" color="secondary" onClick={handleHide}>
          Hide
        </Button>
      </CardContent>
    </Card>
  );
};

export default CoinItem;
