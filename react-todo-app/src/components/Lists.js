import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { List } from "./List";

export const Lists = React.memo(({ todoList, setTodoList }) => {
  const handleEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const newTodoList = todoList;
    const [draggedTodo] = newTodoList.splice(result.source.index, 1);
    newTodoList.splice(result.destination.index, 0, draggedTodo);
    setTodoList(newTodoList);
  };
  return (
    <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="todo">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {todoList.map((item, index) => (
              <List
                item={item}
                index={index}
                todoList={todoList}
                setTodoList={setTodoList}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
});
