import Food from "./Food";
import ScoreBoard from "./ScoreBoard";
import Snake from "./Snake";

class Control {
  food: Food;
  scoreBoard: ScoreBoard;
  snake: Snake;

  constructor() {
    this.food = new Food();
    this.scoreBoard = new ScoreBoard();
    this.snake = new Snake();

    this.init();
  }

  // 游戏的初始化方法
  init() {
    document.addEventListener("keydown", this.keyboardHeadle);
  }

  keyboardHeadle() {}
}

export default Control;
