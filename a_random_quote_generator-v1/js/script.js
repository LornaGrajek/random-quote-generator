/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array
***/
const quotes = [
  {quote: 'A witty woman is a treasure; a witty beauty is a power.',
   source: 'George Meredith',
   citation: 'Diana of the Crossways',
   year: 1885,
   type: 'novel' },
   {quote: 'It is in vain to say human beings ought to be satisfied with tranquility: they must have action and they will make it if they can not find it.',
   source: 'Charlotte Bronte',
   citation: 'Jane Eyre',
   year: 1847 },
   {quote: 'The only thing we never get enough of is love; and the only thing we never give enough of is love.',
   source: 'Henry Miller',
   },
   {quote: 'People living deeply have no fear of death.',
   source: 'Anais Nin',
   },
   {quote: 'The mind is everything. What you think, you become',
   source: 'Buddha',
   type: 'speech'
   }
];
/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  let randomObject = array[randomNumber];
  return randomObject;
}

/* function to get a random color, citation https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj */

function getRandomColor() {
    let randomColor = '#'+ Math.floor(Math.random() *16777215).toString(16);
    return randomColor;
}


/***
 * `printQuote` function, if statement at the end changes background color everytime a new quote is printed
***/
function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let html = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}
  `;

  if (randomQuote.citation) {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  };
  if (randomQuote.year) {
    html += `<span class="year">${randomQuote.year}</span>`;
  };
  if (randomQuote.type) {
    html += `<span class="type">, ${randomQuote.type}</span>`;
  };

  html += `</p>`;
document.getElementById('quote-box').innerHTML = html;

  if (randomQuote) {
    document.body.style.background = getRandomColor();
  }
}

/* Method that prints a new quote and different color every 8 seconds indefinitely */
setInterval(printQuote, 8000);



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);