import React from 'react';
import Button from '../../components/common/Button';
import './FormatSelectionPage.css';

// Import local images
import icon1 from '../../assets/icons/PDF.png';
import icon2 from '../../assets/icons/Book.png';
import icon3 from '../../assets/icons/Both.png';
import icon4 from '../../assets/icons/Card.png';

const FormatSelectionPage = ({ onContinue }) => {
    // Mock data for story options with local images
    const formatOptions = [
      {
        id: 1,
        image: icon1,
        price: 19.99,
        summary: `We'll send you a PDF by E-Mail, a few minutes after purchase`,
        cta: 'PDF',
        isPopular: false
      },
      {
        id: 2,
        image: icon2,
        price: 39.99,
        summary: `High-quality physical book (21cm x 21cm), delivered in 5-7 working days`,
        cta: 'Buch',
        isPopular: true
      },
      {
        id: 3,
        image: icon3,
        price: 49.99,
        summary: 'Get a digital copy straight away & a physical copy in 5-7 working days',
        cta: 'Buch & PDF',
        isPopular: false
      }
    ];

    // Add missing handler function
    const handleSelectFormat = (formatId) => {
      console.log(`Selected format with ID: ${formatId}`);
      // Navigate to the next page if onContinue prop is provided
      if (onContinue) {
        onContinue();
      }
    };

    return (
        <div className="format-selection-container">
            <div className="format-selection-header">
                <div className="preview-tag">Format</div>
                <h1>Wähle dein Format</h1>
                <p className="subtitle text-title-small">Bestelle ein physisches Buch, eine digitale Version, oder beides!</p>
            </div>

            <div className="format-selection-grid">
                {formatOptions.map(format => (
                    <div key={format.id} className="format-selection-wrapper">
                        {format.isPopular && <div className="popular-tag">Am beliebtesten</div>}
                        <div 
                            className="format-selection-card"
                            onClick={() => handleSelectFormat(format.id)} 
                        >
                            <img src={format.image} alt={`Format ${format.id}`} className="format-selection-image" />
                            <div className="format-selection-info">
                                <h3 className="format-selection-summary">{format.summary}</h3>
                                <div className="format-selection-price">{format.price}€</div>
                                <Button 
                                    variant="primary" 
                                    size="large"
                                    iconImg={icon4} // Using Book.png as the icon for all buttons
                                >
                                    {format.cta}
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FormatSelectionPage;
        