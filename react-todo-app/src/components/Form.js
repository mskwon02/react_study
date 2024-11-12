import React from "react";

export const Form = React.memo(({ setTodoList, todoList, txt, setTxt }) => {
  return (
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
  );
});
