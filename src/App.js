import React, { useState } from 'react';
import './App.css';
import StorySelectionPage from './pages/StorySelection/StorySelectionPage';
import FormatSelectionPage from './pages/FormatSelection/FormatSelectionPage';
import CustomizationPage from './pages/Customization/CustomizationPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';

function App() {
  const [currentPage, setCurrentPage] = useState('story');

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <div className="app-navigation">
        <button 
          className={`nav-button ${currentPage === 'story' ? 'active' : ''}`}
          onClick={() => handleNavigation('story')}
        >
          Story Selection
        </button>
        <button 
          className={`nav-button ${currentPage === 'format' ? 'active' : ''}`}
          onClick={() => handleNavigation('format')}
        >
          Format Selection
        </button>
        <button 
          className={`nav-button ${currentPage === 'customize' ? 'active' : ''}`}
          onClick={() => handleNavigation('customize')}
        >
          Customization
        </button>
        <button 
          className={`nav-button ${currentPage === 'checkout' ? 'active' : ''}`}
          onClick={() => handleNavigation('checkout')}
        >
          Checkout
        </button>
      </div>

      {currentPage === 'story' && <StorySelectionPage onContinue={() => handleNavigation('format')} />}
      {currentPage === 'format' && <FormatSelectionPage onContinue={() => handleNavigation('customize')} />}
      {currentPage === 'customize' && <CustomizationPage onContinue={() => handleNavigation('checkout')} />}
      {currentPage === 'checkout' && <CheckoutPage />}
    </div>
  );
}

export default App;
