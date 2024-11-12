import '../App.css';
import { useState, useEffect } from 'react';


// function processWords(generatedWords) {
  
// }

export default function CalculateWPM({inputWords, generatedWords, inputTime}) {
  const [wpm, setWPM] = useState(0);
  const [lastTime, setLastTime] = useState(0);

  useEffect(() => {
    const inputWordsArr = inputWords.trim().split(/\s+/);
    const generatedWordsArr = generatedWords.split(/\s+/);
    const correctChar = inputWordsArr.filter(
      (word, index) => word === generatedWordsArr[index]
    ).length;

    if (inputTime !== 0) {
      setLastTime(inputTime);
      setWPM(Math.round((correctChar/5) / (inputTime/60)))
      // console.log(wpmCalc, inputTime)
    } else {
      setWPM(Math.round((correctChar/5) / (lastTime/60)))
      // console.log(wpmCalcNOT, lastTime)
    }
    
    }, [inputWords, generatedWords, inputTime, lastTime]);

    if (inputWords.length === 0 || generatedWords.length === 0) {
        return (
          <div className="wpm">
            <h1>WPM: 0</h1>
          </div>
        );
    }
    return (
      <div className="wpm">
        <h1>WPM: {wpm}</h1>
      </div>  
    );
}
