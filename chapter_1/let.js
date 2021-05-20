/*
 * @Author: hy
 * @Date: 2021-05-19 17:00:17
 * @LastEditTime: 2021-05-19 17:14:38
 * @LastEditors: Please set LastEditors
 * @Description: let
 * @FilePath: /Understanding_ES6/chapter_1/let.js
 */

function getValue(condition) {
  // value 并不存在（无法访问）
  console.log(0,value);//0 undefined

  if (condition) {
      let value = "blue";//在这里初始化
      console.log(1,value);//1 blue

      // 其它代码

      return value;
  } else {
      console.log(2,value);//2 undefined
      // value value 并不存在（无法访问）

      return null;
  }

}
// console.log(3,value);//全局中访问不到在函数中声明的value
getValue()