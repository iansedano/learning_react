import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
}

const ReplyButton = () => (
    <i className="fa fa-reply reply-button"/>
);


function getRetweetCount(count) {
    if(count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
}

const RetweetButton = ({ count }) => (
    <span className="retweet-button">
        <i className="fa fa-retweet retweet-button"/>
        {getRetweetCount(count)}
    </span>
);
const LikeButton = () => (
    <i className="fa fa-heart like-button"/>
);
const MoreOptionsButton = () => (
    <i className="fa fa-ellipsis-h more-options-button"/>
);

function Avatar({ hash }) {
    const url = `https://gravatar.com/avatar/${hash}`
    return(
        <img
            src={url}
            className="avatar"
            alt="avatar" />
    );
}

function Message({ text }) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

function Author({ author }) {
    const { name, handle } = author;
    return (
        <span className="author">
            <span className="name">{name}</span>
            <span className="handle">@{handle}</span>
        </span>
    );
}

function Tweet({ tweet }) {
    return(
        <div className="tweet">
            <Avatar hash={tweet.gravatar}/>
            <div className = "content">
                <Author author={tweet.author}/>
                <Time time={tweet.timestamp}/>
                <Message text={tweet.message}/>
                <div className="buttons">
                    <ReplyButton count={tweet.retweets}/>
                    <RetweetButton count={tweet.likes}/>
                    <LikeButton/>
                    <MoreOptionsButton/>
                </div>
            </div>
        </div>
    );
}


const testTweet = {
    message: "Something about Cats.",
    gravatar: "xyz",
    author: {
        handle: "catperson",
        name: "I AM CAT PERSON"
    },
    likes: 2,
    retweets: 0,
    timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render( <Tweet tweet={testTweet}/>, document.querySelector('#root'));