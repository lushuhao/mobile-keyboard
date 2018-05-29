import './index.scss'

class SafeKeyBoard {
  /**
   * 安全数字键盘
   * @param el dom挂载点
   * @param type 键盘类型，normal，random
   * @param title 键盘标题
   * @param complete 完成，关闭键盘
   * @param className 外部控制样式
   * @param outputValue 回调函数，键盘的输出值
   */
  constructor({el, type, title = '安全键盘', complete = '完成', className, outputValue}) {
    this.value = '';
    this.el = el;
    this.type = type;
    this.title = title;
    this.complete = complete;
    this.className = className;
    this.outputValue = outputValue;
    this.init()
  }

  static shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  boxClassName(name) {
    return `keyboard-box ${this.className} ${name}`
  }

  hideKeyBoard() {
    this.boxEl.className = this.boxClassName('hidden');
  }

  showKeyBoard() {
    if (this.type === 'random') {
      this.init()
    }
    this.boxEl.className = this.boxClassName('visible');
  }

  handleClick(content, action) {
    switch (action) {
      case 'complete':
        this.hideKeyBoard();
        break;
      case 'delete':
        this.value = this.value.substring(0, this.value.length - 1);
        break;
      case 'value':
        this.value += content;
        break
    }

    this.outputValue(this.value)
  }

  initKeys() {
    let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (this.type === 'random') {
      numList = SafeKeyBoard.shuffle(numList) // 打乱数组
    }

    this.keys = numList.map((item) => {
      return {
        'content': String(item),
        'action': 'value'
      }
    })

    const leftBottomKey = {
      content: '.',
      action: 'value'
    }

    const rightBottomKey = {
      content: '&larr;',
      action: 'delete'
    }

    this.keys = [...this.keys.slice(0, -1), leftBottomKey, this.keys[this.keys.length - 1], rightBottomKey]
  }

  renderKeyBoard() {
    const keyboards = this.keys.map((item) => {
      return `<div class="key-item" data-action="${item.action}" data-content="${item.content}">${item.content}</div>`
    })
    this.el.innerHTML = `<div id="keyboardBox" class="${this.boxClassName()}">
        <header class="keyboard-title">
           ${this.title}
           <span class="complete" data-action="complete">${this.complete}</span>
        </header>
        ${keyboards.join('')}
     </div>`
    this.boxEl = document.getElementById('keyboardBox')
    this.boxEl.addEventListener('click', (e) => {
      const {content, action} = e.target.dataset
      this.handleClick(content, action)
    })
  }

  init() {
    this.initKeys()
    this.renderKeyBoard()
  }
}

export default SafeKeyBoard