import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

let CheckBox = () => <input type="checkbox" className="checkbox"/>

let Star = () => <div className="star e">☆</div>

let PriorityMarker = () => <div className="pri-marker e">=></div>

let Sender = ({ sender }) => <div className="sender e">{sender}</div>

let Subject = ({ subject }) => <div className="subject e">{subject}</div>

let Snippet = ({ snippet }) => <div className="snippet e">{snippet}</div>

let Date = ({ date }) => <div className="date e">{date}</div>


function MailLine({ data }) {
    return (
        <div className="mail-line">
            <CheckBox/>
            <Star/>
            <PriorityMarker/>
            <Sender sender={data.sender}/>
            <Subject subject={data.subject}/>
            <Snippet snippet={data.snippet}/>
            <Date date={data.date}/>
        </div>
    )
}

let data = {
    "sender": "momonomo@manamana.mi",
    "subject": "mimi mimi?",
    "snippet": "will you please mo the mi ma me and mu the mo? And then don't forget to mimamomuuuu",
    "date": "05/08/99"
}

ReactDOM.render(
    <MailLine data={data}/>,
    document.getElementById("root")
)