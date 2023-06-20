const quotes = [
  {
    quote: '빵은 마싯다.',
    author: '한유진',
  },
  {
    quote: '떡은 마싯다.',
    author: '한유진',
  },
  {
    quote: '피자는 마싯다.',
    author: '한유진',
  },
  {
    quote: '치킨은 마싯다.',
    author: '한유진',
  },
  {
    quote: '물은 마싯다.',
    author: '한유진',
  },
  {
    quote: '빵은 마싯다.',
    author: '한유진',
  },
  {
    quote: '떡은 마싯다.',
    author: '한유진',
  },
  {
    quote: '피자는 마싯다.',
    author: '한유진',
  },
  {
    quote: '치킨은 마싯다.',
    author: '한유진',
  },
  {
    quote: '십은 마싯다.',
    author: '한유진',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor( Math.random()*quotes.length )];

//Math.round : 반올림
//Math.floor : 내림
//Math.random : 0이상 1미만

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;