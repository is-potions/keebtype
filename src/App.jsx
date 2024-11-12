// todo: stop input when time runs out, debug wpm

import './App.css';
import DisplayWords from './components/displayWords';
import CalculateWPM from './components/calculateWPM';
// import Timer from './components/timer';
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

//   const [isRunning, setIsRunning] = useState(false);

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
// }

  const handleTextChange = (event) => {
    // console.log(inputWord);
    const inputValue = event.target.value;
    setInputWordsArr(inputValue);
    // if (inputValue.endsWith(' ')) {
    //   const newWord = inputValue.trim();
    //   if (newWord) {
    //     setInputWordsArr(inputWordsArr + ' ' + newWord);
    //   }
    //   setInputWord('');
    //   event.target.value = '';
    // } else {
    //   setInputWord(inputValue);
    // }

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
        <DisplayWords inputWords={inputWordsArr} generatedWords={generatedWordsArr}/>
        <input type="text" className="inputField" onChange={handleTextChange}/>
        <h1 className="time">Time: {time}</h1>
        {timeRunning && 
          <>
            <button onClick={() => handleAddTime()}>Add 30 secs</button>
            <button onClick={() => handleSubtTime()}>Subtract 30 secs</button>
          </>
        } 
        {wpmVisible && (
          <CalculateWPM inputWords={inputWordsArr} generatedWords={generatedWordsArr} inputTime={elapsedTime}/>
        )}
      </div>
    </>
  );
}


