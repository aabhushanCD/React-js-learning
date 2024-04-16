import { createContext, useReducer } from "react";

export const Todolist = createContext([]);

// Reducer function to manage Todo Items
const TodoItemsReducer = (currTodoItems, action) => {
  let newItem = currTodoItems;
  // If action type is NEW_ITEM, add a new item to the list
  if (action.type === "NEW_ITEM") {
    newItem = [
      ...currTodoItems,
      { Name: action.payload.Name, date: action.payload.date },
    ];
  } else if (action.type === "DELETE_ITEM") {
    // If action type is DELETE_ITEM, remove item from the list
    newItem = currTodoItems.filter(
      // Changed the parameter name from `list` to `item`
      (item) => item.Name !== action.payload.Name
    );
  }
  return newItem;
};
const TodoitemContextProvider = ({ children }) => {
  // Using useReducer to manage Todo Items list
  const [list, dispatchTodoItems] = useReducer(TodoItemsReducer, []);

  // Function to add a new Todo Item
  const handleAddToDo = (Name, date) => {
    // Creating an action for adding a new item
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        Name,
        date,
      },
    };
    // Dispatching the action to the reducer
    dispatchTodoItems(newItemAction);
  };

  // Function to delete a Todo Item
  const handleDelete = (Name) => {
    // Creating an action for deleting an item
    const DeleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        Name,
      },
    };
    // Dispatching the action to the reducer
    dispatchTodoItems(DeleteItemAction);
  };
  return (
    <Todolist.Provider
      value={{
        Items: list,
        handleAddToDo: handleAddToDo,
        handleDelete: handleDelete,
      }}
    >
      {children}
    </Todolist.Provider>
  );
};

export default TodoitemContextProvider;
