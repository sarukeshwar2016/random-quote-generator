const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Don’t let yesterday take up too much of today.",
  "You learn more from failure than from success.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you."
];

const quoteText = document.getElementById("quote");
const quoteBtn = document.getElementById("quote-btn");

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
