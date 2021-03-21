import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';


function AddressLine ({ content }) {
    return(
        <div>
            {content}
        </div>
    )
}

function AddressBox ({ address }) {

    let lines = address.lines.map((line, i) => {
        return <AddressLine key={i} content={line}/>
    })

    return(
        <>
        <AddressLine content={address.name}/>
        {lines}
        </>
    )
}

function Letter ({ data }) {
    return(
        <div id="letter">

            <div className="address" id="sender">
                <AddressBox address={data.sender}/>
            </div>
            <div id="stamp">STAMPO</div>
            <div className="address" id="recipient">
                <AddressBox address={data.recipient}/>
            </div>
        </div>
    )
}

function Main() {
    let data = {
        "recipient": {
            "name": "Silvia",
            "lines": [
                "Pere IV 93 2o1a",
                "Barcelona 08018"
            ]
        },
        "sender": {
            "name": "Ian",
            "lines": [
                "Baldernock Mill",
                "Milngavie",
                "G62 6HB"
            ]
        }
    }

    return (
        <Letter data={data}/>
    )
}

ReactDOM.render(<Main/>, document.getElementById("root"))