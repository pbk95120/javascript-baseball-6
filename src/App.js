import Game from "./controller/Game.js";

class App {
  async play() {
    const game = new Game();
    await game.startGame();
  }
}

// const app = new App();
// app.play();

export default App;
