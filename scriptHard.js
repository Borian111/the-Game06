'use strict'

function xxxGame(){
       let n=0;
function game(x){    
        
    function gameX(){//счётчик попыток
        n=n+1;
        let r=10-n;
        if (r===0) {
            alert('Попытки зкончились. хотите сыграть ещё?')
            xxxGame();
            }
        let y = prompt('Угадай число от 1 до 100');
        let eee = function start() {//Проверка: число или нет 
            return !isNaN(parseFloat(y)) && isFinite(y);
            }
                 if(y===null) {
                   alert("Игра окончена");
                 } else if(y>x) {
                   alert('Загаданное число меньше, осталось '+ r +'попыток');
                   gameX();
                 } else if(y<x) {
                   alert('Загаданное число больше, осталось '+r+ 'попыток');
                   gameX();
                 } else if(y==x) {
                   alert('Поздравляю, Вы угадали!!! Хотели бы сыграть ещё?');
                   xxxGame(); 
                 } else if(!eee(y)) {
                   alert('Введи число!');
                   n=n-1;
                   gameX();    
                 }
            } 
    
gameX();
}
let x = function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);}
game(x(1,100));
}
xxxGame();
      




