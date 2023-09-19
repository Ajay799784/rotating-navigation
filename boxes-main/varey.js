quoteList = [
  {
    quote: "this is the war of the epic mahabharatham into the world",
    author: "vyasa",
  },
  {
    quote:
      "It is the devotionalpart of the rama and sita into the world of the way of the water into the kingdom",
    author: "valmiki",
  },
  {
    quote: "karna is the most powerful person in the mahabharatham",
    author: "karan",
  },
  {
    quote: "krishna is the key person of the mahabhratham",
    author: "krishna",
  },
];
let authorele = document.getElementById("author");
let quoteele = document.getElementById("quote");

// let btn = document.getElementById("getQuote");
// btn.addEventListener("click", function getLocalQuotes() {
//   let i = Math.floor(Math.random() * quoteList.length);
//   quoteele.innerText = quoteList[i].quote;
//   authorele.innerText = "--" + " " + quoteList[i].author;
// });
let btn = document.addEventListener("click", async function quoteAPI() {
  let response = await fetch("https://api.quotable.io/random");
  let quote = await response.json();
  quoteele.innerText = quote.content;
  authorele.innerText = "--" + " " + quote.author;
});
