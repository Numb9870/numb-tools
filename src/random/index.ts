/**
 * 随机获取Element-plus的按钮类型
 * @returns 返回Element-plus的按钮类型
 */
export function randomElementBtnType(): "primary" | "success" | "warning" | "danger" | "info" | "text" {
  const array: ["primary", "success", "warning", "danger", "info", "text"] = ["primary", "success", "warning", "danger", "info", "text"];
  return array[Math.floor(Math.random() * array.length)];
}
