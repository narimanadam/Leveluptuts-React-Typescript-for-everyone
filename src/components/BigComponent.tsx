import React, { Component } from "react";

type Props = {
  title: string;
};

type State = {
  status: string;
};

class BigComponent extends Component<Props, State> {
  render() {
    return (
      <div>
        <h1>I am a class Component</h1>
      </div>
    );
  }
}

export default BigComponent;
