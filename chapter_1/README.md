<!--
 * @Author: hy
 * @Date: 2021-05-19 15:43:39
 * @LastEditTime: 2021-05-20 17:26:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /Understanding_ES6/chapter_1/README.md
-->

# 块级绑定(Block Bindings）

[TOC]

### 变量提升(hoisting)

#### `var`

- 使用 var 关键字声明的变量
  - 只声明未初始化时值为 `undefined`
  - 不论在何处都会被视作在函数级作用域内顶部的位置发生
  - 函数外则为全局作用域内

### 块级声明(Block-Level Declarations）

##### 块作用域/词法作用域（lexical scopes）

- 块级声明指的是该声明的变量无法被代码块外部访问
- 可以在如下的条件下创建：
  - 函数内部
  - 在代码块（即 `{` 和 `}`）内部
- 是类 C 语言的工作机制
- ==块级绑定的特别设定==
  - 1. ==暂存性死区 TDZ==
  - 2. ==循环中的块级绑定==

##### `let` 声明 (Let Declarations)

- 变量的作用域会限制在当前的代码块中
- 不可重复声明,可以重复赋值 v

##### `const` 声明（Constant Declarations）

- 表示声明常量,不能再次被赋值
- 必须在声明处初始化
- **如果这个常量是对象，可以修改绑定值（对象的值也就是地址未发生变化），不可以修改绑定（重新绑定对象的变量和值）。**

##### 暂存性死区 TDZ（The Temporal Dead Zone）

- `let` 或 `const` 声明的变量在声明之前不能被访问,如果执意这么做会出现错误.
  > ==摘录==:
  > 在这里，变量 `value` 由 `let` 声明并被初始化，但是由于该语句之前抛出了错误导致其从未被执行。这种现象的原因是该语句存在于被 JavaScript 社区泛称为暂存性死区（Temproal Dead Zone, TDZ）之内。ECMAScript 规范中未曾对 `TDZ` 有过显式命名，不过在描述 let 和 const 声明的变量为何在声明前不可访问时，该术语经常被使用。本章会涵盖在 `TDZ` 中关于声明位置的一些微妙部分。此外示例虽然全部用的是 let ，但是实际用法和 const 别无二致。
  > 当 JavaScript 引擎在作用域中寻找变量声明时，会将变量提升到函数/全局作用域的顶部（`var`）或是放入 `TDZ`（`let` 和 `const`）内部。任何试图访问 `TDZ` 内部变量的行为都会以抛出运行时（runtime）错误而告终。当执行流达到变量声明的位置时，变量才会被移出 `TDZ` ，代表它们可以被安全使用。

##### 循环中的块级绑定（Block Binding in Loops）

> ==注意==：
>
> #### 作用域嵌套：
>
> **`{...}`中嵌套`for(...){...}`，`{...for(...){...}...}`外还可以访问 var 声明的变量**

---

## 概念区分

#### 变量与局部变量

#### 块作用域、循环作用域、函数作用域
