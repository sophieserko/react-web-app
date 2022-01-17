import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";

interface Props {
  numberOfGamesPlayed: Number;
  robotScore: Number;
  playerScore: Number;
}

export const ScoreTable = ({
  numberOfGamesPlayed,
  robotScore,
  playerScore,
}: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Total Games </TableCell>
            <TableCell align="right">Robot</TableCell>
            <TableCell align="right">Player</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              {numberOfGamesPlayed}
            </TableCell>
            <TableCell align="right">{robotScore}</TableCell>
            <TableCell align="right">{playerScore}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
