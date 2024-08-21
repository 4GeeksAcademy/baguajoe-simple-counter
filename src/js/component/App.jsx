import React, { useState, useEffect } from "react"
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "../calculateseconds";
import { StopButton, ResumeButton, ResetButton } from "./Buttons";

function App() {
    const [counter, setCounter] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1)
            }, 1000)
        }
        return () => clearInterval(interval);
    }, [isRunning])

    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
    }
    
    const handleStop = () => {
        setIsRunning(false);
    }

        const handleResume = () => {
            setIsRunning(true);
        }

        return (
            <>
                <SimpleCounter
                    hundredThousandsDigit={calculateSeconds(counter, 100000)}
                    tenThousandsDigit={calculateSeconds(counter, 10000)}
                    thousandsDigit={calculateSeconds(counter, 1000)}
                    hundredsDigit={calculateSeconds(counter, 100)}
                    tensDigit={calculateSeconds(counter, 10)}
                    onesDigit={calculateSeconds(counter, 1)}
                />
                <div className="buttonContainer">
                    <ResumeButton onResume={handleResume} />
                    <StopButton onStop={handleStop} />
                    <ResetButton onReset={handleReset} />
                </div>
            </>
        );
    }

    export default App