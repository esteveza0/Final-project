import './App.css';
import React, { useEffect, useState } from "react";
function App() {
  const [agents, setAgents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => {
        setAgents(data.data);
      });
  }, []);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
       
      <nav>
        <ul>
          <li><img src="/valo.png" alt="Valorant Logo" height='20' /></li>
          <li><a href="#agents">Agents</a></li>
          <li><a href="#cards">Cards</a></li>
          <input type="text" className="Search" value={searchTerm} onChange={handleSearch} />
        </ul>
      </nav>
      <h1 className="title">Valorant Agents</h1>
      
      <div className="container" id="agents">
        {agents
          .filter((agent) =>
            agent.displayName.toLowerCase().includes(searchTerm.toLowerCase()) && agent.isPlayableCharacter === true
          )
          .map((agent) => (
            <div key={agent.uuid}>
              <h2>{agent.displayName}</h2>
              <img src={agent.displayIcon} alt={agent.displayName} />
              <p>{agent.description}</p>
              <h3>Abilities:</h3>
              <ul>
                {agent.abilities.map((ability, index) => (
                  <li className='ability' key={index}>{ability.displayName}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
export default App;