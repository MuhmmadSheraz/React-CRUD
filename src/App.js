import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ActionButton from "./components/ActionButton/index";

const a = "kilo";
const obj1 = { name: "Kaisa Diya Phr" };
let data = ["we", "are", "united"];
const list = [
  { name: "Hello World 1" },
  { name: "Hello World 2" },
  { name: "Hello World 3" },
];
const complex = [
  { company: "XYZ", jobs: ["Javascript", "React"] },
  { company: "ABC", jobs: ["AngularJs", "Ionic"] },
];
let todoArray = ["One", "Two", "Three"];
function App() {
  const [TextBox, setTextBox] = useState("Hello World :)");

  //Toggler Function
  let Toggler1 = () => {
    setTextBox("Hello Pakistan");
    setTextBox(
      TextBox === "Hello World :)" ? "Hello Pakistan ;)" : "Hello World :)"
    );
  };

  //TODO LIST

  //STATES
  
  const [allTodo, setallTodo] = useState([]);
  const [textChangedInput, settextChangedInput] = useState("");

  //Functions
  let textChanged = (e) => {
    let temp = e.target.value;
    settextChangedInput(temp);
  };
  //Add
  let add = () => {
    let arr = [...allTodo];
    arr.push(textChangedInput);
    setallTodo(arr);
    console.log(allTodo);
    settextChangedInput("");
  };
  // Delete
  let deleteNow = (index) => {
    let arr = [...allTodo];
    arr.splice(index, 1);
    setallTodo(arr);
    console.log(allTodo);
    settextChangedInput("");
  };
  // Edit
  let editNow = (index) => {
    
    let arr = [...allTodo];
    let selected = arr[index];
    arr.splice(index, 1);
    

    settextChangedInput(selected);
  };
  //Update
  let updateNow = (index) => {
    let arr = [...allTodo];

    arr[index] = textChangedInput;
    setallTodo(arr);
    settextChangedInput("");

  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
     
        {/* //TODO */}
        <h1>TODO LIST ;)</h1>
        <input
          placeholder="Add Item here"
          onChange={textChanged}
          value={textChangedInput}
          style={{
            width: "75%",
            padding: "20px",
            borderRadius: "5px",
            outine: "none",
            fontSize: "20px",
          }}
        ></input>
        { (
          <ActionButton
            text="Add Todo"
            style={{
              backgroundColor: "#218838",
              color: "#ffff",
              padding: "15px",
              marginTop: "5px",
              borderRadius: "5px",
              fontSize: "20px",
            }}
            click={add}
          />
        )}
        {/* <button onClick={add}>Add Todo</button> */}
        {allTodo.map((x, index) => {
          return (
            <li style={{ marginTop: "20px" }}>
              {x}
              {(
                <ActionButton
                  text="Delete"
                  style={{
                   
                    backgroundColor: "#C82333",
                    color: "#ffff",
                    padding: "15px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    fontSize: "20px",
                  }}
                  click={() => deleteNow(index)}
                />
              )}
              { (
                <ActionButton
                  text="Edit"
                  style={{
                    backgroundColor: "#218838",
                    color: "#ffff",
                    padding: "15px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    fontSize: "20px",
                  }}
                  click={() => editNow(index)}
                />
              )}
              {(
                <ActionButton
                  text="Update"
                  style={{
                    backgroundColor: "#138496",
                    color: "#ffff",
                    padding: "15px",
                    marginTop: "5px",
                    borderRadius: "5px",
                    fontSize: "20px",
                  }}
                  click={() => updateNow(index)}
                />
              )}

              {/* <button onClick={() => deleteNow(index)}>Delete Now </button>{" "}
              <button
                onClick={() => {
                  editNow(index);
                }}
              >
                Edit Now{" "}
              </button> */}
            </li>
          );
        })}
        {/* <div>
          {data.map((x) => {
           return  <p>{x}</p>
          })}
        </div> */}
        {/* <ul>
          {list.map((x) => {
            return <li>{x.name}</li>;
          })}
        </ul> */}
        {/* <ol>
          {complex.map((x) => {
            return (
              <li>
                {x.company}
                <ul>
                  {x.jobs.map((y) => {
                   return <li>{y}</li>
                  })}
                </ul>
              </li>
            );
          })}
        </ol> */}
        {/* <h2 onClick={Toggler1}>{TextBox}</h2> */}

        {/* TODO LIST */}
      </header>
    </div>
  );
}

export default App;
