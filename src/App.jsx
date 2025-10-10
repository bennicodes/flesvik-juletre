import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <div className={styles.navbarContainer}>
          <Navbar />
        </div>
        
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
