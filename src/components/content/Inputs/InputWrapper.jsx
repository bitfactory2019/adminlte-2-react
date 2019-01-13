import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Label from './Label';
import { Sizes } from '../../PropTypes';
import { splitIcon } from '../../Utilities';


class InputWrapper extends Component {
  state = {}

  render() {
    const {
      iconLeft, iconRight, addonLeft, addonRight, inputType, size,
      checkboxLeft, checkboxRight, radioLeft, radioRight, buttonLeft, buttonRight,
      width, children
    } = this.props;
    if (iconLeft || iconRight || addonLeft || addonRight
      || checkboxLeft || checkboxRight || radioLeft || radioRight
      || buttonLeft || buttonRight) {
      const groupClasses = [
        'input-group',
        size ? `input-group-${size}` : null,
      ].filter(p => p).join(' ');
      const iconLeftClass = splitIcon(iconLeft);
      const iconRightClass = splitIcon(iconRight);
      return (
        <Label {...this.props}>
          <div className={groupClasses} style={{ width }}>
            {addonLeft && <span className="input-group-addon">{addonLeft}</span>}
            {iconLeft && <span className="input-group-addon"><FontAwesomeIcon icon={iconLeftClass} /></span>}
            {checkboxLeft && <span className="input-group-addon"><input type="checkbox" /></span>}
            {radioLeft && <span className="input-group-addon"><input type="radio" /></span>}
            {buttonLeft && <div className="input-group-btn">{buttonLeft}</div>}
            {children}
            {addonRight && <span className="input-group-addon">{addonRight}</span>}
            {iconRight && <span className="input-group-addon"><FontAwesomeIcon icon={iconRightClass} /></span>}
            {checkboxRight && <span className="input-group-addon"><input type="checkbox" /></span>}
            {radioRight && <span className="input-group-addon"><input type="radio" /></span>}
            {buttonRight && <div className="input-group-btn">{buttonRight}</div>}
          </div>
        </Label>
      );
    }
    return (
      <Label {...this.props}>
        {children}
      </Label>
    );
  }
}

InputWrapper.propTypes = {
  iconLeft: PropTypes.string,
  iconRight: PropTypes.string,
  addonLeft: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  addonRight: PropTypes.oneOf([PropTypes.string, PropTypes.node]),
  inputType: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Sizes),
  checkboxLeft: PropTypes.bool,
  checkboxRight: PropTypes.bool,
  radioLeft: PropTypes.bool,
  radioRight: PropTypes.bool,
  buttonLeft: PropTypes.node,
  buttonRight: PropTypes.node,
  rows: PropTypes.number,
  width: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onSelect: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyPress: PropTypes.func,
  ...Label.propTypes,
};

InputWrapper.defaultProps = {
  iconLeft: null,
  iconRight: null,
  addonLeft: null,
  addonRight: null,
  inputType: 'text',
  name: null,
  id: null,
  placeholder: null,
  value: null,
  disabled: false,
  size: null,
  checkboxLeft: false,
  checkboxRight: false,
  radioLeft: false,
  radioRight: false,
  buttonLeft: null,
  buttonRight: null,
  rows: null,
  width: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  onSelect: null,
  onKeyDown: null,
  onKeyUp: null,
  onKeyPress: null,
};

export default InputWrapper;