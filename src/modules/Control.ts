import Food from "./Food";
import ScoreBoard from "./ScoreBoard";
import Snake from "./Snake";

class Control {
  food: Food;
  scoreBoard: ScoreBoard;
  snake: Snake;

  // 存储现在的方向
  direction: string = "";

  // 判断蛇是否还活着
  isLive: boolean = true;

  constructor(maxLevel: number = 10, upScore: number = 2) {
    this.food = new Food();
    this.scoreBoard = new ScoreBoard(maxLevel, upScore);
    this.snake = new Snake();

    this.init();
  }

  // 游戏的初始化方法
  init() {
    document.addEventListener("keydown", this.keydownHandler.bind(this));
    this.run();
    this.food.change();
  }

  // ArrowUp
  // ArrowRight
  // ArrowDown
  // ArrowLeft
  keydownHandler(event: KeyboardEvent) {
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft"
    ) {
      this.direction = event.key;
    }
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

    this.checkEat(X, Y);

    try {
      this.snake.X = X;
      this.snake.Y = Y;
    } catch (e: unknown) {
      if (e instanceof Error) {
        alert(e.message + ",OVER");
        this.isLive = false;
      }
    }

    this.isLive &&
      setTimeout(this.run.bind(this), 200 - (this.scoreBoard.level - 1) * 20);
  }

  checkEat(X: number, Y: number) {
    if (this.food.X === X && this.food.Y === Y) {
      this.food.change();
      this.snake.addBody();
      this.scoreBoard.addScore();
    }
  }
}

export default Control;
