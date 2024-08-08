import React from 'react';
import ReactDOM from 'react-dom/client';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import ThreePointEstimation from './ThreePoint';
import MenuBar from './MenuBar';

import TodoList from './Todo';
import UserStoryInput from './UserStoryInput';
import UserStoryGenerator from './UserStoryGenerator';


function App() {
  return (
    <div className="App">
      <h1>User Story Generator</h1>
      <p>As a role I want to action so that I can benefit.</p>
      <UserStoryInput />
      <h1>List Group box for Stories</h1>
      <UserStoryGenerator />
      
      
    
      <h1>TaskList User defined</h1>
      <TodoList />

      <h1>Three Point Estimation</h1>
      <h2>Requirements for the Three-Point Estimation</h2>
      <p>1. Optimistic Estimate(O): The shortest possible time to complete the task under ideal conditions</p>
      <p>Most Likely Estimate (M): The expected time to complete the task under normal conditions.</p>
      <p>Pessimistic Estimate (P): The longest possible time to complete the task if everything goes wrong.</p>
      <p></p>
      <ThreePointEstimation />
      
    </div>
  );
}



export default App
