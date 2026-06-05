import './style/index.less'

class Food{
  // 定义food对应的元素
  element:HTMLElement;

  constructor(){
    this.element = document.getElementById('food')!
  }

  // 获取食物坐标方法
  get X(){
    return this.element.offsetLeft
  }
  get Y(){
    return this.element.offsetTop
  }

  // 修改食物位置的方法
  change(){
    // 将element修改为随机位置
    let top = Math.round(Math.random()*29)*10
    let left = Math.round(Math.random()*29)*10

    this.element.style.top = top + 'px'
    this.element.style.left = left + 'px'
  }

}


// 测试代码
// const food = new Food()
// food.change()
