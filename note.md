### React

1. React是16+的Fiber架构
2. React = 组件化 + JSX + vdom

#### 1.组件化

1. 三大框架和WebComponent都对组件化有自己的理解，实现组件化时有细节上的不同

#### 2.JSX

1. JSX扩展了js的语法，让我们能以一等公民的方式使用组件
2. JSX依赖babel-loader，将jsx的语句转换为`React.creatElement()`
3. JSX分为两部分， 第一部分是，在js里直接写的html标记，会被babel-loader转换为React.createElement()语句 第二部分是，React.createElement函数的实现
   第一个参数，小写开头的标记会传入字符串，大写开头的标记会传入类 第二个参数，标记上写的属性，作为对象传入 之后的参数，是子标记

#### 3.vdom

1. vdom是对dom操作有突破性的东西，vue2.0也加入了vdom功能
2. js已经挺快了，页面慢主要是慢在dom操作上
3. js操作vdom，消解重复的来回的操作(这样的操作实际上一帧里只能显示一次)

#### 4.webpack

1. 要使用`webpack`命令，需要装`webpack-cli`
2. webpack的作用是将多个js文件，打包为一个js文件，例如，某个js文件requier引入了别的js文件， webpack就会将它们打包为一个js，原理是用eval()

#### 5.babel

1. 使用babel-loader还需要`@babel/core`和`@babel/preset`
2. babel的作用是将高等级的出位的js语句，转换为低等级的保守的js语句
3. 其中有个插件`@babel/plugin-transform-react-jsx`可以转译jsx语法

#### 6.npm

1. `npm init` 初始化package.json文件

#### 9.其它

1. 一等公民：可以作为变量、函数参数、函数返回值、来使用
2. 伪数组：key值是0/1/2的对象
2. 有时候一些非常动态的代码是以字符串的形式通过 eval() 函数在当前 Javascript context 中创建出来， 而不是作为一个独立的 js 文件加载的。这样你在左边的内容区就找不到这个文件，因此很难调试。 其实我们只要在
   eval 创建的代码末尾添加一行 `//# sourceURL=webpack:///./main.js`
   就可以给这段代码命名（浏览器会特殊对待这种特殊形式的注释），这样它就会出现在左侧的内容区了， 就好像你加载了一个指定名字的 js 文件一样，可以设置断点和调试了 除此之外，在一些.js文件里写该行语句，也会达成同样的效果


4. 在js里直接写html标记， 会被babel-loader转换为React.createElement()语句 并且， 第一个参数，小写开头的标记会传入字符串，大写开头的标记会传入类 第二个参数，标记上写的属性，作为对象传入
   createElement()判断传入的
