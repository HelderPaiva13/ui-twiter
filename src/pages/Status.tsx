import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import Tweet from "../components/Tweet";

import './Status.css'

export const Status = () => {

  const [answers, setAnswers] = useState([
    'Condordo...',
    'olha faz sentido',
    'parabens pelo progresso'
  ]);
  const [newAnswers, setNewAnswers] = useState('');

  const createNewAnswers = (event: FormEvent)=> {
    event.preventDefault();
    
    setAnswers([newAnswers,...answers]);
    setNewAnswers('');
  }

  const handleHotKeySubmit = (event: KeyboardEvent)=> {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
      setAnswers([newAnswers,...answers]);
      setNewAnswers('');
    }
  }

  return(
    <main className='status'>
      <Header title="Tweet"/>
      
      <Tweet content="Lorem ipsum dolor sit amet consectetur 
      adipisicing elit. Vero eum, animi minima a pariatur 
      dolore impedit ducimus? Dolores est suscipit optio 
      expedita dolore id molestiae ullam, deleniti nam at? 
      Corrupti." />

      <Separator/>

      <form onSubmit={createNewAnswers} className='answer-tweet-form'>
        <label htmlFor='tweet'>
          <img src='https://github.com/HelderPaiva13.png' alt='Helder'/>
          <textarea 
            id='tweet' 
            placeholder="tweet your answer"
            value={newAnswers}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswers(event.target.value);
            }}
          />
        </label>
        <button type='submit'>
          <PaperPlaneRight/>
          <span>Answer</span>
        </button>
      </form>


      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  );
}