import {useState} from "react"

import Output from "./Output";


const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    }

    return(
        <div>
            <h2 className="hello">HELLO WORLD</h2>
          { !changedText&& <Output> ITS GOOD TO SEE YOU</Output>}
          { changedText &&  <Output>CHANGED!</Output>}
            <button onClick={changedTextHandler}>CHANGE TEXT</button>
        </div>
    )
}

export default Greeting;