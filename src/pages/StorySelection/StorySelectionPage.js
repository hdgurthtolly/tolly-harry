import React from 'react';
import Button from '../../components/common/Button';
import './StorySelectionPage.css';

// Import local images
import cover1 from '../../assets/images/Cover 1.png';
import cover2 from '../../assets/images/Cover 2.png';
import cover3 from '../../assets/images/Cover 3.png';
import bookIcon from '../../assets/icons/Book.png';

/**
 * StorySelectionPage - Displays a page for users to select a story
 */
const StorySelectionPage = ({ onContinue }) => {
  // Mock data for story options with local images
  const storyOptions = [
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
  ];

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
      
      <div className="stories-grid">
        {storyOptions.map(story => (
          <div key={story.id} className="story-wrapper">
            <div className="story-card">
              <div className="story-number">{story.id}</div>
              <div className="story-content">
                <img src={story.image} alt={`Story cover ${story.id}`} className="story-image" />
                <div className="story-info">
                  <h3 className="story-summary">{story.summary}</h3>
                  <Button 
                    variant="primary" 
                    size="large" 
                    onClick={() => handleSelectStory(story.id)}
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
    </div>
  );
};

export default StorySelectionPage; 