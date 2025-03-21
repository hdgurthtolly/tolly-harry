import React, { useState, useEffect } from 'react';
import './App.css';
import StorySelectionPage from './pages/StorySelection/StorySelectionPage';
import FormatSelectionPage from './pages/FormatSelection/FormatSelectionPage';
import CustomizationPage from './pages/Customization/CustomizationPage';
import CheckoutPage from './pages/Checkout/CheckoutPage';
import PageNavigation from './components/common/PageNavigation';
import useScrollToTop from './hooks/useScrollToTop';

function App() {
  const [currentPage, setCurrentPage] = useState('story');
  const [magicToken, setMagicToken] = useState(null);
  
  // Use the custom hook to scroll to top when page changes
  useScrollToTop(currentPage);
  
  // Extract magic token from URL if present
  useEffect(() => {
    // Check if there's a magic token in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    
    if (tokenFromUrl) {
      setMagicToken(tokenFromUrl);
      console.log('Magic token found in URL:', tokenFromUrl);
    } else {
      // For testing purposes only - in production, you would redirect to an error page
      console.log('No magic token found in URL, using test token');
      
      // Extract the token from the provided link
      // The link format is: https://orders.tolly.io/preview-order/TOKEN
      const providedLink = 'https://orders.tolly.io/preview-order/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoZGd1cnRoQGdtYWlsLmNvbSIsIm9yZGVyIjoiYjMxM2ZmZjctMzU1ZS00OGRmLWJlYjUtYTc5NGRjYzBmYTMwIiwiZXhwIjoxNzQyODE2NDg2fQ.fsfsZcOkG03W9UG6Ecm0RZSj9oES0IkLfd8WRYcubGg';
      
      // Extract the token part (everything after the last slash)
      const parts = providedLink.split('/');
      const testToken = parts[parts.length - 1];
      
      console.log('Using extracted token:', testToken);
      setMagicToken(testToken);
    }
  }, []);

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
        return <StorySelectionPage 
          onContinue={() => handleNavigation('format')} 
          magicToken={magicToken} 
        />;
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
