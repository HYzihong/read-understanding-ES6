/*
 * @Author: your name
 * @Date: 2021-05-20 16:38:18
 * @LastEditTime: 2021-05-20 17:06:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Understanding_ES6/chapter_1/Block_Binding_in_Loops.js
 */
{
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
  
  // 变量的提升导致块外的部分在循环结束后依然可以访问 i 
  console.log('var',i); // 10
}
 // 这里仍然可以访问到 i
console.log('var',i);   
{
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  // 在这里访问 i 会抛出错误
  // console.log('let',i); // ReferenceError: i is not defined
}