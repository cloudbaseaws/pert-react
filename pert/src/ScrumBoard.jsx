import React, { useState, useRef, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  tasks: {
    backlog: [
      { id: 'task-1', content: 'User story 1' },
      { id: 'task-2', content: 'User story 2' },
      { id: 'task-3', content: 'User story 3' },
    ],
    inProgress: [],
    done: [],
  },
  columnOrder: ['backlog', 'inProgress', 'done'],
};

function ScrumBoard() {
  const [data, setData] = useState(initialData);
  const dragRef = useRef(null);

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const start = data.tasks[source.droppableId];
    const finish = data.tasks[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumns = {
        ...data.tasks,
        [source.droppableId]: newTaskIds,
      };

      setData({
        ...data,
        tasks: newColumns,
      });
    } else {
      const startTask = start[source.index];
      const finishTask = finish[destination.index];

      const newStartTasks = [...start];
      newStartTasks.splice(source.index, 1);
      const newFinishTasks = [...finish];
      newFinishTasks.splice(destination.index, 0, startTask);

      const newColumns = {
        ...data.tasks,
        [source.droppableId]: newStartTasks,
        [destination.droppableId]: newFinishTasks,
      };

      setData({
        ...data,
        tasks: newColumns,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map((columnId) => {
        const column = data.tasks[columnId];
        return (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  background: snapshot.isDraggingOver ? '#f2f2f2' : '#fff',
                  padding: 16,
                  border: '1px solid lightgray',
                  minHeight: '200px',
                }}
              >
                <h3>{columnId}</h3>
                {column.map((taskId, index) => {
                  const task = data.tasks[columnId][index];
                  return (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{
                            userSelect: 'none',
                            padding: 16,
                            margin: '0 0 8px 0',
                            backgroundColor: snapshot.isDragging ? '#fafafb' : '#fff',
                          }}
                        >
                          {task.content}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        );
      })}
    </DragDropContext>
  );
}

export default ScrumBoard;
