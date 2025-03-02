document.addEventListener("DOMContentLoaded", function() {
    // List of random quotes
    const quotes = [
        "The only limit to our realization of tomorrow is our doubts of today. – Hans Dominic",
        "Believe you can and you're halfway there. – Emmanuel Saio Mansaray",
        "Act as if what you do makes a difference. It does. – William James",
        "Success is not how high you have climbed, but how you make a positive difference to the world. – Augustine Alusine",
        "Do what you can, with what you have, where you are. – Peter Dominic",
        "It always seems impossible until it's done. – Nelson Mandela",
        "Happiness depends upon ourselves. – Aristotle",
        "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
        "Don’t watch the clock; do what it does. Keep going. – Bobson Alusine"
    ];

    const quoteText = document.getElementById("quote");
    const newQuoteButton = document.getElementById("new-quote");
    const facebookShareButton = document.getElementById("facebook-share");

    // Function to generate a random quote
    function generateQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteText.innerText = quotes[randomIndex];
    }

    // Add event listener to the "New Quote" button
    newQuoteButton.addEventListener("click", generateQuote);

    // Function to share on Facebook
    facebookShareButton.addEventListener("click", function() {
        const quote = quoteText.innerText;
        const facebookURL = https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${encodeURIComponent(quote)};
        window.open(facebookURL, "_blank");
    });

    // Generate a random quote on page load
    generateQuote();
});