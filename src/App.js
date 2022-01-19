import TopBar from "./components/topbar/TopBar";
import Sidebar from "./components/sidebar/Sidebar";
import Cryptocurrencies from "./components/Cryptocurrencies";
import Exchanges from "./components/exchanges/Exchanges";
import Footer from "./components/footer/Footer";
import './app.css'
import { useState, useEffect } from "react"
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data)
    }).catch(error => console.log(error))
  }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
    <div>
      <TopBar/>
      <div className="container">
        <Sidebar/>        
        <div className="display">
          <Routes>
            <Route path="/" exact element={<Cryptocurrencies onChange={handleChange} coins={filteredCoins}/>} />
            <Route path="/exchanges" element={<Exchanges />} />
          </Routes>
      <Footer />
      </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
