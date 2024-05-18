const quotes = [
  " A room without books is like a body without a soul. - Marcus Tullius Cicero ",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "If you can dream it, you can achieve it. - Zig Ziglar",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Be the change that you wish to see in the world.― Mahatma Gandhi",
  "Act as if what you do makes a difference. It does. - William James",
  "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.― Bernard M. Baruch",
];



let previousIndex = -1;

document.getElementById("new-quote-button").addEventListener("click", () => {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * quotes.length);
  } while (newIndex === previousIndex);

  document.getElementById("quote").textContent = quotes[newIndex];
  previousIndex = newIndex;
});
