import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./App.css";

export function App() {
  const [todoList, setTodoList] = useState([]);
  const [txt, setTxt] = useState("");

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
    <div className="flex justify-center items-center bg-blue-100 w-screen h-screen">
      <div className="w-full p-6 m-4 bg-white rounded-2xl shadow-lg lg:w-3/4 ">
        <div className="flex justify-between mb-3">
          <h1 className="text-3xl font-bold my-3">할 일 목록</h1>
        </div>
        <DragDropContext onDragEnd={handleEnd}>
          <Droppable droppableId="todo">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {todoList.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
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
                              setTodoList(
                                todoList.filter((idx) => idx.id !== item.id)
                              );
                            }}
                          >
                            x
                          </button>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <div>
          <form
            className="flex pt-2"
            onSubmit={(e) => {
              e.preventDefault();
              setTodoList([
                ...todoList,
                { id: Date.now(), todo: txt, completed: false },
              ]);
              setTxt("");
              console.log(Date.now);
            }}
          >
            <input
              value={txt}
              onChange={(e) => setTxt(e.target.value)}
              placeholder="할 일을 입력하세요"
              className=" w-full px-3 py-2 mr-2 my-2 text-gray-500 border rounded shadow"
            />
            <input
              type="submit"
              value="등 록"
              className="font-semibold w-1/6 p-2 my-2 text-blue-400 border-2 border-blue-300 rounded hover:text-white hover:bg-blue-400"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
