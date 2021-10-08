import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PDF = (props) => {


    const options ={
        orientation: 'landscape',
        unit: 'in',
    };

    function handleClick() {
        window.location.reload();
    }

    return(
        <div>
            <div className="Post" ref={ref}>
                <div id='screenshot'>
                    <h1 id="titleletter">A TOKEN OF MY AFFECTIONS</h1>
                    <p>To MY DEAREST {props.recipient} FROM YOUR {props.title}  
                    {props.sender} How Are You? It doesnt matter, For I am about to make your day!
                    In this {props.daydescrip} day and age, we too rearely show appreciation for each other. Ive decided
                    its high time to do something about it, so Im giving you a {props.adjective} {props.gift}. Yes, It may be hard to
                    believe, and you are surely saying, "Heavens No! That is far too {props.compliment} of you!" But let me Assure you that this is
                    deserved.
                    PLEASE, TREASURE THIS GIFT! It is more than a Reminder of Me and my generus affections. You should see it not just as a first-class
                    {props.kindg}, but as a celebration of your {props.skill} lest you scheme up a way to repay me, let me say that no reciprocaton is called for.
                    I may even go so far as to refuse your gift - That is how seius I am. Unless of course you offer me {props.thing}.
                    </p>
                </div>
            </div>
            <button onClick={handleClick} id="button">Reset</button>
        <Pdf targetRef={ref} filename="post.pdf" options={options}>
            {({ toPdf }) => <button onClick = {toPdf} id="button">Print</button>}
        </Pdf>
        </div>        
    );
}

export default PDF;