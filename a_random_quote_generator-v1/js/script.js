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
   year: 1885 },
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


/***
 * `printQuote` function
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

  html += `</p>`;
document.getElementById('quote-box').innerHTML = html;
console.log(randomQuote);
console.log(randomQuote.citaion);
console.log(html);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);