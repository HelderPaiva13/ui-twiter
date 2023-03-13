import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import Tweet from "../components/Tweet"

import './Timeline.css'

export const Timeline = () => {
  const [tweets, setTweets] = useState([
    "Tweet 1",
    "Tweet 2"
  ])
  const [newTweet, setNewTweet] = useState('');

  const createNewTweet = (event: FormEvent)=> {
    event.preventDefault();
    
    setTweets([newTweet,...tweets]);
    setNewTweet('');
  }

  const handleHotKeySubmit = (event: KeyboardEvent)=>{
    if( event.key === 'Enter' && event.ctrlKey) {
      setTweets([newTweet,...tweets]);
      setNewTweet('');
    }
  }

  return (
    <main className='timeline'>
      <Header title="Home"/>

      
      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/HelderPaiva13.png' alt='Helder'/>
          <textarea 
            id='tweet' 
            placeholder="whats's happening"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value);
            }}
          />
        </label>
        <button type='submit'>Tweet</button>
      </form>

      <Separator/>
       {/* como a key é o proprio tweet, caso tenha outro igual
       vai ocasionar em erro, neste caso tem que criar um id
          para cada tweet*/}       
      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}