import '../App.css';

const DisplayInputWords = ({inputWords,generatedWords}) => {
    const inputWordsArr = inputWords.split(/\s+/);
    const generatedWordsArr = generatedWords.split(/\s+/);
    
    if (inputWordsArr[0].length == 0) {
        return;
    }

    return (
        <div className="inputBox">
        {/* this part of the code compares each inputWord char to each generatedWord char and displays the correct color */}
            {generatedWordsArr.map((generatedWord, wordIndex) => (
                <span key={wordIndex}>
                    {generatedWord.split('').map((generatedChar, charIndex) => {
                        const inputWord = inputWordsArr[wordIndex];
                        const inputChar = inputWord && inputWord[charIndex];
                        const isCorrectChar = generatedChar === inputChar;
                        return (
                            <span
                                key={charIndex}
                                className={isCorrectChar ? 'correctChar' : 'incorrectChar'}
                                style={{ color: isCorrectChar ? 'green' : inputChar ? 'red' : 'black' }}
                            >
                                {inputChar || generatedChar}
                            </span>
                        )
                    })} {' '}
                </span>     
            ))}
        </div>
    )
};

export default function DisplayWords({generatedWords, inputWords}) {

    return (
        <div className="displayWordsContainer">
            {
            inputWords ? 
                <h3 className='inputWordsWrapper'>
                    <DisplayInputWords inputWords={inputWords} generatedWords={generatedWords}/>
                </h3> : 
                <h3 className='generatedWordsWrapper'>
                    {generatedWords.split(' ').map((word, index) => <span key={index}>{word + ' '}</span>)}
                </h3>            
            }
        </div>
    );
}
