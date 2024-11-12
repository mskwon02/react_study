import React from "react";
import { Draggable } from "react-beautiful-dnd";

export const List = React.memo(({ item, index, todoList, setTodoList }) => {
  return (
    <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          key={item.id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-300" : " bg-gray-100"
          } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 boder rounded-md`}
        >
          <div>
            <input
              type="checkbox"
              checked={item.completed}
              onClick={(e) => {
                setTodoList(
                  todoList.map((data) => {
                    if (data.id == item.id) {
                      data.completed = !item.completed;
                    }
                    return data;
                  })
                );
              }}
            />
            {"  "}
            <span
              className={`text-lg font-semibold
                              ${item.completed ? "line-through" : undefined}`}
            >
              {item.todo}
            </span>
          </div>
          <div>
            <button
              className="font-bold px-4 py-2 border rounded-3xl m-1 bg-white hover:bg-red-100"
              onClick={() => {
                setTodoList(todoList.filter((idx) => idx.id !== item.id));
              }}
            >
              x
            </button>
          </div>
        </div>
      )}
    </Draggable>
  );
});
