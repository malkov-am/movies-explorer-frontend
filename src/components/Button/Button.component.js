import React from 'react';
import './Button.styles.scss';

export const BUTTON_TYPE_CLASSES = {
    sizeS: 'size-s',
    sizeM: 'size-m',
    sizeL: 'size-l',
    link: 'link',
    account: 'account',
    like: 'like',
    dislike: 'dislike',
  };

  const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.sizeS]: buttonSizeS,
    [BUTTON_TYPE_CLASSES.sizeM]: buttonSizeM,
    [BUTTON_TYPE_CLASSES.sizeL]: buttonSizeL,
    [BUTTON_TYPE_CLASSES.link]: buttonLink,
    [BUTTON_TYPE_CLASSES.account]: buttonAccount,
    [BUTTON_TYPE_CLASSES.like]: buttonLike,
    [BUTTON_TYPE_CLASSES.dislike]: buttonDislike,
  }[buttonType]);

const Button = ({ buttonType, children}) => {
    const CustomButton = getButton(buttonType);
    return (
        <CustomButton>
        {children}
      </CustomButton>
    );
};

export default Button;
