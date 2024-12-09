# 帅哥一手自用工具库

整合开发常用的工具库，并两次封装。

# 特征


## 时间类（moment、moment-timezone）

### moment
> 返回一个秒针时钟的字符串，可以提供自定义格式
1. function digitalClock ( formate: string = 'YYYY-MM-DD HH:mm:ss dddd' ) : string 
> 返回东八区的时间字符串，可以提供自定义格式
2. function getUTC8TimeZone ( date:number | Date | string , formate: string = 'YYYY-MM-DD HH:mm:ss dddd' ) : string

## 转换类

### 字节转kb、mb、gb、tb
> byte 转 可读
1. function bytesToKb ( byte: number , precision :number = 2) : number 
2. function bytesToMb ( byte: number , precision :number = 2) : number 
3. function bytesToGb ( byte: number , precision :number = 2) : number 
4. function bytesToTb ( byte: number , precision :number = 2) : number 
5. function bytesToHuman ( byte: number , precision :number = 2) : number 
   
## 工具类
> 创建纯js的一个验证码
1. function createVerificationCode ( elementId: string , pool = '0123456789' ) : string
   
## 随机类
> 随机获取Element-plus的按钮类型
function randomElementBtnType(): "primary" | "success" | "warning" | "danger" | "info" | "text"
