import React, {useState} from 'react';
import './App.css';
import Form  from "./Form"

function App() {
  const [team, setTeam] = useState()

  return (
    <>
      <Form passTeamToForm = {team} passSetTeamToForm = {setTeam} />
    </>
  );
}

export default App;
