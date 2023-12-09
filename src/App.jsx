import Input from "./components/Input";
import Box from "./components/Box";

import { useState } from "react";
import Item from "./components/Item";

const App = () => {
  const [todos, setToDo] = useState([]);
  const [alert, setAlert] = useState()
 
  const removeToDo = (id) => {
    // console.log(id)
    const newTodos = todos.filter((d, index) => {
      if (index !== id) {
        return true;
      } else {
        return false;
      }
    });
    setToDo(newTodos);
  };

  const addToDoHandler = (item) => {
    // console.log(item)
    if (item !== "") {
      setToDo([
        ...todos,
        {
          item,
          time: new Date().toLocaleTimeString(),
        },
      ]);
      
    } else {
      setAlert("Input cannot be empty.");
     console.log({alert})
     
    }
  };
 
  return (
    <div className="h-screen p-3 bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="rounded mx-auto max-w-[750px] min-h-[450px] shadow-2x1 bg-white">
        <Input handler={addToDoHandler} />
        <Box data={todos} removeHandler={removeToDo} />
      </div>
    </div>
  );
};

export default App;
