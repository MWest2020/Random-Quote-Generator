/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/

//Array of quotes. I couldn't really find a good quote to demonstrate with just a year. So I provide one of my own.

const quotes = [
  { 
    quote: 'Those who can imagine anything, can create the impossible.',
    source: 'Alan Turing',
  },
  { 
    quote: 'If you tell the truth, you don\'t have to remember anything.',
    source: 'Mark Twain',
  },
  {
    quote:'In life, one find friends in the strangest places',
    source: 'Takashi Shimura', 
    citation: 'Seven Samurai',
    year: 1954 
  },
  { 
    quote: 'Do. Or do not. There is no try',
    source: 'Master Yoda',
    citation: 'The Empire Strikes Back',
    year: 1980
  },
  { 
    quote: 'Ow yes, the past can hurt. But you can run from it, or learn from it.',
    source: 'Raifiki', 
    citation: 'The Lion King',
    year: 1994,
    tags: 'It\'s also one of my favourite childhood movies.' 
  },
  { 
    quote: 'It\'s up to you how far you\'ll go. If you don\'t try, you\'ll never know.',
    source: 'Merlin',
    citation: 'The Sword and the Stone',
    year: 1964
  },
  { 
    quote: 'Sometimes, even the wrong train can take us to the right station.',
    source: 'Sajaan',
    citation: 'Lunchbox'
    },
    { 
      quote: 'Enjoy the little things in life. Such as sunshine and working code.',
      source: 'Mark',
      year: 2020
      }
]



// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


// The let randomQuote variable stores the randomly selected quote from the getRandomQuote() function.

  let randomQuote;
/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) {
  //get place of quote object in quotes array 
  let i = Math.floor(Math.random() * arr.length);
  randomQuote =  arr[i];
  }
  
/***
 * `printQuote` function
***/
 const printQuote = function printQuote()  {
  
  //calling the getRandomQuote() function with the 'quotes' array as parameter. 
  getRandomQuote(quotes);
     
  //Conditional statements that specifies what string should be printed to only obtain the relevant data. 

  //This conditional prevents an addtional undefined or unwanted comma.
  if (Object.keys(randomQuote).length === 2) {
    document.querySelector('.quote-box').innerHTML = `
    <div>
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        </p>
    </div>`;
    changeColor();
  }
  //Prints out the tags property, but only works it the object has 5 properties. NEEDS WORK
  else if (Object.keys(randomQuote).length === 5) {
    document.querySelector('.quote-box').innerHTML = `
    <div>
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
        </p>
        <p class="tags">${randomQuote.tags}</p>
    </div>`;
    changeColor();
  }
  //This conditional leaves out the citation property as it's absence make it falsy
  else if(!randomQuote.citation) {
    document.querySelector('.quote-box').innerHTML = `
    <div>
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="year">${randomQuote.year}</span>
        </p>
    </div>`;
    changeColor();
  } 
  //This conditional leaves out the year property as it's absence make it falsy
  else if (!randomQuote.year) {
    document.querySelector('.quote-box').innerHTML = `
    <div>
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        </p>
    </div>`;
    changeColor(); 
  }
  
  //As the exceptions are caught, this conditional will print a string with all 4 properties. 
  else {
    document.querySelector('.quote-box').innerHTML = `
    <div>
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        <span class="citation">${randomQuote.citation}</span>
        <span class="year">${randomQuote.year}</span>
        </p>
    </div>`;
    changeColor();
  }
} 

//  Quotes automatically refresh at regular intervals. Code from MDN (https://developer.mozilla.org/en-US/docs/Web/API///  WindowOrWorkerGlobalScope/setInterval)
const intervalID = window.setInterval(printQuote, 10000);


//Selecting a random color through the Math.floor(Math.random() functions and storing it in variables
// I learned this method from the Udemy Course Complete Webdesign, by Colt Steele.
// the template literal is picked up from Treehouse 
function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "GREEN" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "BLUE" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b})`;
}


function changeColor() {
  if(addEventListener) {
    document.querySelector('body').style.background = randomColor();
  }
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);