// import React from 'react';
// import './styles.css'; 

// const WelcomeScreen = ({ title, description }) => {
//   return (
    
//     <div className="welcome-container">
      
//       <h1 className="welcome-title">{title}</h1>
//       <p className="welcome-description">{description}</p>
//       <button className="start-button">Start</button>
//     </div>
//   );
// };

// export default WelcomeScreen;

import React from 'react';

function WelcomeScreen({ title, description, image }) {
  return (
    <div className="welcome-screen">
      <h1>{title}</h1>
      <p>{description}</p>
      {/* Display the image if it exists */}
      {image && (
        <img src={URL.createObjectURL(image)} alt="Uploaded" className="welcome-image" />
      )}
    </div>
  );
}

export default WelcomeScreen;


