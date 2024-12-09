/**
 * 验证码生成
 * @param elementId dom元素Id
 * @param pool 字符串池 -- 默认为0-9
 * @returns 验证码
 */
export const createVerificationCode = (elementId: string, pool: string = "1234567890"): string => {
  // 绘制验证码
  let canvas = document.getElementById(elementId) as HTMLCanvasElement;
  // 验证传入的HTMLElement是否存在
  if (!canvas) {
    console.error(`${elementId} HTMLElement does not exist`);
    return "";
  }
  // 获取上下文
  let ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  // 清除整个画布
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 随机填充色
  ctx.fillStyle = randomColor(180, 230);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  let imgCode = "";

  // 随机生成字符串
  for (let i = 0; i < 4; i++) {
    const text = pool[randomNum(0, pool.length)];
    imgCode += text;
    // 随机字体大小
    const fontSize = randomNum(25, 40);
    // 随机旋转角度
    const deg = randomNum(-30, 30);

    // 绘制文字样式
    ctx.font = `${fontSize}px SimHei`;
    ctx.textBaseline = "top"; // 文字垂直对齐方式
    ctx.fillStyle = randomColor(80, 160);
    ctx.save(); // 将当前状态封存入栈
    ctx.translate(i * 30 + 15, 15);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(text, -10, -15);
    ctx.restore(); // 出栈
  }

  // 随机生成干扰线
  for (let i = 0; i < 5; i++) {
    ctx.beginPath(); // 开始一条路径的描述
    ctx.moveTo(randomNum(0, canvas.width), randomNum(0, canvas.height)); // 下笔
    ctx.lineTo(randomNum(0, canvas.width), randomNum(0, canvas.height)); // 移动
    ctx.strokeStyle = randomColor(100, 230);
    ctx.closePath(); // 没有会使上次生成的线条粘连在一起
    ctx.stroke();
  }

  // 随机小圆点
  for (let i = 0; i < 40; i++) {
    ctx.beginPath();
    ctx.arc(randomNum(0, canvas.width), randomNum(0, canvas.height), 1, 0, Math.PI * 2);
    ctx.fillStyle = randomColor(100, 230);
    ctx.closePath();
    ctx.fill();
  }

  // 随机填充色
  function randomColor(min: number, max: number) {
    const r = randomNum(min, max);
    const g = randomNum(min, max);
    const b = randomNum(min, max);
    return `rgb(${r},${g},${b})`;
  }

  // 随机数
  function randomNum(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  // 返回验证码
  return imgCode;
};
