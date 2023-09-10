import React from 'react';
import GameBoard from '../components/GameBoard';
import ScoreBoard from '../components/ScoreBoard';
import Timer from '../components/Timer';
import Player from '../components/Player';
import AIPlayer from '../components/AIPlayer';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Scattergories</h1>
      <GameBoard />
      <ScoreBoard />
      <Timer />
      <Player />
      <AIPlayer />
    </div>
  );
};

export default Home;