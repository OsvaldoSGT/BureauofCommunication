import React, { useState } from 'react';
import PDF from './PDF';
function Post() {

    const [status, setStatus] = useState('initial');

    const [recipient, setRecipient] = useState('');
    const [title, setTitle] = useState('');
    const [sender, setSender] =useState('');
    const [daydescrip, setDaydescrip] = useState('modern');
    const [adjective, setAdjective] = useState ('');
    const [gift, setGift] = useState('');
    const [compliment, setCompliment] = useState('generus');
    const [kindg, setKindg] = useState('');
    const [skill, setSkill] = useState('');
    const [thing, setThing] = useState('');

    function handleSubmit(event) {  
        event.preventDefault();
        let inputArray = [recipient, title, sender, daydescrip, adjective, gift, compliment, kindg, skill, thing];
        for (let i = 0; i< inputArray.length; i++)
        {
            if(inputArray[i] != '')
            {
                setStatus('complete');
            }
            else
            {
                alert('Please fill in all values');
                setStatus('initial');
                break;
            }
        }
    

    }

    function handleClick() {
        window.location.reload();
    }

    function handleRandom() {
        const arrRecipient = ['Juancho', 'Osvaldo', 'Paquito'];
        const arrTitle = ['Friend', 'Girlfriend', 'BestFriend', 'BoyFriend'];
        const arrSender = ['Pepe', 'Caty', 'Pancho'];
        const arrDaydescrip =['modern', 'selfish', 'dastardly'];
        const arrAdjective =['awesome', 'incredible','fabulous'];
        const arrGift =['playStation', 'xbox','candy'];
        const arrCompliment = [ 'generus', 'insightful', 'brilliant'];
        const arrKindg = ['entertaining', 'sweety', 'fun'];
        const arrSkill = ['great achievement', 'awesome accomplishment', 'cool victory'];
        const arrThing = ['a Car', 'a house', 'your love'];

        setRecipient(arrRecipient[Math.floor(Math.random() * arrRecipient.length)]);
        setTitle(arrTitle[Math.floor(Math.random() * arrTitle.length)]);
        setSender(arrSender[Math.floor(Math.random() * arrSender.length)]);
        setDaydescrip(arrDaydescrip[Math.floor(Math.random() * arrDaydescrip.length)]);
        setAdjective(arrAdjective[Math.floor(Math.random() * arrAdjective.length)]);
        setGift(arrGift[Math.floor(Math.random() * arrGift.length)]);
        setCompliment(arrCompliment[Math.floor(Math.random() * arrCompliment.length)]);
        setKindg(arrKindg[Math.floor(Math.random() * arrKindg.length)]);
        setSkill(arrSkill[Math.floor(Math.random() * arrSkill.length)]);
        setThing(arrThing[Math.floor(Math.random() * arrThing.length)]);
    }

    if (status === 'initial') {
    return (
        <div>
            <div>
                <h1>Bureau of Communication</h1>
                <h3>Osvaldo Gomez Tirado A01273675</h3>
                <h4>Please fill the data in order to generate your gift letter</h4>
            </div>
            <div>
                <form id="form" onSubmit={handleSubmit}>
                    <label htmlFor="Recipient">Name of Recipient:</label>
                    <input 
                    type="text" 
                    className="blankinput" 
                    id="Recipient"
                    value={recipient}
                    onChange = {(event) => setRecipient(event.target.value)}
                    />

                    <label htmlFor="Title">Title:</label>
                    <input 
                    type="text" 
                    className="blankinput" 
                    id="Title"
                    value={title}
                    onChange = {(event) => setTitle(event.target.value)}
                    />

                    <label htmlFor="Sender">Name of Sender:</label>
                    <input 
                    type="text" 
                    className="blankinput" 
                    id="Sender"
                    value={sender}
                    onChange = {(event) => setSender(event.target.value)}/>

                    <label>Day Description:</label>
                    <select
                    value={daydescrip}
                    onChange={(event) => setDaydescrip(event.target.value)}
                    >
                    <option value="modern">modern</option>
                    <option value="selfish">selfish</option>
                    <option value="dastardly">dastardly</option>
                    </select>

                    <label htmlFor="Adjective">Effusive Adjective:</label>
                    <input 
                    type="text" 
                    className="blankinput" 
                    id="Adjective"
                    value={adjective}
                    onChange = {(event) => setAdjective(event.target.value)}
                    />

                    <label htmlFor="Gift">Gift:</label>
                    <input 
                    type="text"
                    className="blankinput"
                    id="Gift"
                    value={gift}
                    onChange = {(event) => setGift(event.target.value)}
                    />
                    
                    <label>Compliment to recieve gift:</label>
                    <select
                    value={compliment}
                    onChange={(event) => setCompliment(event.target.value)}
                    >
                    <option value="generus">generus</option>
                    <option value="insightful">insightful</option>
                    <option value="brilliant">brilliant</option>
                    </select>

                    <label htmlFor="KindGift">Kind of Gift:</label>
                    <input 
                    type="text" 
                    className="blankinput" 
                    id="KindGift"
                    value={kindg}
                    onChange = {(event) => setKindg(event.target.value)}
                    />
                
                    <label htmlFor="Skill">Unique Skill or Characteristic:</label>
                    <input 
                    type="text"
                    className="blankinput" 
                    id="Skill"
                    value={skill}
                    onChange = {(event) => setSkill(event.target.value)}
                    />

                    <label htmlFor="Thing">A particularly alluring thing:</label>
                    <input 
                    type="text" 
                    className="blankinput" 
                    id="Thing"
                    value={thing}
                    onChange = {(event) => setThing(event.target.value)}
                    />
                    
                    <div id="buttons">
                    <button type="button" onClick={handleRandom} id="button">Randomize</button>
                    <button type="submit" id="button">Generate</button>
                    <button type="button" onClick={handleClick} id="button">Reset</button>
                    </div>
            </form>
            </div> 

        </div>
    );}

    else if (status === 'complete') {
        return(
            <div>
                <PDF 
                recipient={recipient} 
                title={title} 
                sender={sender} 
                daydescrip={daydescrip} 
                adjective={adjective} 
                gift={gift} 
                compliment={compliment} 
                kindg={kindg}
                skill={skill}
                thing={thing} 
                />
            </div>
        );
    }
  }

  export default Post;