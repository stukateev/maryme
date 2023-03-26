export  default class Colors {
    constructor({ backgroundField, textField, graveField }) {
        this._background = backgroundField;
        this._text = textField;
        this._graver = graveField;
    };

    getUserInfo() {
        return {
            background: this._background.style.backgroundColor,
            text: this._text[0].style.color,
            graver: this._graver[0].style.color
        };
    };

    setUserInfo(userData) {
        this._background.style.backgroundColor = `\"${userData.background}\"` ;
        this._text.forEach(element => element.style.color = `\'${userData.text}\'`);
        this._graver.forEach(element => element.style.color = `\'${userData.graver}\
         '`);
    }
};