import React, { useState } from "react";
import "./App.css";
import FormLogin from "./components/FormLogin";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MyComponent from "./components/testcall";
import { Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";

function App() {
  const [listTask, setTask] = useState([]);
  const [text, setText] = useState("");
  const [emp, setEmp] = useState(["NF"]);
  const isLogin = localStorage.getItem("isLogin");
  if (isLogin == null || isLogin == undefined || isLogin == "") {
    localStorage.setItem("isLogin", "F");
  }

  const onTextChange = ({ target: { value } }) => {
    setText(value);
  };
  const addTask = () => {
    if (text.trim() === "") {
      alert("Please Key In !!");
      return false;
    }
    setTask([...listTask, text]);
    setText("");
  };
  const removeTask = (index) => {
    let task = [...listTask];
    task.splice(index, 1);
    setTask(task);
  };
  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <>
      <div style={{ height: "100%" }}>
        {/* <MyNav /> */}
        <Routes>
          <Route path="/" element={<Profile />} />
          {/* <Route path="/Home" element={<Home />} />
          <Route path="/Profile" element={<Profile />} /> */}
        </Routes>
      </div>
      {/* <MyNav />
      <div>
        <h1>{token}</h1>
      </div>
      <div className='p-5'>
      <h1 className="text-3xl font-bold underline bg-yellow-500 rounded-md ">
      Hello world!
      </h1>
      <p><MyButton count={count} onClick={handleIn} /></p>
      <p><MyTwoButton count={count} onClick={handleDe} /></p>
      <p>{condition.toUpperCase() == "Y" ? "Yes I am" : "No."}</p>
      </div>
      <div className="m-40">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          <div className="flex justify-start">
            <MyTextTask text={text} onChange={onTextChange} />
          </div>
          <div className=" flex justify-center">
            <MyButtonTask onClick={addTask} />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-1">
          <div className=" flex justify-start">
            <ListTask data={listTask} remove={removeTask} />
          </div>
        </div>
        <MyGrid data={users} />
        <div className="flex justify-center mb-2 mt-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
            onClick={getEmp}
          >
            getEmp
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
            onClick={ClearEmp}
          >
            Clear Emp
          </button>
        </div>
        <MyTable data={emp} />
      </div> */}
    </>
  );
}

export default App;
