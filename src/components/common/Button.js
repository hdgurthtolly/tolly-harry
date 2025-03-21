import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

// Default book icon
import defaultIcon from '../../assets/icons/Book.png';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
  type = 'button',
  icon = null,
  iconImg = defaultIcon, // New prop for using image as icon
  ...props 
}) => {
  return (
    <button
      className={`custom-button ${variant} ${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
      {/* If icon component is provided, use it. Otherwise, use image if iconImg is provided */}
      {icon ? (
        <span className="button-icon">{icon}</span>
      ) : iconImg && (
        <span className="button-icon">
          <img src={iconImg} alt="" className="button-icon-img" />
        </span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  icon: PropTypes.node,
  iconImg: PropTypes.string, // New prop type for image icon
};

export default Button; 