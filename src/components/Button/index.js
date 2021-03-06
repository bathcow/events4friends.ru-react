import React from 'react';
import cn from 'classnames';
import './Button.css';

const Button = ({
  tag: Tag = 'button',
  style,
  onPress = () => {},
  icon,
  children,
  classList = [],
  className = '',
}) => {
  return (
    <Tag
      className={cn('welcomeview__button', className, [...classList])}
      onClick={onPress}
      style={style}
    >
      <div className="welcomeview__image__wrapper">
        <img src={icon} alt={children} className="welcomeview__image" />
      </div>
      {children && <div className="welcomeview__text">{children}</div>}
    </Tag>
  );
};

export default Button;
