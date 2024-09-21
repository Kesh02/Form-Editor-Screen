import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Settings from './components/Settings';
import EmailInput from './components/EmailInput';
import './components/styles.css';

function App() {
  const [selectedTab, setSelectedTab] = useState(null);  // Initially, nothing is selected
  const [title, setTitle] = useState('Welcome to our form');
  const [description, setDescription] = useState('This is a description of the form.');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);  // State for the uploaded image

  // State for the email tab (title and description)
  const [emailTitle, setEmailTitle] = useState('Enter your email');
  const [emailDescription, setEmailDescription] = useState('This will be used to contact you.');

  // Function to handle going back to the button selection screen
  const goBack = () => {
    setSelectedTab(null); // Reset the selected tab to null, showing only the buttons
  };

  // Render the right pane content based on the selected tab
  const renderRightPaneContent = () => {
    if (selectedTab === 'welcome') {
      return <WelcomeScreen title={title} description={description} image={image} />;
    } else if (selectedTab === 'email') {
      return (
        <div className="email-screen">
          <h2>{emailTitle}</h2>
          <p>{emailDescription}</p>
          <EmailInput setEmail={setEmail} />
        </div>
      );
    } else {
      return <WelcomeScreen title={title} description={description} image={image} />;
    }
  };

  // Render the left pane content based on the selected tab
  const renderLeftPaneContent = () => {
    if (selectedTab === 'welcome') {
      return (
        <Settings
          updateTitle={setTitle}
          updateDescription={setDescription}
          updateImage={setImage}
          title={title}
          description={description}
          image={image}  // Pass image state to Settings component
          goBack={goBack}  // Pass the goBack function to Settings
        />
      );
    } else if (selectedTab === 'email') {
      return (
        <div className="settings-form">
          <button onClick={goBack} className="back-button">Back</button>

          <div className="form-group">
            <label>Email Title:</label>
            <input
              type="text"
              value={emailTitle}
              onChange={(e) => setEmailTitle(e.target.value)}
              placeholder="Enter email title here"
            />
          </div>

          <div className="form-group">
            <label>Email Description:</label>
            <textarea
              value={emailDescription}
              onChange={(e) => setEmailDescription(e.target.value)}
              placeholder="Enter email description here"
            />
          </div>
        </div>
      );
    } else {
      return (
        <>
          <button
            onClick={() => setSelectedTab('welcome')}
            className={`tab-button ${selectedTab === 'welcome' ? 'active' : ''}`}
          >
            Welcome Screen
          </button>
          <button
            onClick={() => setSelectedTab('email')}
            className={`tab-button ${selectedTab === 'email' ? 'active' : ''}`}
          >
            Enter your email
          </button>
        </>
      );
    }
  };

  return (
    <div className="app-layout">
      <div className="left-pane">
        {renderLeftPaneContent()}
      </div>
      <div className="right-pane">
        {renderRightPaneContent()}
      </div>
    </div>
  );
}

export default App;
