import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./components/Login";
import Chat from "./components/Chat";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React-Redux Login App</h1>
        <Login />
        <Chat />
      </div>
    </Provider>
  );
}

export default App;
