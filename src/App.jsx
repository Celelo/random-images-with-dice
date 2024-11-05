import { useState } from "react";
import { CardContainer } from './components/cardContainer/CardContainer.jsx';
import { Rollbutton } from "./components/rollButton/Rollbutton.jsx";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const handleRollDice = () => {
    const number = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(number);
    console.log("Dado lanzado:", number);
  };

  return (
    <>
      <Rollbutton
        diceNumber={diceNumber}
        rollDice={handleRollDice}
      />
      <CardContainer diceNumber={diceNumber} />
    </>
  );
}

export default App;

