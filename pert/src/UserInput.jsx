function UserStoryInput() {
    const [role, setRole] = useState('');
    const [action, setAction] = useState('');
    const [benefit, setBenefit] = useState('');
    const [userStory, setUserStory] = useState('');
  
    return (
      <div>
        <p>User Story: As a <span contentEditable="true" value={role} onChange={(e) => setRole(e.target.innerText)}></span>, I want to <span contentEditable="true" value={action} onChange={(e) => setAction(e.target.innerText)}></span> so that I can <span contentEditable="true" value={benefit} onChange={(e) => setBenefit(e.target.innerText)}></span></p>
  
        <button onClick={() => {
          setUserStory(`As a ${role}, I want to ${action}, so that I can ${benefit}`);
        }}>Generate Formal User Story</button>
      </div>
    );
  }
  