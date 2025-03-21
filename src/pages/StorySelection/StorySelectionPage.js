import React, { useState, useEffect } from 'react';
import Button from '../../components/common/Button';
import './StorySelectionPage.css';

// Import local images (as fallbacks)
import cover1 from '../../assets/images/Cover 1.png';
import cover2 from '../../assets/images/Cover 2.png';
import cover3 from '../../assets/images/Cover 3.png';
import bookIcon from '../../assets/icons/Book.png';

// When using the proxy in package.json, we can use relative URLs
const API_URL = '';

/**
 * StorySelectionPage - Displays a page for users to select a story
 */
const StorySelectionPage = ({ onContinue, magicToken }) => {
  // State for story options from API
  const [storyOptions, setStoryOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Fallback images to use if image_url is null
  const fallbackImages = [cover1, cover2, cover3];
  
  // Function to fetch story options from API
  const fetchStoryOptions = async () => {
    try {
      setLoading(true);
      console.log('Fetching story options with magic token:', magicToken);
      
      // For testing purposes, if no magicToken is provided, use a default value or mock data
      if (!magicToken) {
        console.log('No magic token provided, using mock data');
        setStoryOptions([
          {
            id: 1,
            image: cover1,
            summary: 'Eine Geschichte von Marco, für Emma'
          },
          {
            id: 2,
            image: cover2,
            summary: 'Eine Geschichte von Marco, für Harry'
          },
          {
            id: 3,
            image: cover3,
            summary: 'Eine Geschichte von Marco, für Emma'
          }
        ]);
        setLoading(false);
        return;
      }
      
      // Fetch data from API
      console.log(`Making API request to: ${API_URL}/preview-order/${magicToken}`);
      const response = await fetch(`${API_URL}/preview-order/${magicToken}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      console.log('API response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', errorText);
        throw new Error(`API request failed with status ${response.status}: ${errorText}`);
      }
      
      const data = await response.json();
      console.log('API response data:', data);
      
      // Map the API response to the format expected by the component
      const mappedOptions = data.book_options ? data.book_options.map((option, index) => ({
        id: index + 1,
        image: option.image_url || fallbackImages[index % fallbackImages.length],
        summary: option.summary || option.title,
        title: option.title
      })) : [];
      
      console.log('Mapped options:', mappedOptions);
      
      if (mappedOptions.length === 0) {
        console.warn('No book options found in API response');
      }
      
      setStoryOptions(mappedOptions);
    } catch (err) {
      console.error('Error fetching story options:', err);
      setError('Failed to load story options. Please try again later.');
      
      // Fallback to mock data in case of error
      setStoryOptions([
        {
          id: 1,
          image: cover1,
          summary: 'Eine Geschichte von Marco, für Emma'
        },
        {
          id: 2,
          image: cover2,
          summary: 'Eine Geschichte von Marco, für Harry'
        },
        {
          id: 3,
          image: cover3,
          summary: 'Eine Geschichte von Marco, für Emma'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };
  
  // Fetch story options when component mounts
  useEffect(() => {
    fetchStoryOptions();
  }, [magicToken]);

  const handleSelectStory = (storyId) => {
    console.log(`Selected story with ID: ${storyId}`);
    // Navigate to the next page if onContinue prop is provided
    if (onContinue) {
      onContinue();
    }
  };

  return (
    <div className="story-selection-container">
      <div className="story-selection-header">
        <div className="preview-tag">Vorschau</div>
        <h1>Geschichtenauswahl</h1>
        <p className="subtitle text-title-small">Wähle eine Geschichte für die Bestellung aus</p>
      </div>
      
      {loading ? (
        <div className="loading-container">
          <p>Loading story options...</p>
        </div>
      ) : error ? (
        <div className="error-container">
          <p>{error}</p>
        </div>
      ) : (
        <div className="stories-grid">
          {storyOptions.map(story => (
            <div key={story.id} className="story-wrapper">
              <div 
                className="story-card" 
                onClick={() => handleSelectStory(story.id)}
              >
                <div className="story-number">{story.id}</div>
                <div className="story-content">
                  <img src={story.image} alt={`Story cover ${story.id}`} className="story-image" />
                  <div className="story-info">
                    {story.title && <h3 className="story-title">{story.title}</h3>}
                    <h4 className="story-summary">{story.summary}</h4>
                    <Button 
                      variant="primary" 
                      size="large" 
                      iconImg={bookIcon}
                    >
                      Auswählen
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StorySelectionPage; 