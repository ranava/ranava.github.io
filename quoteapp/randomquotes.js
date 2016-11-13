var quotes = [
  ["Not all those who wander are lost.", "- J.R.R.Tolkien"],
  ["The significant problems we face cannot be solved at the same level of thinking we were at when we created them.", "- Albert Einstein"],
  ["It's kind of fun to do the impossible.", "- Walt Disney"],
  ["A lie gets halfway around the world before the truth has a chance to get its pants on.", "- Sir Winston Churchill"],
  ["If you can't get rid of the skeleton in your closet, you'd best teach it to dance.", "- George Bernard Shaw"],
  ["Never interrupt your enemy when he is making a mistake.", "- Napoleon Bonaparte"],
  ["I have not failed. I've just found 10,000 ways that won't work.", "- Thomas Alva Edison"],
  ["Try to learn something about everything and everything about something.", "- Thomas Henry Huxley"]
]

var lastQuote = 0;
var randomQuote;

var thisQuote = "\"Not all those who wander are lost.\"";
var thisAuthor = "- J.R.R.Tolkien";

var randomNumber = function(){
  var randomNum = Math.floor(Math.random()*quotes.length);
  return randomNum;
};

$("document").ready(function() {
    $("#btn-quote").on("click", function(){
      randomQuote = randomNumber();
      while(randomQuote == lastQuote){
        randomQuote = randomNumber();
      }
     $("#quote").html("\"" + quotes[randomQuote][0] + "\"");
      $("#author").html(quotes[randomQuote][1]);
      lastQuote = randomQuote;
      thisQuote = "\"" + quotes[randomQuote][0] + "\"";
      thisAuthor = quotes[randomQuote][1];
    });

    $("#btn-tweet").on("click", function(){
      var newTweet = "https://twitter.com/intent/tweet?text=" + thisQuote + " " + thisAuthor;
      $("#link-tweet").attr('href', newTweet);
    });
  });
