import React, { useState } from 'react';
import './Solutions.css';
import icon1 from 'D:/PUSHKAR/Web Dev/rian normal/rian-website-normal/src/assets/1 1.ico';
import icon2 from 'D:/PUSHKAR/Web Dev/rian normal/rian-website-normal/src/assets/2 1.ico';
import icon3 from 'D:/PUSHKAR/Web Dev/rian normal/rian-website-normal/src/assets/3 1.ico';
import icon4 from 'D:/PUSHKAR/Web Dev/rian normal/rian-website-normal/src/assets/4 1.ico';

const App = () => {
  return (
    <div className="Solutions">
      <h1>Rian - List of Offering</h1>
      <DropdownMenu />
    </div>
  );
};

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = [
    { title: 'Document Translation', icon: icon1, submenu: ['Translation: (Text-to-Text)', 'Quick Translation (MT)', 'MTPE (Machine Translation Post Edit)', 'Supported 20+ file formats', '50+ global languages'] },
    { title: 'API-Translation Automation', icon: icon2, submenu: ['Chat bot real-time translation through API', 'Website translation', 'Content translation in CMS', 'Custom system integrations for translation automation'] },
    { title: 'Audio/Video Translation', icon: icon3, submenu: ['Transcription: (Speech-to-text)', 'Audio: (Text-to-Speech)', 'Captioning (Subtitles)', 'Digital Voice Over', 'Human Voice Over', 'Audio Translation', '50+ global languages'] },
    { title: 'Allied Solutions', icon: icon4, submenu: ['Onscreen text translation (Editable video file required)', 'Static to Dynamic content (Document to audio-visual format)', 'Source Video/Podcast creation (Assuming script is provided)', 'Multilingual optimization and SEO of translated videos'] },
    { title: 'Crowd Sourcing', icon: '', submenu: ['Crowdsourcing by NGOs and Govt entities'] },
    { title: 'Human Translation Experts Services', icon: '', submenu: ['Expert translation service by expert human translators in 50+ global languages.'] },
    { title: 'Email Translation Automation', icon: '', submenu: [] }
  ];

  const handleMouseEnter = (title) => {
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="outer-box">
      <div className="dropdown-menu">
        {menuItems.map((item) => (
          <div 
            key={item.title} 
            className="dropdown-item" 
            onMouseEnter={() => handleMouseEnter(item.title)}
            onMouseLeave={handleMouseLeave}
          >
            <button className={`dropdown-toggle ${activeMenu === item.title ? 'active' : ''}`}>
              <img src={item.icon} alt="Icon" className="menu-icon" />
              {item.title}
            </button>
            {activeMenu === item.title && item.submenu.length > 0 && (
              <div className="dropdown-submenu">
                <ul>
                  {item.submenu.map((subitem, index) => (
                    <li key={index}>{subitem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
