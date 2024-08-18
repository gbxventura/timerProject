import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';

export default function Timer() {
  const [time, setTime] = useState(() => {
    const savedTime = localStorage.getItem('time');
    return savedTime ? parseInt(savedTime, 10) : 0;
  });
  const [isRunning, setIsRunning] = useState(() => {
    const savedIsRunning = localStorage.getItem('isRunning');
    return savedIsRunning ? JSON.parse(savedIsRunning) : false;
  });
  const [checklist, setChecklist] = useState(() => {
    const savedChecklist = localStorage.getItem('checklist');
    return savedChecklist ? JSON.parse(savedChecklist) : [];
  });
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    localStorage.setItem('time', time);
    localStorage.setItem('isRunning', JSON.stringify(isRunning));
    localStorage.setItem('checklist', JSON.stringify(checklist));

    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, checklist]);

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = time => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  const handleTaskClick = index => {
    const updatedChecklist = checklist.map((item, i) => {
      if (i === index) {
        return { ...item, done: true, animating: true };
      }
      return item;
    });
    setChecklist(updatedChecklist);

    // Remove a tarefa da lista após a animação
    setTimeout(() => {
      setChecklist(prev => prev.filter((_, i) => i !== index));
    }, 1000);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setChecklist(prevChecklist => [
        { text: newTask, done: false, animating: false },
        ...prevChecklist,
      ]);
      setNewTask('');
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className={styles.timerContent}>
      <div className={styles.clock}>
        <span>{formatTime(time)}</span>
      </div>
      <div className={styles.buttons}>
        <button
          className={`${styles.btnTimer} ${styles.btnStart}`}
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className={`${styles.btnTimer} ${styles.btnPause}`}
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className={`${styles.btnTimer} ${styles.btnStop}`}
          onClick={handleStop}
        >
          Stop
        </button>
      </div>
      <div className={styles.checklist}>
        <div className={styles.addTask}>
          <input
            type='text'
            value={newTask}
            onChange={e => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Adicionar nova tarefa'
          />
          <button onClick={handleAddTask}>Adicionar</button>
        </div>
        <ul>
          {checklist.map((item, index) => (
            <li
              key={index}
              className={`${item.done ? styles.done : ''} ${
                item.animating ? styles.animating : ''
              }`}
            >
              <input
                type='checkbox'
                checked={item.done}
                readOnly
                onClick={() => handleTaskClick(index)}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
