import React, { useState } from 'react';
import './App.css';
import StorySelectionPage from './pages/StorySelection/StorySelectionPage';
import FormatSelectionPage from './pages/FormatSelection/FormatSelectionPage';
import CustomizationPage from './pages/Customization/CustomizationPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PageNavigation from './components/common/PageNavigation';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('story');
  
  // Use the custom hook to scroll to top when page changes
  useScrollToTop(currentPage);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleBack = () => {
    // Handle navigation backward based on current page
    switch (currentPage) {
      case 'format':
        setCurrentPage('story');
        break;
      case 'customize':
        setCurrentPage('format');
        break;
      case 'checkout':
        setCurrentPage('customize');
        break;
      default:
        break;
    }
  };

  const handleForward = () => {
    // Handle navigation forward based on current page
    switch (currentPage) {
      case 'story':
        setCurrentPage('format');
        break;
      case 'format':
        setCurrentPage('customize');
        break;
      case 'customize':
        setCurrentPage('checkout');
        break;
      default:
        break;
    }
  };

  // Render content based on current page
  const renderPageContent = () => {
    switch (currentPage) {
      case 'story':
        return <StorySelectionPage onContinue={() => handleNavigation('format')} />;
      case 'format':
        return <FormatSelectionPage onContinue={() => handleNavigation('customize')} />;
      case 'customize':
        return <CustomizationPage onContinue={() => handleNavigation('checkout')} />;
      case 'checkout':
        return <CheckoutPage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <div className="page-content">
        {renderPageContent()}
        
        {/* Add navigation buttons that scroll with the page content */}
        <PageNavigation 
          currentPage={currentPage}
          onBack={handleBack}
          onForward={handleForward}
          backLabel="Back"
          forwardLabel="Next"
        />
      </div>
    </div>
  );
}

export default App;
