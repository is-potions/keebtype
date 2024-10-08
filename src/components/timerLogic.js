import { useState, useRef } from 'react';
export default function TimerLogic() {
    const [time, setTime] = useState(0);
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
                });
            }, 1000);  
        } else {
            return console.log('Timer already running!' + time);
        }
    }

    return {time, timerStart};
}