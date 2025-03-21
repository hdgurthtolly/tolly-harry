import React from 'react';
import PropTypes from 'prop-types';
import NavigationButton from './NavigationButton';
import './PageNavigation.css';

const PageNavigation = ({ 
  currentPage,
  onBack,
  onForward,
  backLabel = '',
  forwardLabel = ''
}) => {
  // Determine which buttons to show based on the current page
  const showBackButton = currentPage !== 'story';
  const showForwardButton = currentPage === 'customize';

  return (
    <div className="page-navigation">
      {showBackButton && (
        <NavigationButton 
          direction="back" 
          state="active" 
          onClick={onBack}
          label={backLabel}
          iconName="ArrowLeft"
          size="large"
        />
      )}
      {showForwardButton && (
        <NavigationButton 
          direction="forward" 
          state="active" 
          onClick={onForward}
          label={forwardLabel}
          iconName="ArrowRight"
          size="large"
        />
      )}
    </div>
  );
};

PageNavigation.propTypes = {
  currentPage: PropTypes.oneOf(['story', 'format', 'customize', 'checkout']).isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func,
  backLabel: PropTypes.string,
  forwardLabel: PropTypes.string
};

export default PageNavigation; 