//import ReactDOM from 'react-dom'
import React from "react";

//const root = ReactDOM.createRoot(document.getElementById('root'));

function Time() {
    <div>
        <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
}

setInterval(Time, 1000);

export default Time;
