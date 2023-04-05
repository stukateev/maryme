import { Popup } from "./Popup.js";
const https = require('https-browserify');


// Импортируем модуль для отправки HTTPS запросов




// Задаем ID и API-ключ телеграм бота
const chatId = '-1001925427720';
const botApiKey = '5852823539:AAHZytb4P8NdFnXyDWYFXJxiUPsLjqHCh78';




export default class PopupChoseColor extends Popup {
    constructor ({ handleFormSubmit }, popupSelector) {
        super(popupSelector);
        this._popupForm = this._popup.querySelector('.popup__form');
        this._handleFormSubmit = handleFormSubmit;
        this._inputList = this._popup.querySelectorAll('.popup__input');
        this._submitButton = this._popup.querySelector('.popup__button');
        this._submitButtonText = this._submitButton.textContent;
    };

    _getInputValues() {
        this._alcohol = []
        this._formValues = {};

        this._inputList.forEach((input) => {
            console.log(input.name)
            if (input.name !== "alcohol") {
                console.log(input.id)
                if (input.name ==="invite"){
                    this._formValues[input.id] = input.checked;
                }
                else {this._formValues[input.id] = input.value;}

            }
            else {
                if (input.checked===true){
                    this._alcohol.push(input.id)
                }
            }
        });
        // Формируем текст сообщения
        let availabe=""
        if (this._formValues.yes === true){
            availabe = "Придут"
        }
        else {
            availabe = "Не придут"
        }
        console.log(this._formValues)
        let message = ` Оп, ответили \n\n Гости: ${this._formValues.guest}\n\n Наличие: ${availabe}\n\n Будут пить: ${this._alcohol}\n\n `;



        // Формируем URL для отправки сообщения
        const url = `https://api.telegram.org/bot${botApiKey}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
        // Отправляем HTTPS запрос на указанный URL
        https.get(url, (res) => {
            console.log('Ответ от сервера:', res.statusCode);
        }).on('error', (err) => {
            console.error('Ошибка отправки сообщения:', err);
        });


        return this._formValues;
    };

    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
        super.setEventListeners();
    };

    close() {
        this._popupForm.reset();
        super.close();
    };

    renderLoading(isLoading) {
        if (isLoading) {
            this._submitButton.textContent = 'Сохранить...';

        } else {
            this._submitButton.textContent = this._submitButtonText;

        }
    }
}