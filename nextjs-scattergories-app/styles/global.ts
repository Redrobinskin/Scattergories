import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  #game-board {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }

  .question-card {
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .score-board {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  .timer {
    font-size: 24px;
    font-weight: bold;
  }

  .player, .ai-player {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }
`;

export default GlobalStyle;