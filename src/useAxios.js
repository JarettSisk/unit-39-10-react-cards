import { useState } from "react";
import uuid from "uuid";
import axios from "axios";
// custom hook
const useAxios = (stateValue) => {
  const [state, setState] = useState(stateValue);

  // if url only is supplied, use that, if url and name is supplied, use both. 

  const addCard = async (url, pokemonName=null) => {
      if (pokemonName !== null) {
        // If name is supplied, use this url
        const res = await axios.get(`${url}${pokemonName}/`);
        setState(state =>[...state, { ...res.data, id: uuid() }])
      } else {
        // else use this one.
        const res = await axios.get(url);
        setState(state =>[...state, { ...res.data, id: uuid() }]);
      }
    
  }

  return [state, addCard];
}

export default useAxios;
