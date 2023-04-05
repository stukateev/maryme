import './index.css';
import '../../fonts/fonts.css';
import "../../Calendar"
import FormValidator from '../../FormValidator.js';
import PopupChoseColor from "../../PopupChoseColor.js";
import Colors from "../../Colors.js";

import {
    choseColorForm,
    backgroundInput,
    textInput,
    graveInput,
    backgroundPage,
    textPage,
    gravePage,
    buttonApply,
    selectors,
} from "../../constants"

const popupChoseColor = new PopupChoseColor({
    handleFormSubmit: (formData) => {
        popupChoseColor.renderLoading(true);
        colors.setUserInfo(formData);
        popupChoseColor.close();
        popupChoseColor.renderLoading(false);
    }
}, '.popup__chose-color')


buttonApply.addEventListener('click', () => {
    popupChoseColor.open();

    // popupEditValidation.resetValidation()
});

const colorsField = {
    backgroundField: backgroundPage,
    textField: textPage,
    graveField: gravePage
}
const colors = new Colors(colorsField);

const random = (min, max) => {
    const rand = min + Math.random() * (max - min + 1);
    return Math.floor(rand);
}

// найдем кнопку
const btn = document.querySelector('.popup__box_no');
// повесим обработчик событий
btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    btn.style.position = "absolute"
    btn.style.left = `${random(20, 80)}%`;
    btn.style.top = `${random(50, 80)}%`;
});



var checkboxes = document.querySelectorAll('.popup__input_type_checkbox-invite');
for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function() {
        var checkboxesWithName = document.querySelectorAll('input[name="' + this.getAttribute('name') + '"]');

        for (var j = 0; j < checkboxesWithName.length; j++) {
            checkboxesWithName[j].checked = false;
        }
        this.checked = true;

    });
}

