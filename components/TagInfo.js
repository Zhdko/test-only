class TagInfo {
  constructor({ textInfo, color, xPos, yPos }, templateSelector) {
    (this._textInfo = textInfo), (this._color = color), (this._xPos = xPos), (this._yPos = yPos), (this._templateSelector = templateSelector);
  }

  _getTemplate() {
    return document.getElementById(this._templateSelector).content.querySelector('.tag').cloneNode(true);
  }

  generateTag() {
    this._tag = this._getTemplate();
    this._tag.querySelector('.tag__text').textContent = this._textInfo;
    this._tag.style.setProperty('left', `${this._xPos / 19.2}%`);
    this._tag.style.setProperty('top', `${this._yPos / 10.8}%`);
    this._tag.classList.add(`tag_color_${this._color}`);
    return this._tag;
  }
}

export default TagInfo;
