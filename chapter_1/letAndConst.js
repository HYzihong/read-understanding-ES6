/*
 * @Author: your name
 * @Date: 2021-05-20 09:27:27
 * @LastEditTime: 2021-05-20 09:46:22
 * @LastEditors: Please set LastEditors
 * @Description: let and const
 * @FilePath: /Understanding_ES6/chapter_1/letAndConst.js
 */
{
  var a = '1'
  console.log(a);// Identifier 'a' has already been declared 标识符'a'已经被声明
  let a = '2'
  console.log(a);
}

{
  var a = '1'
  console.log(a);// Identifier 'a' has already been declared 标识符'a'已经被声明
  const a = '2'
  console.log(a);
}

{
  let a = '1'
  console.log(a);// Identifier 'a' has already been declared 标识符'a'已经被声明
  const a = '2'
  console.log(a);
}