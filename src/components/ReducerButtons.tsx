import React, { useRef, useContext } from "react";
import useClickOutside from "./useClickOutside";
import { GlobalContext } from "./GlobalState";

import styled from "styled-components";

const ReducerButtons = () => {
  const ref = useRef<HTMLDivElement>(null!);
  const context = useContext(GlobalContext);
  const { rValue, turnOn, turnOff } = context;

  useClickOutside(ref, () => {
    console.log("clicked outside");
  });

  return (
    <Wrapper ref={ref}>
      {rValue && <h1>Visible</h1>}
      <button onClick={turnOn}>Action One</button>
      <button onClick={turnOff}>Action Two</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: red;
`;

export default ReducerButtons;
