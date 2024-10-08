import { useState } from 'react';
import TimerLogic from './timerLogic';
import '../App.css';

export default function Timer ({ userTime }) {
    const [inputTime, setInputTime] = useState(userTime);
    const {time, timerStart} = TimerLogic();
    const handleChange = () => {
        setInputTime(event.target.value);
    }

    const handleEnter = () => {
        if ( event.target.value !== '') {
            timerStart(inputTime);
            event.target.value = '';
        }
    }
    
    return (
        <div>
            <h1>Time: {time}</h1>
            <input 
                type="text" 
                className="inputField" 
                onChange={handleChange} 
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleEnter() 
                        } 
                    }
                }
            />

        </div>
    );
}
