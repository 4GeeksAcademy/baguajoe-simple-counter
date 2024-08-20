import React, {useState, useEffect} from "react"
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "../calculateseconds";

function App() {
    const [counter, setCounter] = useState(0);
    const[isRunning, setIsRunning]=useState(true);

    useEffect(()=>{
        let interval;
        if (isRunning){
            interval = setInterval(()=>{
                setCounter(prevCounter => prevCounter +1)
            }, 1000)
        } 
        return ()=>clearInterval(interval);
    }, [isRunning])
    

    return (
        <> 
        <SimpleCounter 
            hundredThousandsDigit={calculateSeconds(counter, 100000)}
            tenThousandsDigit={calculateSeconds(counter, 10000)}
            ThousandsDigit={calculateSeconds(counter, 1000)}
            hundredsDigit={calculateSeconds(counter, 100)}
            tensDigit={calculateSeconds(counter, 10)}
            onesDigit={calculateSeconds(counter, 1)}
        />
        </>
    );
}

export default App