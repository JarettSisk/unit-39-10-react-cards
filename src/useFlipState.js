import { useState } from "react";
// custom hook
const useFlipState = (stateValue) => {
  const [state, setState] = useState(stateValue);
  // toggle function
  const toggleState = () => {
    setState(state => !state)
  }

  return [state, toggleState]
}

export default useFlipState;