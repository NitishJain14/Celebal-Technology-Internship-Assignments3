import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  columns: {
    'todo': {
      id: 'todo',
      title: 'To Do',
      items: [
        { id: '1', content: 'Sample Task 1' },
      ],
    },
    'inProgress': {
      id: 'inProgress',
      title: 'In Progress',
      items: [],
    },
    'done': {
      id: 'done',
      title: 'Done',
      items: [],
    },
  },
  columnOrder: ['todo', 'inProgress', 'done'],
};

const KanbanBoard = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    // Handle the drag-and-drop logic here
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <DragDropContext onDragEnd={onDragEnd}>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId];
          return (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="mb-4 bg-gray-100 p-4 rounded"
                >
                  <h2 className="font-bold mb-2">{column.title}</h2>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-2 mb-2 bg-white shadow rounded"
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
};

export default KanbanBoard;
