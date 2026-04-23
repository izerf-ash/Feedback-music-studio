function handleSearch() {
    // Ստանում ենք օգտատիրոջ գրած տեքստը և դարձնում փոքրատառ
    let input = document.getElementById('studioSearch').value.toLowerCase();
    
    // Թիրախավորում ենք այն տարրերը, որոնց մեջ պետք է կատարվի որոնումը
    let cards = document.querySelectorAll('.service-card, .news-card');

    cards.forEach(card => {
        // Ստանում ենք քարտի վերնագիրը և նկարագրությունը
        let title = card.querySelector('h3, h4').innerText.toLowerCase();
        let desc = card.querySelector('p').innerText.toLowerCase();

        // Եթե բառը գտնվում է վերնագրի կամ նկարագրության մեջ
        if (title.includes(input) || desc.includes(input)) {
            card.style.display = ""; // Ցուցադրել
            card.style.opacity = "1";
        } else {
            card.style.display = "none"; // Թաքցնել
        }
    });
}