import React from 'react';
import ReactDOM from 'react-dom';

function HelloWorld() { // function component | function component | stateless function components SFC
    return(
        <div>
            {5+5}
        </div>
    );
}

ReactDOM.render(
    <HelloWorld/>,
    document.querySelector('#root')
);
