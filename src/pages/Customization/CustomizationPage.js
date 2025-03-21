import React, { useState } from 'react';
import Button from '../../components/common/Button';
import './CustomizationPage.css';

// Import local images
import icon1 from '../../assets/icons/Chat.png';

// Format price helper function
const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
};

const CustomizationPage = ({ onContinue }) => {
    const [message, setMessage] = useState('willkommen in deinem einzigartigen Tolly-Buch!');
    const [title, setTitle] = useState('Liebe Thea');
    
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };
    
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSelectCustomization = () => {
        console.log('Customization selected with message:', message);
        // Navigate to the next page if onContinue prop is provided
        if (onContinue) {
            onContinue();
        }
    };

    return (
        <div className="customization-container">
            <div className="customization-header">
                <div className="preview-tag">Widmung</div>
                <h1>Add a personal message</h1>
                <p className="subtitle text-title-small">Write a message to personalize your book. We'll print it on the second page.</p>
            </div>

            <div className="customization-content">
                <div className="preview-section">
                    <div className="book-page">
                        <div className="book-content">
                            <div className="dedication-quotes dedication-quotes-left">❝</div>
                            <div className="dedication-text">
                                <p className="dedication-name">{title},</p>
                                <p className="dedication-message">
                                    {message
                                        .replace(/^Liebe [^,]+,\s*\n+/i, '') // Remove the greeting as we display it separately
                                        .split('\n')
                                        .map((line, i) => (
                                            <span key={i}>
                                                {line}
                                                <br />
                                            </span>
                                        ))}
                                </p>
                            </div>
                            <div className="dedication-quotes dedication-quotes-right">❞</div>
                        </div>
                    </div>
                </div>
                
                <div className="input-section">
                    <div className="form-group">
                        <label htmlFor="dedication-title">Title</label>
                        <input 
                            type="text" 
                            id="dedication-title" 
                            value={title} 
                            onChange={handleTitleChange}
                            placeholder="Enter title"
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="dedication-message">Your message</label>
                        <textarea 
                            id="dedication-message" 
                            value={message} 
                            onChange={handleMessageChange}
                            rows="8"
                            placeholder="Write your personalized message here..."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizationPage;   