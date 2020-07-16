import React from "react";
import { useMachine } from "@xstate/react";
import { counterMachine } from "../machines/counterMachine";
import Counter from "../components/Counter";

const XState = () => {
  const [counterCurrent, counterSend] = useMachine(counterMachine, {
    context: { count: 999 },
  });

  return (
    <Counter
      counter={{
        count: counterCurrent.context.count,
        increment: () => counterSend("INC"),
        decrement: () => counterSend("DEC"),
        reset: () => counterSend("RESET"),
      }}
    />
  );
};

export default XState;
