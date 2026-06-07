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
  }

  // ArrowUp
  // ArrowRight
  // ArrowDown
  // ArrowLeft
  keydownHandler(event: KeyboardEvent) {
    this.direction = event.key;
    // console.log(this.direction);
  }
}

export default Control;
