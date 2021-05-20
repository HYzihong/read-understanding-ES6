/*
 * @Author: hy
 * @Date: 2021-05-19 16:05:53
 * @LastEditTime: 2021-05-19 17:00:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Understanding_ES6/chapter_1/var.js
 */
// console.log(0,value);//全局中访问不到在函数中声明的value

function getValue(condition) {
  // var value;var声明的变量会在函数顶部声明
  console.log(0,value);//0 undefined

  if (condition) {
      var value = "blue";//在这里初始化
      console.log(1,value);//1 blue

      // 其它代码

      return value;
  } else {
      console.log(2,value);//2 undefined
      // value 可以被访问到，但是未初始化，其值为 undefined

      return null;
  }

}
// console.log(3,value);//全局中访问不到在函数中声明的value
getValue()