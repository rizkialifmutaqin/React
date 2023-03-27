import React, {useState} from 'react';

// let increment = 0;

function ToDoIncrement() {
    const [increment, setIncrement] = useState(0); 
    function buttonNambahClickHandler() {
        // console.log(increment);
        setIncrement(increment + 1);
    }

    return (
        <>
            <span style={{marginRight: '0.25em'}}>{increment}</span>
            <span>
                <button onClick={buttonNambahClickHandler}>Nambah</button>
            </span>
        </>
    );
}

export default ToDoIncrement;