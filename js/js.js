// window对象
// window.alert()弹窗
var flag=confirm("666")//显示带有确定和取消的对话框确定返回true取消返回false
alert(flag)
var i=0;
setInterval(function(){
  alert(i++)
},2000)//定时器SetInterval周期性的执行某一个函数
setTimeout(function () {
alert(BOM)
},3000)//定时器1SetTimeout延迟指定时间执行一次
// location地址栏对象
alert(location.href);//设置或返回完整的url;给其赋值会立即跳转到指定的url
