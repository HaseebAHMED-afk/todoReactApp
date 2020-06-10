import React, { useState } from "react";
import ListItem from "./ToDoItem";
import InputArea from "./InputArea";
import ListIcon from '@material-ui/icons/List';

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1><ListIcon className="icon"/>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem
              key={index}
              id={index}
              onChecked={deleteItem}
              text={todoItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
