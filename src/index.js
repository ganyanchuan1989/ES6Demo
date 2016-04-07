/**
 * Created by KJ on 2016/3/10.
 */

require('./style/index.less');


var sum = (num1, num2) => { return num1 + num2; }
console.log(sum(1,2));
console.log(sum(1,2));
var btn = document.getElementById('btn')
btn.onclick = function(){
    alert("btn click AA");
}

