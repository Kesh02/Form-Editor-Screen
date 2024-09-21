// import React from 'react';
// import './styles.css';

// function Settings({ updateTitle, updateDescription, updateImage, title, description }) {
//   return (
//     <div className="settings-form">
//       <div className="form-group">
//         <label>Title:</label>
//         <input
//           type="text"
//           value={title}  // Show the current title value in the input box
//           onChange={(e) => updateTitle(e.target.value)}  // Update title state on change
//           placeholder="Enter title here"
//         />
//       </div>

//       <div className="form-group">
//         <label>Description:</label>
//         <textarea
//           value={description}  // Show the current description value in the textarea
//           onChange={(e) => updateDescription(e.target.value)}  // Update description state on change
//           placeholder="Enter description here"
//         />
//       </div>

//       <div className="form-group">
//         <label>Image:</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => updateImage(e.target.files[0])}  // Update image state on file change
//         />
//       </div>
//     </div>
//   );
// }

// export default Settings;

import React from 'react';
import './styles.css';

function Settings({ updateTitle, updateDescription, updateImage, title, description, goBack, image }) {
  return (
    <div className="settings-form">
      <button onClick={goBack} className="back-button">Back</button>

      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => updateTitle(e.target.value)}
          placeholder="Enter title here"
        />
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => updateDescription(e.target.value)}
          placeholder="Enter description here"
        />
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => updateImage(e.target.files[0])}  // Update image state on file change
        />
        
        {/* Show image preview and delete button if an image is uploaded */}
        {image && (
          <div className="image-preview-container">
            <img src={URL.createObjectURL(image)} alt="Uploaded" className="image-preview" />
            <button
              className="delete-button"
              onClick={() => updateImage(null)}  // Delete the image by setting it to null
            >
              Delete Photo
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Settings;



