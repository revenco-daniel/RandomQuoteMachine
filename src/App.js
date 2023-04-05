import React from 'react';
import './App.css';

function App() {

  const [quotes,setQuotes] = React.useState([]);
  const [randomQuotes,setRandomQuotes] = React.useState({});
  const [color,setColor]=React.useState('#73A857')

  React.useEffect(()=>{
    async function fetchData(){
      const response=await fetch("https://type.fit/api/quotes")
      const data=await response.json();
      
      setQuotes(data);
      let randomIndex=Math.floor(Math.random()*data.length);
      setRandomQuotes(data[randomIndex]);
  
    }
    fetchData();
  },[]);

  function handleClick(){
    const colors = [
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
    ];
    let randomIndex=Math.floor(Math.random()*quotes.length);
    let randomColors=Math.floor(Math.random()*colors.length);
    setRandomQuotes(quotes[randomIndex]);
    setColor(colors[randomColors]);
    
  }

  return (
    <div className='row ' style={{backgroundColor: color, minHeight: "100vh"}}>
    <div className='align-self-center'>
    <div className='container rounded ' id="quote-box">
     <div id="text">
      <p>&quot;{randomQuotes.text}&quot;</p>
     </div>
     <div id="author">
      <p>-{randomQuotes.author||"No author"}</p>
     </div>
     <button className="btn btn-success" id="new-quote" onClick={handleClick}>New Quote</button>
     <a
        href={"https://twitter.com/intent/tweet/?text="+encodeURIComponent('"'+randomQuotes.text+'" -'+randomQuotes.author)}
        className="btn btn-primary"
        id="tweet-quote"
        title="Tweet this quote!"
        target="_blank"
        rel='noreferrer'
      >
        <i className="fa fa-twitter"></i>
      </a>
      <a
        href={'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+
        encodeURIComponent(randomQuotes.author) +
        '&content=' +
        encodeURIComponent(randomQuotes.text) +
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'}
        className="btn btn-primary"
        id="tumblr-quote"
        title="Post this quote on tumblr!"
        target="_blank"
        rel='noreferrer'
      >
        <i className="fa fa-tumblr"></i>
      </a>
      </div>
      <p className='creator '>by Revenco Daniel</p> 
    </div>
  </div>
  );
}

export default App;
//