import { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Button } from '../components/ui/Button';
import { Tag } from '../components/ui/Tag';
import { Toggle } from '../components/ui/Toggle';
import './Home.css';

export const Home = () => {
  const [mode, setMode] = useState('Text Chat');
  const [age, setAge] = useState('18-24');
  const [selectedTags, setSelectedTags] = useState(['#gaming']);

  const modes = ['Text Chat', 'Voice Call', 'Video Call'];
  const ages = ['18-24', '25-34', '35+'];
  const availableTags = ['#gaming', '#music', '#movies', '#tech'];

  const handleTagClick = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="home-main">
        <h1 className="page-title">Home Page</h1>

        <section className="section-block">
          <p className="section-label">Mode selection</p>
          <div className="button-group">
            {modes.map(m => (
              <Button key={m} isActive={mode === m} onClick={() => setMode(m)}>
                {m === 'Text Chat' && '💬'}
                {m === 'Voice Call' && '📞'}
                {m === 'Video Call' && '📹'}
                {m}
              </Button>
            ))}
          </div>
        </section>

        <div className="start-chat-wrapper">
          <Button variant="large">Start Chat</Button>
        </div>

        <div className="filters-card">
          <h3 className="filters-title">Filters</h3>
          
          <div className="filter-row">
            <p className="section-label">Age category</p>
            <div className="button-group">
              {ages.map(a => (
                <Button key={a} isActive={age === a} onClick={() => setAge(a)}>
                  {a}
                </Button>
              ))}
            </div>
          </div>

          <div className="filter-row">
            <p className="section-label">Interest tags</p>
            <div className="tag-group">
              {availableTags.map(tag => (
                <Tag 
                  key={tag} 
                  label={tag} 
                  isActive={selectedTags.includes(tag)} 
                  onClick={() => handleTagClick(tag)} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Preferences */}
        <div className="preferences-row">
          <div className="pref-item">
            <label className="section-label">Language selector</label>
            <select className="select-input">
              <option>English</option>
              <option>Ukrainian</option>
            </select>
          </div>
          <div className="pref-item">
            <label className="section-label">Theme/ style</label>
            <Toggle />
          </div>
        </div>

      </main>
    </div>
  );
};