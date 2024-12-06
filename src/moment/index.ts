import Moment from "moment";
import MomentZone from "moment-timezone";
import "moment/locale/zh-cn";

// moment设置中文语言
Moment.locale("zh-cn");

/**
 * 秒针时钟格式化 -- 中文配置
 * @param format 时间格式
 * @returns {string} 使用moment格式化后的时间
 */
export function digitalClock(format: string = "YYYY-MM-DD HH:mm:ss dddd"): string {
  return Moment(Date.now()).format(format);
}

/**
 * 获取UTC+8时间 -- 默认为 Asia/Shanghai
 * @param date 需要成东八区转换的时间
 * @param format 自定义时间格式 -- 默认为 YYYY-MM-DD HH:mm:ss
 * @returns {string} 返回moment格式化后的时间
 */
export function getUTC8TimeZone(date: string | Date | number, format: string = "YYYY-MM-DD HH:mm:ss"): string {
  return MomentZone.tz(date, "Asia/Shanghai").format(format);
}

export const moment = Moment;
export const momentZone = MomentZone;
