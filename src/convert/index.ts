// byte单位
const byteUnit = {
  B: 1,
  KB: 1024,
  MB: 1024 * 1024,
  GB: 1024 * 1024 * 1024,
  TB: 1024 * 1024 * 1024 * 1024,
};

/**
 * 字节转KB
 * @param bytes 字节大小
 * @param precision 返回值的精度
 * @returns {string} 返回转化后的值
 */
export function bytesToKb(bytes: number, precision: number = 2): string {
  const kb = bytes / byteUnit.KB;
  return `${kb.toFixed(precision)} KB`;
}

/**
 * 字节转MB
 * @param bytes 字节大小
 * @param precision 返回值的精度
 * @returns {string} 返回转化后的值
 */
export function bytesToMb(bytes: number, precision: number = 2): string {
  const mb = bytes / byteUnit.MB;
  return `${mb.toFixed(precision)} MB`;
}

/**
 * 字节转GB
 * @param bytes 字节大小
 * @param precision 返回值的精度
 * @returns {string} 返回转化后的值
 */
export function bytesToGb(bytes: number, precision: number = 2): string {
  const gb = bytes / byteUnit.GB;
  return `${gb.toFixed(precision)} GB`;
}

/**
 * 字节转TB
 * @param bytes 字节大小
 * @param precision 返回值的精度
 * @returns {string} 返回转化后的值
 */
export function bytesToTb(bytes: number, precision: number = 2): string {
  const tb = bytes / byteUnit.TB;
  return `${tb.toFixed(precision)} TB`;
}

/**
 * 字节转可读文本
 * @param bytes 字节大小
 * @returns {string} 返回转化后的值
 */
export function bytesToHuman(bytes: number, precision: number = 2): string {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  return `${bytes.toFixed(precision)} ${units[i]}`;
}
