export const choseColorForm = document.forms["chose-color-form"];
export const backgroundInput = choseColorForm.elements["background-input"];
export const textInput = choseColorForm.elements["text-input"];
export const graveInput = choseColorForm.elements["grave-input"];
export const backgroundPage = document.querySelector(".root");
export const textPage = [
                            document.querySelector(".wedding-party__description-text-pink"),
                            document.querySelector(".date__description-text")
                        ]
export const gravePage = [
                            document.querySelector(".wedding-party__title"),
                            document.querySelector(".wedding-party__description"),
                            document.querySelector(".date__description"),
                        ]
export const buttonChoseColor = document.querySelector(".header__chose-color");
export const selectors = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}