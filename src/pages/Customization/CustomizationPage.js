import React from 'react';
import Button from '../../components/common/Button';
import './CustomizationPage.css';

// Import local images
import icon1 from '../../assets/icons/Chat.png';

// Format price helper function
const formatPrice = (price) => {
    return price.toFixed(2).replace('.', ',');
};

const CustomizationPage = ({ onContinue }) => {
    const handleSelectCustomization = (id) => {
        console.log(`Selected customization with ID: ${id}`);
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
                <p className="subtitle text-title-small">Write a message to [KID]. We'll print it on the second page of the book.</p>
            </div>

            <div className="customization-grid">
                <div className="customization-card">
                    <img src={icon1} alt="Customization" className="customization-image" />
                    <div className="customization-info">
                        <h3 className="customization-summary">Customize your story with your name and a personal message</h3>
                        <div className="customization-price">{formatPrice(19.99)}€</div>
                        <Button 
                            variant="primary" 
                            size="large" 
                            onClick={() => handleSelectCustomization(1)}
                            iconImg={icon1}
                        >
                            Customize
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomizationPage;   