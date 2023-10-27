import GameState from "./GameState";

function GameOver({ gameState }) {
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <div className="game-over">O Win the Match</div>;
    case GameState.playerXWins:
      return <div className="game-over">X Win the Game</div>;
    case GameState.draw:
      return <div className="game-over">Match Draw</div>;
    default:
      return <></>;
  }
}

export default GameOver;
