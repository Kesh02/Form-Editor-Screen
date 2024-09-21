import React from 'react';

function WelcomeScreen({ title, description, image }) {
  return (
    <div className="welcome-screen">
      <h1>{title}</h1>
      <p>{description}</p>
      {/* Display the image */}
      {image && (
        <img src={URL.createObjectURL(image)} alt="Uploaded" className="welcome-image" />
      )}
    </div>
  );
}

export default WelcomeScreen;


