import React from 'react';
import Button from '../../components/common/Button';
import LinkIcon from '../../components/common/icons/LinkIcon';
import './StorySelectionPage.css';

/**
 * StorySelectionPage - Displays a page for users to select a story
 */
const StorySelectionPage = () => {
  // Mock data for story options
  const storyOptions = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      summary: 'Eine Geschichte von Marco, für EmmaEine Geschichte von Marco, für EmmaEine Geschichte von Marco, für Emma'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1503919005314-30d93d07c272?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      summary: 'Eine Geschichte von Marco, für Harry'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      summary: 'Eine Geschichte von Marco, für Emma'
    }
  ];

  const handleSelectStory = (storyId) => {
    console.log(`Selected story with ID: ${storyId}`);
    // Add navigation or state management logic here
  };

  return (
    <div className="story-selection-container">
      <div className="story-selection-header">
        <div className="preview-tag text-subtitle">Vorschau</div>
        <h1>Geschichtenauswahl</h1>
        <p className="subtitle text-subtitle">Wähle eine Geschichte für die Bestellung aus</p>
      </div>
      
      <div className="stories-grid">
        {storyOptions.map(story => (
          <div key={story.id} className="story-wrapper">
            <div className="story-card">
              <div className="story-number">{story.id}</div>
              <div className="story-content">
                <img src={story.image} alt={story.title} className="story-image" />
                <div className="story-info">
                  <h4 className="story-summary">{story.summary}</h4>
                  <Button 
                    variant="primary" 
                    size="large" 
                    onClick={() => handleSelectStory(story.id)}
                    icon={<LinkIcon />}
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