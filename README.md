# MobileKeyboard 移动端键盘

[![npm](https://img.shields.io/npm/v/mobile-keyboard.svg)](https://www.npmjs.com/package/mobile-keyboard)
[![npm](https://img.shields.io/npm/dt/mobile-keyboard.svg)](https://www.npmjs.com/package/mobile-keyboard)
[![GitHub license](https://img.shields.io/github/license/lushuhao/mobile-keyboard.svg)](https://github.com/lushuhao/mobile-keyboard/blob/master/LICENSE)

- ES6开发、不依赖任何框架和库的轻量级移动端安全键盘
- 支持顺序和乱序输入

## 开始上手

### 安装

```shell
npm i -D mobile-keyboard
```

### 使用示例

- **原生 JavaScript**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>安全键盘</title>

  <style>
    body {
      margin: 0;
    }

    @keyframes typing {
      from {width: 0}
    }

    @keyframes caret {
      50% {border-color: transparent;}
    }
    
    .inputWrapper {
      display: flex;
      align-items: center;
      border: 1px solid #ececec;
      padding: 0 5px;
      line-height: 30px;
      margin: 10px 20px;
      width: 50%;
    }

    #values {
      display: inline-block;
      border-right: .05em solid;
      width: 1px;
      height: 1em;
      line-height: 1;
      -webkit-animation: typing 6s, caret 1s infinite;
      -o-animation: typing 6s, caret 1s infinite;
      animation: typing 6s, caret 1s infinite;
    }
  </style>
</head>
<body>
<div class="inputWrapper">请输入：
  <div id="values"></div>
</div>
<div id="app"></div>
<script src="./SafeKeyBoard.js"></script>
</body>
</html>
```

```javascript
// SafeKeyboard.js
import SafeKeyboard from './index';

const inputWrapper = document.querySelector('.inputWrapper')
const valuesEl = document.querySelector('#values')

function outputValue(value) {
  console.log(value); // SafeKeyboard return value
  valuesEl.innerHTML = value;
  typing(value)
}

function typing(value) { // 打字动画
  valuesEl.style.width = value.length ? value.length + 'ch' : '1px'
  valuesEl.style.animationTimingFunction = 'steps('+value.length+'),steps(1)'
}

inputWrapper.addEventListener('click', (e) => {
  safeKeyBoard.showKeyBoard();
})

const safeKeyBoard = new SafeKeyboard(
  {
    el: document.querySelector('#app'),
    type: 'normal',
    className: 'container',
    outputValue: outputValue
  }
);
```

## 开源证书

[**The MIT License**](http://opensource.org/licenses/MIT).
