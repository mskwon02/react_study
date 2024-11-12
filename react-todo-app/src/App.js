import React, { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Lists } from "./components/Lists";

export function App() {
  const [todoList, setTodoList] = useState([]);
  const [txt, setTxt] = useState("");
  const handelClick = () => {
    setTodoList([]);
  };

  return (
    <div className="flex justify-center items-center bg-blue-100 w-screen h-screen">
      <div className="w-full p-9 m-4 bg-white rounded-2xl shadow-lg lg:w-3/4 ">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold my-4">할 일 목록</h1>
          <button
            onClick={handelClick}
            className="rounded-md bg-gray-200 my-1 px-3 shadow-md font-semibold"
          >
            전체 삭제
          </button>
        </div>

        <Lists todoList={todoList} setTodoList={setTodoList} />

        <Form
          setTodoList={setTodoList}
          todoList={todoList}
          txt={txt}
          setTxt={setTxt}
        />
      </div>
    </div>
  );
}

export default App;
