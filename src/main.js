const div1 = dom.create(`<div>const div = dom.find('#test>.red')[0] // 获取对应的元素<br>
dom.style(div, 'color', 'red') // 设置 div.style.color<br>
<br>
const divList = dom.find('.red') // 获取多个 div.red 元素<br>
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素</div>`);
console.log(div1);

dom.after(test, div1);
