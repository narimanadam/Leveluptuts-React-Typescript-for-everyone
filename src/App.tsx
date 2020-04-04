import React from "react";
import Head from "./components/Head";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";
import ReducerButtons from "./components/ReducerButtons";
import GlobalProvider from "./components/GlobalState";
import BigComponent from "./components/BigComponent";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Head title="Hello" />
        <BigComponent title="class" />
        <Button
          handleClick={e => {
            e.preventDefault();
            console.log(e);
          }}
        ></Button>
        <ReducerButtons />
        <h1>hellooooo</h1>
        <Input />
      </GlobalProvider>
    </div>
  );
}

export default App;
