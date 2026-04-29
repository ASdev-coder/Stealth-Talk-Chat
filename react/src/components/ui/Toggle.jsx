import { useTheme } from '../../hooks/useTheme';
import './Toggle.css';

export const Toggle = () => {
  const { theme, setLightMode, setDarkMode } = useTheme();

  return (
    <div className="toggle-container">
      <button 
        className={`toggle-btn ${theme === 'light' ? 'active' : ''}`} 
        onClick={setLightMode}
      >
        Light Mode
      </button>
      <button 
        className={`toggle-btn ${theme === 'dark' ? 'active' : ''}`} 
        onClick={setDarkMode}
      >
        Dark Mode
      </button>
    </div>
  );
};