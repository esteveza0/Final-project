import './App.css';
import { useEffect, useState } from "react";
const options = {
  method: 'GET',
  Headers: {
    'Accept': 'applications/json'
  }
};
export default function App() {
  const [items, setItems] = useState([]);
  const [hasData, setHasData] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    fetch('https://valorant-api.com/v1/playercards', options)
      .then((response) => response.json())
      .then((json) => { setItems(json.data); setHasData(true); console.log(json) });
  }, []);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
      <h1 className="title">Valorant Cards</h1>
      <div className="container" id="cards">
        {items.filter((item) => {
          if (searchTerm === '') {
            return item;
          } else if (item.displayName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return item;
          }
        })
          .map((item) => (
            <ul key={item.uuid}>
              <li>
                <img className="player-id" src={item.largeArt} />
                 <img className="smallArt" src={item.smallArt} />
                <img className="wide-banner" src={item.wideArt} />
                <h3 className="display-name">{item.displayName}</h3>
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
}