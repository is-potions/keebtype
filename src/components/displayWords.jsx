import '../App.css';

const DisplayInputWords = ({inputWords,generatedWords}) => (
    <div className="inputBox">
        {generatedWords.split('').map((chat, index) => 
            inputWords[index] === chat ? (
                <span key={index} style={{color: 'green'}}>{chat}</span>
            ) : (
                <span key={index} style={{color: 'red'}}>{inputWords[index]}</span>
            ))}
    </div>
);

export default function DisplayWords({generatedWords, inputWords}) {

    return (
        <div className="displayWordsContainer">
            <h3 className='generatedWordsWrapper'>
                {generatedWords}
            </h3>
            <div className='inputWordsWrapper'>
                <DisplayInputWords inputWords={inputWords} generatedWords={generatedWords}/>
            </div>
        </div>
    );
}
