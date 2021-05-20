/*
 * @Author: hy
 * @Date: 2021-05-19 17:19:07
 * @LastEditTime: 2021-05-20 09:48:59
 * @LastEditors: Please set LastEditors
 * @Description: lexical scopes
 * @FilePath: /Understanding_ES6/chapter_1/lexical_scopes.js
 */
// "use strict";
// var
{
  var a = 'zhangsan'
  console.log(a);
}

{
  var a = 'lisi'
  console.log(a);
}
// console.log(A); 无法访问 A

// let
{
  let a = 'zhangsan'
  console.log(a);
}

{
  let a = 'lisi'
  console.log(a); 
}
// console.log(A); 无法访问 A

// const 
{
  const A = 'zhangsan'
  console.log(A);
}

{
  const  A = 'lisi'
  console.log(A); 
}
// console.log(A); 无法访问 A

{
  const A = '123'
  // A=1234 // Assignment to constant variable. 不能对常量进行二次赋值
  console.log(A);
}

{
  const OBJ = {
    a:1
  }
  OBJ.a = '123'
  console.log(OBJ);
}

{
  const OBJ = {
    a:1
  }
  OBJ.b = '123'
  console.log(OBJ);
}

{
  const OBJ = {
    a:1
  }
  // Assignment to constant variable. 不能对常量进行二次赋值
  // OBJ = { // 修改OBJ的绑定
  //   a:'2'
  // }
  console.log(OBJ);
}