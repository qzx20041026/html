//自定义对象
var user= {
  name :"tom",
  age: 18,
  eat: function() {
    alert("吃饭")
  }
}
alert(user.name);
user.eat();
json对象
var jsonstr='{"name":"qzx","age":18,"arr":[1,2,3]}';
alert(jsonstr)
//json字符串转换为js对象
var obj=JSON.parse(jsonstr);
alert(obj.name);
//js对象转换为json字符串
alert(JSON.stringify(obj));
