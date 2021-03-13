import React from 'react';
import ReactDOM from 'react-dom';

function MyThing() {
  return (
    <div className='book'>
      <div className='title'>
                     The Title
      </div>
      <div className='author'>
        The Author

      </div>
      <ul className='stats'>
        <li className='rating'>
          5 stars

        </li>
        <li className='isbn'>
          12-325478-910
        </li>
      </ul>
    </div>
  )

}

function t(){
  return 10
}

function Greeting() {
  let username = "undefined";
  let greeting;
  if (username === undefined) {
    greeting = "you are no logged in pal"
  } else {
    greeting = `Hello ${username}!`
  }
  return (
    <>
    <h1>Hello!</h1>
    <p>{t()}</p>
    </>
  )
}

function Main() {
  return(
    <>
    <MyThing/>
    <Greeting/>
    </>
  )
}

ReactDOM.render(
  <Main/>,
  document.querySelector('#root')
)

