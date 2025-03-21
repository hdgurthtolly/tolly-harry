import React from 'react';

/**
 * TypographyDemo - A component to showcase all typography styles
 * Use this as a reference for how to apply text styles in your app
 */
const TypographyDemo = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
      <h1>Typography System</h1>
      
      <div style={{ marginBottom: '60px' }}>
        <h2>Heading Elements</h2>
        <p>Use semantic HTML elements for better accessibility:</p>
        
        <div style={{ marginTop: '20px' }}>
          <h1>This is an h1 element</h1>
          <p>64px on desktop, 28px on mobile. Bold, italic.</p>
          
          <h2>This is an h2 element</h2>
          <p>40px on desktop, 24px on mobile. Bold, italic.</p>
          
          <h3>This is an h3 element</h3>
          <p>24px on desktop, 18px on mobile. Bold, italic.</p>
          
          <h4>This is an h4 element</h4>
          <p>18px on desktop, 16px on mobile. Bold, italic.</p>
          
          <p>This is a paragraph element. 14px on all devices.</p>
        </div>
      </div>
      
      <div style={{ marginBottom: '60px' }}>
        <h2>Class-based Styles</h2>
        <p>Apply these classes to any element to get the desired style:</p>
        
        <div style={{ marginTop: '20px' }}>
          <div className="text-title-large">text-title-large</div>
          <p>64px on desktop, 28px on mobile. Bold, italic.</p>
          
          <div className="text-title-medium">text-title-medium</div>
          <p>40px on desktop, 24px on mobile. Bold, italic.</p>
          
          <div className="text-title-small">text-title-small</div>
          <p>24px on desktop, 18px on mobile. Bold, italic.</p>
          
          <div className="text-subtitle">text-subtitle</div>
          <p>18px on desktop, 16px on mobile. Bold, italic.</p>
          
          <div className="text-body">text-body</div>
          <p>14px on all devices. Regular weight.</p>
        </div>
      </div>
      
      <div>
        <h2>Usage Examples</h2>
        
        <div style={{ marginTop: '20px', border: '1px solid #eee', padding: '20px', borderRadius: '8px' }}>
          <h3>Example Card</h3>
          <p className="text-subtitle">A small subtitle using a class</p>
          <p>Some regular body text in a paragraph.</p>
          <span className="text-body">Body text in a span element.</span>
        </div>
      </div>
    </div>
  );
};

export default TypographyDemo; 