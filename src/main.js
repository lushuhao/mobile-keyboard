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

const safeKeyBoard = new SafeKeyboard({
    el: document.querySelector('#app'),
    type: 'random',
    className: 'container',
    outputValue: outputValue
  });