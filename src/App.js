
import './App.css';
import Button from './components/Button';
import Links from './components/Links';
import Navbar from './components/Navbar';
import styles from './navbar.module.css'

function App() {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <Links />
      <Button />
    </div>
  );
}

export default App;
