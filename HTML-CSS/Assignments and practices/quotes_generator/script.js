const quotes = [
    {
        quote:"The journey of a thousand miles begins with one step.",
        author: "~Lao Tzu"
    },
    {
        quote:"That which does not kill us makes us stronger.",
        author: "~Friedrich Nietzsche"
    },
    {
        quote:"Life is what happens when you’re busy making other plans.",
        author: "~John Lennon"
    },
    {
        quote:"When the going gets tough, the tough get going.",
        author: "~Joe Kennedy"
    },
    {
        quote:"You must be the change you wish to see in the world.",
        author: "~Mahatma Gandhi"
    },
    {
        quote:"Whether you think you can or you think you can’t, you’re right.",
        author: "~Henry Ford"
    }
];
const btn = document.getElementById("generatequote");
const quote = document.getElementById("quote");
const author = document.getElementById("author");

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    let generate = quotes[random];
    quote.innerHTML = generate.quote;
    author.innerHTML = generate.author;
});
































