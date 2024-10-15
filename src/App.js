import "./App.css";
import MessageContext from "./context/MessageContext";
import { useContext } from "react";

export default function App() {
  const msg = "Hello World!";
  return (
    <div>
      <MessageContext.Provider value={msg}>
        <ComponentA></ComponentA>
      </MessageContext.Provider>
    </div>
  );
}

function ComponentA() {
  return <ComponentB></ComponentB>;
}

// use context here
function ComponentB() {
  const message = useContext(MessageContext);
  return <div>Message: {message}</div>;
}
