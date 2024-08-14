import styles from './App.module.css';

function App() {
  return (
    <div className={styles.timerContent}>
      <div className={styles.clock}>
        <span>00:00:00:00</span>
      </div>
      <div className={styles.buttons}></div>
      <div className={styles.checklist}></div>
    </div>
  );
}

export default App;
