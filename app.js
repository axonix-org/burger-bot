const tg = window.Telegram.WebApp;

// Расширяем на весь экран
tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', event => {
    console.log('Кнопка была кликнута');
    console.log(event.target); 

    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
        tg.MainButton.setText(`Вы выбрали товар ${event.target.id}`);
        item = event.target.id;
        tg.MainButton.show();
    }
  });
});

Telegram.WebApp.onEvent('mainButtonClicked', () => {
    tg.sendData(item);
});

const userCard = document.querySelector('#usercard');
const p = document.createElement('p');
p.innerText = `${tg.initDataUnsafe.user.first_name} 
                ${tg.initDataUnsafe.user.last_name} 
                ${tg.initDataUnsafe.user.phone} 
                ${tg.initDataUnsafe.user.username}
                ${tg.initDataUnsafe.user.id}`;

userCard.appendChild(p);
