// src/components/WebflowSection.js
import React from 'react';

export default function WebflowSection() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div class="webflow-section">
            <h1>Welcome to Our Site!</h1>
            <p>This section is styled in Webflow and embedded in React.</p>
          </div>
          <style>
            .webflow-section {
              padding: 20px;
              background-color: #f3f3f3;
              border-radius: 8px;
              text-align: center;
            }
          </style>
        `,
      }}
    />
  );
}
