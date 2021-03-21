import React from 'react';
import ReactDOM from 'react-dom';

function Logo () {
    return (
        <h3>BBVA</h3>
    )
}

let Chip = () => <div>=</div>;

let Number = ({ number }) => {
    let l = number.split("");
    let e = [];
    for (let i=0; i!=4; ++i){
        let set = [];
        for (let j=0; j!=4; ++j) {
            set.push(l.shift())
        }
        e.push(set);
    }

    e = e.map((set, i) => {
        return <span key={i} className="number-set">{set.join("")}</span>
    })

    return e;
}

let ExpDate = () => null
let CardHolder = () => null
let VisaLogo = () => null


function CreditCard({ data }) {
    return (
        <div className="credit-card">
            <Logo/>
            <Chip/>
            <Number number={data.number}/>
            <ExpDate/>
            <CardHolder/>
            <VisaLogo/>
        </div>
    )
}

let data = {
    "number": "9398349839294756"
}

ReactDOM.render(
    <CreditCard data={data}/>,
    document.getElementById("root")
)