import './App.css';
import DisplayWords from './components/displayWords';
import CalculateWPM from './components/calculateWPM';
// import Timer from './components/timer';
import { faker } from '@faker-js/faker';
import { useState, useRef } from 'react';

faker.seed(69);
const generatedWords = faker.word.words(100);

export default function App() {
  const [inputWords, setInputWords] = useState('');
  const [time, setTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  var timeRunning = useRef(null);
  
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
  }  // const [isRunning, setIsRunning] = useState(false);

//   const handleTimeChange = (event) => {
//     setTime(event.target.value);
// }
  
  const handleTextChange = (event) => {
    setInputWords(event.target.value);
    if (event.target.value.length === 1) {
      timerStart(time);
    }
  }

  const handleAddTime = () => {
    setTime(time + 30);
  }
  const handleSubtTime = () => {
    if (time === 0) {
      return;
    }
    setTime(time - 30);
  }

  return (
    <div>
      <DisplayWords inputWords={inputWords} generatedWords={generatedWords}/>
      <input type="text" className="inputField" onChange={handleTextChange}/>
      <h1 className="time">Time: {time}</h1>
      {/* <input type="text" className="inputField" onChange={handleTimeChange}/> */}
      <button onClick={() => handleAddTime()}>Add 30 secs</button>
      <button onClick={() => handleSubtTime()}>Subtract 30 secs</button>
      <CalculateWPM inputWords={inputWords} generatedWords={generatedWords} inputTime={elapsedTime}/>

    </div>
  );
}
