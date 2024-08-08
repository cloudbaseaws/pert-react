import React, { useState } from 'react';

function UserStoryInput() {
  const [role, setRole] = useState('');
  const [action, setAction] = useState('');
  const [benefit, setBenefit] = useState('');
  const [userStory, setUserStory] = useState('');


  const handleGenerateUserStory = () => {
    const generatedStory = `As a ${role}, I want to ${action}, so that ${benefit}`;
    setUserStory(generatedStory);

  };

  return (
    <div>
      <label htmlFor="role">Role:</label>
      <input type="text" id="role" value={role} onChange={(e) => setRole(e.target.value)} />

      <label htmlFor="action">Action:</label>
      <input type="text" id="action" value={action} onChange={(e) => setAction(e.target.value)} />

      <label htmlFor="benefit">Benefit:</label>
      <input type="text" id="benefit" value={benefit} onChange={(e) => setBenefit(e.target.value)} />

      <button onClick={handleGenerateUserStory}>Generate User Story</button>

      <p>User Story: {userStory}</p>
    </div>
  );
}

export default UserStoryInput;
