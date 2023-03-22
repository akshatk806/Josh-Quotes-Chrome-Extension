fetch('https://type.fit/api/quotes')
    .then(data => data.json())
    .then(joshquotes => {
        
        //for random length of the array deepak
        const randomIndex = Math.floor(Math.random() * joshquotes.length);
        let n
        const quotes = joshquotes[randomIndex].text;
        const joshquotescontent = document.getElementById("joshquotescontent");
        joshquotescontent.innerHTML = quotes;
})