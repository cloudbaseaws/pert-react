import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function UserStoryGenerator() {
  const [userStories, setUserStories] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const handleGenerateUserStory = () => {
    // Logic to generate user story based on input and selected keywords
    const newStory = {
      id: Date.now(), // Unique identifier
      text: `As a ${role}, I want to ${action}, so that ${benefit}`,
      keywords: selectedKeywords,
    };
    setUserStories([...userStories, newStory]);
  };

  const handleEditStory = (index, newStory) => {
    const updatedStories = [...userStories];
    updatedStories[index] = newStory;
    setUserStories(updatedStories);
  };

  const handleDeleteStory = (index) => {
    const updatedStories = userStories.filter((_, i) => i !== index);
    setUserStories(updatedStories);
  };

  const onDragEnd = (result) => {
    // ... drag and drop logic
  };

  return (
    <div>
      {/* ... user story input fields */}

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="userStories">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <ul>
                {userStories.map((story, index) => (
                  <Draggable key={story.id} draggableId={story.id} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {story.text}
                        <button onClick={() => handleEditStory(index)}>Edit</button>
                        <button onClick={() => handleDeleteStory(index)}>Delete</button>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default UserStoryGenerator;
