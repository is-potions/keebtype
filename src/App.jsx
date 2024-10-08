import './App.css';
import DisplayWords from './components/displayWords';
import CalculateWPM from './components/calculateWPM';
import Timer from './components/timer';
import { faker } from '@faker-js/faker';
import { useState } from 'react';

faker.seed(69);
const generatedWords = faker.word.words(100);

export default function App() {
  const [inputWords, setInputWords] = useState('');
  // const [isRunning, setIsRunning] = useState(false);
  
  const handleChange = (event) => {
    setInputWords(event.target.value);
  }

  return (
    <div>
      <DisplayWords inputWords={inputWords} generatedWords={generatedWords}/>
      <input type="text" className="inputField" onChange={handleChange}/>
      <Timer userTime={0} generatedWords={generatedWords} inputWords={inputWords}/>
      <CalculateWPM inputWords={inputWords} generatedWords={generatedWords} inputTime={30}/>
    </div>
  );
}
