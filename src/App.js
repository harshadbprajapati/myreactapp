import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import UserList from "./components/UserList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>User Information App</h1>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;

