/*
 * @Author: hy
 * @Date: 2021-05-20 09:45:44
 * @LastEditTime: 2021-05-20 09:56:01
 * @LastEditors: Please set LastEditors
 * @Description: const 
 * @FilePath: /Understanding_ES6/chapter_1/const.js
 */

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