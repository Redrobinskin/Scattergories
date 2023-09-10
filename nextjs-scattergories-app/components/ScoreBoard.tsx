import React from 'react';
import { Player } from './Player';

interface ScoreBoardProps {
  players: Player[];
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ players }) => {
  return (
    <div>
      <h2>Score Board</h2>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;