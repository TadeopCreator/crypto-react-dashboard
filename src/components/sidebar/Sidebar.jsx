import './sidebar.css'
import { LineStyle, CurrencyExchange } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
  <div className='sidebar'>
      <div className="sidebarWrapper">
          <div className="sidebarMenu">
              <h3 className="sidebarTittle">Dashboard</h3>
              <ul className="sidebarList">
                  <Link to='/crypto-react-dashboard' className="sidebarListItem">
                      <LineStyle className='sidebarIcon'/>
                      Cryptocurrencies
                  </Link>
                  <Link to='/exchanges' className="sidebarListItem">
                      <CurrencyExchange className='sidebarIcon'/>
                      Exchanges
                  </Link>
              </ul>
          </div>
      </div>
  </div>
  );
};

export default Sidebar;
