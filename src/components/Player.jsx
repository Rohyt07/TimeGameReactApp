import { useState, useRef } from "react";

export default function Player() {
const playerNameRef = useRef();
const[playerName, setPlayerName] = useState(null);

function handleSubmit(){
  setPlayerName(playerNameRef.current.value);
  playerNameRef.current.value = '' // imperative approach breaking the react rule
}
  return (
    <section id="player">
      <h2>Welcome { playerName ?? 'unknown entity'}</h2>
      <p>
        <input type="text" 
        ref={playerNameRef} // Directly accessing the DOM element using Ref ha ha ha...
        />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
