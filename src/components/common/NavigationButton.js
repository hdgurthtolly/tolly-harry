import React from 'react';
import PropTypes from 'prop-types';
import './NavigationButton.css';
import * as PhosphorIcons from 'phosphor-react';

const NavigationButton = ({ 
  onClick, 
  direction = 'forward', // 'forward' or 'back'
  state = 'active',      // 'active' or 'inactive'
  label = '',
  className = '',
  iconName = direction === 'forward' ? 'ArrowRight' : 'ArrowLeft',
  size = 'medium',
  ...props 
}) => {
  // Dynamically get the icon component from Phosphor
  const IconComponent = PhosphorIcons[iconName] || PhosphorIcons.ArrowRight;
  
  return (
    <div className={`nav-button-container ${className}`}>
      <button
        className={`navigation-button ${direction} ${state} ${size}`}
        onClick={state === 'active' ? onClick : undefined}
        disabled={state === 'inactive'}
        type="button"
        {...props}
      >
        <IconComponent size={24} weight="bold" className="nav-icon" />
      </button>
    </div>
  );
};

NavigationButton.propTypes = {
  onClick: PropTypes.func,
  direction: PropTypes.oneOf(['forward', 'back']),
  state: PropTypes.oneOf(['active', 'inactive']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string,
  className: PropTypes.string,
  iconName: PropTypes.string
};

export default NavigationButton; 