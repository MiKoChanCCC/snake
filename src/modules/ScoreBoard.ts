class ScoreBoard {
  level: number = 1;
  score: number = 0;

  // 限制最大的等级
  maxLevel: number;

  scoreEle: HTMLElement;
  levelEle: HTMLElement;

  constructor(maxLevel: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
  }
  // if (this.level < this.maxLevel) {
  // }

  // 增加得分的方法
  addScore() {
    // innerHTML 获取时：返回HTML源码    设置时：解析字符串为HTML
    // innnerText  获取时：返回可见文本    设置时：当作普通文本处理
    // textContent   与innerText类似  但性能通常更好、不受 CSS 样式影响、能获取隐藏元素中的文本
    this.scoreEle.textContent = ++this.score + "";
    if (this.score % 10 === 0) {
      this.addLevel();
    }
  }

  // 增加等级的方法
  addLevel() {
    if (this.level < this.maxLevel) {
      this.levelEle.textContent = ++this.level + "";
    }
  }
}

export default ScoreBoard;
