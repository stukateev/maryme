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
    buttonChoseColor,
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


buttonChoseColor.addEventListener('click', () => {
    popupChoseColor.open();
    const inputValues = colors.getUserInfo();
    backgroundInput.value = inputValues.background;
    textInput.value = inputValues.text;
    graveInput.value = inputValues.grave;
    // popupEditValidation.resetValidation()
});

const colorsField = {
    backgroundField: backgroundPage,
    textField: textPage,
    graveField: gravePage
}
const colors = new Colors(colorsField);