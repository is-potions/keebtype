import { useState } from 'react';
import TimerLogic from '../App';
import '../App.css';

export default function Timer ({ userTime }) {
    const [inputTime, setInputTime] = useState(userTime);
    const {time, timerStart} = TimerLogic();
    const handleTimeChange = () => {
        setInputTime(event.target.value);
        // time=inputTime;
    }

    // const handleEnter = () => {
    //     if ( event.target.value !== '') {
    //         timerStart(inputTime);
    //         event.target.value = '';
    //     }
    // }
    
    return (
        <div>
            <h1>Time: {time}</h1>
            <input 
                type="text" 
                className="inputField" 
                onChange={handleTimeChange} 
                // onKeyDown={(e) => {
                //     if (e.key === 'Enter') {
                //         handleEnter() 
                //         } 
                //     }
                // }
            />

        </div>
    );
}
