import React, { useState } from 'react';
import CountdownTimer from '../components/Countdown';

// Child Component
const StartTest = ({ message, setPhotoTaken, processing }: { message: string, setPhotoTaken: React.Dispatch<React.SetStateAction<boolean>>, processing: number}) => {
  const [showComponent, setShowComponent] = useState(false);

  const handleClick = () => {
    setShowComponent(true); // Hide the button and show the new component
  };

  return (
    <div>
      {!showComponent ? (
        <a className="footer-button" onClick={handleClick} style={{ fontSize: '24px', padding: '15px 30px', width: '200px', textAlign: 'center' }}>Start</a>
      ) : (
        <div>
            <h4>Sign the word for</h4>
            <h2>{message}</h2> {/* Display the variable passed from the parent */}
            {(processing === 0) &&
            <CountdownTimer setPhotoTaken={setPhotoTaken}/>
            }
            {(processing === 1) &&
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" />
            }
            {(processing === 2) &&
            <h3>Wrong</h3>
            }
            {(processing === 3) &&
            <h3>Right</h3>
            }
            </div>
      )}
    </div>
  );
};

export default StartTest;