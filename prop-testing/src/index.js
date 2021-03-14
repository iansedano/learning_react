import React from 'react';
import ReactDOM from 'react-dom';

function Child() {

}

const data = {
    'name': 'Ian',
    'age': '35',
    'dog': 'Gandhi',
    'languages': [
        'JavaScript',
        'Python',
        'C++'
    ]
}


function Main(data) {
    return (
        <div>{data.name}</div>
    )
}


ReactDOM.render(<Main {...data}/>, document.querySelector('#root'));