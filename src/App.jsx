// todo: stop input when time runs out, debug wpm

import './App.css';
import DisplayWords from './components/displayWords';
import CalculateWPM from './components/calculateWPM';
import { faker } from '@faker-js/faker';
import { useState, useRef } from 'react';

faker.seed(69);
const generatedWordsArr = faker.word.words(100);


export default function App() {
  const [inputWordsArr, setInputWordsArr] = useState('');
  const [time, setTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [wpmVisible, setWpmVisible] = useState(false);
  var timeRunning = useRef(null);

  // console.log(generatedWordsArr)
  
  const timerStart = (inputTime) => {
      setTime(inputTime);
      if (!timeRunning.current) {
          timeRunning.current = setInterval(() => {
              setTime(prevTime => {
                if (prevTime == 0) {
                    clearInterval(timeRunning.current);
                    timeRunning.current = null;
                    return 0;
                }
                return prevTime - 1;
              })
              setElapsedTime(prevElapsedTime => {
                if (prevElapsedTime == inputTime) {
                  clearInterval(timeRunning.current);
                  timeRunning.current = null;
                  return 0;
                }
                // console.log('elapsedTime', prevElapsedTime);
                return prevElapsedTime + 1;
              });
          }, 1000);  
      } else {
          return console.log('Timer already running!' + time);
      }
  }

  const handleTextChange = (event) => {
    // console.log(inputWord);
    const inputValue = event.target.value;
    setInputWordsArr(inputValue);

    if (inputWordsArr.length === 1) {
      timerStart(time);
    }
  }

  const handleAddTime = () => {
    setTime(time + 30);
    setWpmVisible(true);
  }
  const handleSubtTime = () => {
    if (time === 0) {
      return;
    }
    setWpmVisible(true);
    setTime(time - 30);
    if (time - 30 === 0) {
      setWpmVisible(false);
    }
  }

  return (
    <>
      <div>
        <div className='infoBox'>
          <div className='timeContainer'>
            <h1>Time: {time}</h1>
          </div>
          {wpmVisible && (
            <CalculateWPM inputWords={inputWordsArr} generatedWords={generatedWordsArr} inputTime={elapsedTime}/>
          )}
        </div>
        <DisplayWords inputWords={inputWordsArr} generatedWords={generatedWordsArr}/>
        <input type="text" className="inputField" onChange={handleTextChange}/>
        {timeRunning && 
          <>
            <button onClick={() => handleAddTime()}>Add 30 secs</button>
            <button onClick={() => handleSubtTime()}>Subtract 30 secs</button>
          </>
        } 
      </div>
    </>
  );
}


