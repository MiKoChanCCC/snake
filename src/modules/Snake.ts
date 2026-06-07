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
    this.head.style.left = value + "px";
  }

  set Y(value: number) {
    this.head.style.top = value + "px";
  }

  // 蛇增加身体长度的方法
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
}

export default Snake;
