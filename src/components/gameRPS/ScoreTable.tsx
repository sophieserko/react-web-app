import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

interface Props {
  numberOfGamesPlayed: Number;
  robotScore: Number;
  playerScore: Number;
  tieCount: Number;
}

export const ScoreTable = ({
  numberOfGamesPlayed,
  robotScore,
  playerScore,
  tieCount,
}: Props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.table}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Total Games </TableCell>
            <TableCell align="right">Robot</TableCell>
            <TableCell align="right">Player</TableCell>
            <TableCell align="right">Tie</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {numberOfGamesPlayed}
            </TableCell>
            <TableCell align="right" data-testid="robot-score-data">
              {robotScore}
            </TableCell>
            <TableCell align="right" data-testid="player-score-data">
              {playerScore}
            </TableCell>
            <TableCell align="right" data-testid="tie-score-data">
              {tieCount}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
