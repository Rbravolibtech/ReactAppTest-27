import {useState} from "react"



const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changedTextHandler = () => {
        setChangedText(true);
    }

    return(
        <div>
            <h2>HELLO WORLD</h2>
          { !changedText&& <p> ITS GOOD TO SEE YOU</p>}
          { changedText &&  <p>CHANGED!</p>}
            <button onClick={changedTextHandler}>CHANGE TEXT</button>
        </div>
    )
}

export default Greeting;