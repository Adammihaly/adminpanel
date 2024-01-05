import React, { useState } from 'react';
import './nav.css';
import Home from './Home';
import Posts from './Posts';

const Nav: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className='nav_conn'>
        <span onClick={() => handleTabClick('home')}>Kezdőlap</span><br />
        <span onClick={() => handleTabClick('posts')}>Posztok kezelése</span><br />
        <span onClick={() => handleTabClick('admin')}>Adminisztráció</span><br />
        <span onClick={() => handleTabClick('logs')}>Naplózás</span><br />
        <span onClick={() => handleTabClick('logout')}>Kilépés</span><br />
      </div>
      <div>
        {selectedTab === 'home' && <Home />}
        {selectedTab === 'posts' && <Posts />}
      </div>
    </div>
  );
}

export default Nav;
