let tg = window.Telegram.WebApp;

let send_reg = document.querySelector('[name="send_reg"]'),
    buy_item = document.querySelectorAll('[name="buy_item"]'); // создаем переменную с информацией обо всех кнопках Купить

send_reg.addEventListener('click', () => {
    let user_name = document.querySelector('[name="user_full_name"]').value,
        user_email = document.querySelector('[name="user_email"]').value,
        user_tel = document.querySelector('[name="user_tel"]').value;

    let user_data = {
        data_type: 'user_sub',
        data_name: user_name,
        data_email: user_email,
        data_tel: user_tel
    }
    tg.sendData(JSON.stringify(user_data));
    tg.close();
})

buy_item.forEach(item => { // перебираем все кнопки Купить
    item.addEventListener('click', () => { // перехватываем событие нажатия на любую кнопку Купить
        let button_block_info = item.parentNode; // создаем переменную с информацией о блоке, в которой находится любая кнопка Купить
        let article_name = button_block_info.parentNode.getAttribute('name'); // создаем переменную с названием карточки товара
        
        let article_data = { // создаем объект с передаваемой информацией
            data_type: 'buy_item', // вид/обозначение передаваемой информации
            data_name: article_name // название товара
        }
        tg.sendData(JSON.stringify(article_data));
        tg.close();
    })
})
