// alert("123")//写入警告框
// document.write(123)//写入HTML输出
// console.log(123)//写入浏览器控制台
//变量用var声明   JavaScript是一门弱类型语言，变量可以存放不同类型的值
var a=1;
var b="1";
//let定义局部变量  const定义常量
// ==会进行类型转换   ===不会
// alert(a==b);
//  alert(1)//true
//  alert(a===b);//false
// parseInt("12")//将字符串转换为数字

//  function定义函数
function add(a,b){
  return a+b;
}
// alert(add(1,2))
//数组    长度可变  类型也可变
var arr1=new Array(1,2,3);
var arr=[1,2,3];
// 数组方法
document.write(arr.length)
arr.forEach(function(a){
  document.write()
});
arr.push(1)//添加元素到数组尾部
arr.slice(1)//删除数组元素参数为索引
//字符串
var str="String";
//长度
str.length;
//获取指定索引的字符
str.charAt(1);
//检索字符串（获得指定字符在字符串位置的索引）
alert(str.indexOf("tr"))
//trim除去字符串两端的空格
str.trim();
//substring 截取字符串
alert(str.substring(0,2))

