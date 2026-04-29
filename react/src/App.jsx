import { ThemeProvider } from './context/ThemeProvider';
import { Home } from './pages/Home';
import './styles/global.css';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;