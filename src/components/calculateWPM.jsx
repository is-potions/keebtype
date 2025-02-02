import '../App.css';
import { useState, useEffect } from 'react';

export default function CalculateWPM({inputWords, generatedWords, inputTime}) {
  const [wpm, setWPM] = useState(0);

  useEffect(() => {
    // splits strings into arrays to remove spaces in comparison
    const inputWordsArr = inputWords.trim().split(/\s+/);
    const generatedWordsArr = generatedWords.split(/\s+/);

    // filters right words and calculates correct characters
    const correctChar = inputWordsArr.filter(
      (word, index) => word === generatedWordsArr[index]
    ).join('').length;

    if (inputTime > 0) {
      setWPM(Math.round((correctChar/5) / (Math.max(inputTime,1)/60)))
    } 
    
    }, [inputWords, generatedWords, inputTime]);

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
