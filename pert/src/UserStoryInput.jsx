import React, { useState } from 'react';

function UserStoryInput() {
  const [userStories, setUserStories]= useState([]);
  const [role, setRole] = useState('');
  const [action, setAction] = useState('');
  const [benefit, setBenefit] = useState('');
  let nextId = 1; // Track the next ID for user stories
 


  const handleGenerateUserStory = () => {
    const generatedStory = { 
        id: nextId ++,// Increment and use the next Id text:`As a ${role}, I want to ${action}, so that ${benefit}`,
        };

    setUserStories([...userStories, generatedStory]);
    setRole('');
    setAction('');
    setBenefit('');
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
      <ul>
        {userStories.map((story,index) => (
        <li key={story.id} > {story.text}
        </li>
        ))}
      </ul>
      
    </div>
  );
}

export default UserStoryInput;
