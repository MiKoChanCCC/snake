class Snake {
  // 蛇头的元素
  head: HTMLElement;
  // 蛇的元素（头和身体）
  bodies: HTMLCollection;
  // 蛇的容器
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake > div")!;
    this.bodies = this.element.getElementsByTagName("div");
  }

  // 获取蛇的坐标
  get X() {
    return this.head.offsetLeft;
  }
  get Y() {
    return this.head.offsetTop;
  }

  set X(value: number) {
    // 如果新值和就值相等的直接return出去，优化性能
    if (value === this.X) return;
    if (value < 0 || value > 290) {
      throw new Error("撞墙了");
    }

    // 如果有body的话，矫正因为direction为正在前进的方向的反方向带来的位移冲突
    if (
      this.bodies[1] &&
      (this.bodies[1] as HTMLElement).offsetLeft === value
    ) {
      if (value < this.X) {
        value = this.X + 10;
      } else {
        value = this.X - 10;
      }
    }

    this.moveBody();
    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    // 如果新值和就值相等的直接return出去，优化性能
    if (value === this.Y) return;
    if (value < 0 || value > 290) {
      throw new Error("撞墙了");
    }

    // 如果有body的话，矫正因为direction为正在前进的方向的反方向带来的位移冲突
    if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
      if (value < this.Y) {
        value = this.Y + 10;
      } else {
        value = this.Y - 10;
      }
    }

    this.moveBody();
    this.head.style.top = value + "px";
  }

  // 增加身体长度的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }

  // 移动身体的方法
  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      // 将身体的第n个div的offsetLeft和offsetTop移动到第n-1个div的位置
      let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
      let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;

      (this.bodies[i] as HTMLElement).style.left = X + "px";
      (this.bodies[i] as HTMLElement).style.top = Y + "px";
    }
  }
}

export default Snake;
