import Food from "./Food";
import ScoreBoard from "./ScoreBoard";
import Snake from "./Snake";

class Control {
  food: Food;
  scoreBoard: ScoreBoard;
  snake: Snake;
  direction: string = "";

  constructor() {
    this.food = new Food();
    this.scoreBoard = new ScoreBoard();
    this.snake = new Snake();

    this.init();
  }

  // 游戏的初始化方法
  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
  }

  // ArrowUp
  // ArrowRight
  // ArrowDown
  // ArrowLeft
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
    // console.log(this.direction);
  }

  run() {
    let X = this.snake.X;
    let Y = this.snake.Y;

    switch (this.direction) {
      case "ArrowUp":
        Y -= 10;
        break;
      case "ArrowRight":
        X += 10;
        break;
      case "ArrowDown":
        Y += 10;
        break;
      case "ArrowLeft":
        X -= 10;
        break;
    }

    this.snake.X = X;
    this.snake.Y = Y;

    setTimeout(this.run, 300 - (this.scoreBoard.level - 1) * 20);
  }
}

export default Control;
