'use strict'

function theGame() {
        function getRandomInt(min, max) {//рандомайзер
            return parseFloat(Math.floor(Math.random() * (max - min)) + min);
        }

       let x = getRandomInt(1, 100);
       function question(){    
            let y=prompt('Угадай число от 1 до 100');
            let eee = function start() {//Проверка: число или нет
                return !isNaN(parseFloat(y)) && isFinite(y);
            };
                  if(y===null) {
                  alert("Игра окончена");
                  } else if(y>x) {
                    alert('Загаданное число меньше');
                    question();
                  } else if(y<x) {
                    alert('Загаданное число больше');
                    question();
                  } else if(y==x) {
                    alert('Поздравляю, Вы угадали!!!');
                    return;
                  } else if(!eee(y)) {
                    alert('Введи число!');
                    question();    
                  }
        }
        question(x);
 
}  
theGame();