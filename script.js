'use strict'

/*Программа должны быть выполнена с помощью рекурсии, без единого цикла.
Загаданное число должно храниться «в замыкании»*/



function game(){    
    //спрашивает пользователя: "Угадай число от 1 до 100".
    let y = prompt('Угадай число от 1 до 100');
            let x=9;
    //Проверка: число или нет        
            let eee = function start() {
                return !isNaN(parseFloat(y)) && isFinite(y);
            }
            
       
/*если пользователь нажимает "Отмена", то игра заканчивается
 и выводится сообщение "Игра окончена".*/                
                  if(y===null) {
                  alert("Игра окончена");
/*если пользовательское число больше, то бот выводит "Загаданное число меньше" и предлагает ввести новый вариант;
— если пользовательское число меньше, то бот выводит "Загаданное число больше" и предлагает ввести новый вариант;*/
                  } else if(y>x) {
                    alert('Загаданное число меньше');
                    game();
                } else if(y<x) {
                    alert('Загаданное число больше');
                    game();
                             
/*если пользовательское число равно загаданному,
 то игра заканчивается и выводит сообщение  "Поздравляю, Вы угадали!!!". */              
            } else if(y==x) {
                    alert('Поздравляю, Вы угадали!!!');
            
/*если пользователь ввел не число, то выводит сообщение "Введи число!"
 и предлагает ввести новый вариант;*/            
                } else if(!eee(y)) {
                    alert('Введи число!');
                    game();    
               
                    
}
}   
    
 game();


      




