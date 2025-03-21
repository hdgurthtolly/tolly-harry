import React, { useEffect, useRef } from 'react';
import Button from '../../components/common/Button';
import './CheckoutPage.css';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';

// Import local images and animations
import feedbackIcon from '../../assets/icons/Feedback.png';
import writingAnimationPath from '../../assets/animations/writing.riv';

const CheckoutPage = () => {
    const { rive, RiveComponent } = useRive({
        src: writingAnimationPath,
        stateMachines: "State Machine 1",
        autoplay: true
    });

    const handleMoreInfo = () => {
        console.log('More info button clicked');
        // Add navigation or open modal logic here
    };

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <div className="preview-tag">Bestätigung</div>
                <h1>Geschafft! Wir sind aber noch in der Beta-Phase...</h1>
                <p className="subtitle text-title-small">... und senden dir daher eine kostenlose PDF-Version deines Buchs per E-Mail in den kommenden Tagen. Falls du Fragen hast, schick uns gerne eine E-Mail an harry@tolly.io</p>
            </div>
            <div className="checkout-content">
                <div className="animation-container">
                    <RiveComponent className="rive-animation" />
                </div>
                <Button 
                    variant="primary" 
                    size="large" 
                    onClick={handleMoreInfo}
                    iconImg={feedbackIcon}
                >
                    Mehr Infos
                </Button>
            </div>
        </div>
    );
};

export default CheckoutPage;