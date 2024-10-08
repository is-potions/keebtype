import '../App.css';

export default function CalculateWPM({inputWords, generatedWords, inputTime}) {
    if (!inputWords || !generatedWords) {
      console.log('in none');
        return (
          <div className="wpm">
            <h1>WPM: 0</h1>
          </div>
        );
    }

    if (inputWords.length === 0 || generatedWords.length === 0) {
      console.log('in none 2');
        return (
          <div className="wpm">
            <h1>WPM: 0</h1>
          </div>
        );
    }
    const inputWordsArr = inputWords.split('');
    const generatedWordsArr = generatedWords.split('');
    const correctWords = inputWordsArr.filter(
      (word, index) => word === generatedWordsArr[index]
    ).length;
    const wpm = Math.round((correctWords / 5) / inputTime);

    console.log('in main');
    return (
      <div className="wpm">
        <h1>WPM: {inputTime}</h1>
      </div>  
    );
}
