import React from 'react';
import './topbar.css'
import { Brightness4, Settings} from '@mui/icons-material';

const TopBar = () => {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>Coindeop</span>            
            </div>
            <div className="topRight">                
                <div className="topbarIconContainer">
                    <Settings/>                                        
                </div>
                <div className="topbarIconContainer">
                    <Brightness4/>
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uZU23BTw_xBnT_EgUraePdAQTcwWVmtWXCmKpJiicwPwp71Tr2ZEFPCTyvhbolvKQ7M&usqp=CAU" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  );
};

export default TopBar;
