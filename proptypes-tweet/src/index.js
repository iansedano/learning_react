import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import './index.css';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <span className="time">{timeString}</span>
    );
}

Time.propTypes = {
    text: PropTypes.string
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
        <i className="fa fa-retweet"/>
        {getRetweetCount(count)}
    </span>
);

RetweetButton.propTypes = {
    count: PropTypes.number
}

const LikeButton = ({ count }) => (
    <span className="like-button">
        <i className="fa fa-heart"/>
        {count > 0 && 
            <span className="like-count">
                {count}
            </span>}
    </span>
);

LikeButton.propTypes = {
    count: PropTypes.number
}

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

Message.propTypes = {
    text: PropTypes.string
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

Author.propTypes = {
    author : PropTypes.shape({
        name: PropTypes.string,
        handle: PropTypes.string
    })
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
                    <ReplyButton/>
                    <RetweetButton count={tweet.retweets}/>
                    <LikeButton count={tweet.likes}/>
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
    retweets: 10,
    timestamp: "2016-07-30 21:24:37"
};

ReactDOM.render( <Tweet tweet={testTweet}/>, document.querySelector('#root'));