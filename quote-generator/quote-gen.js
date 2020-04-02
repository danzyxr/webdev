const quotes = [
  {
    q: "Anime was a mistake.",
    a: "Hayao Miyazaki"
  },
  {
    q:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis augue libero, sit amet pulvinar ex dapibus vitae. Cras cursus vitae sem ut sagittis. Proin interdum ante id orci consectetur, in feugiat nibh congue.",
    a: "Ancient Rome"
  },
  {
    q: "1, 2, 3. Easy as 'a, b, c'.",
    a: "Jackson Five"
  }
];

const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quote-author");
const quoteButton = document.querySelector("#quote-button");

quoteButton.addEventListener("click", printQuote);

function printQuote() {
  let r = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = `"${quotes[r].q}"`;
  quoteAuthor.innerHTML = `-- ${quotes[r].a} --`;
}
