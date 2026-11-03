
const author = document.getElementsByClassName("author")[0];
const title = document.getElementsByClassName("title")[0];
const verses = document.getElementsByClassName("verses")[0];
author.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'

getPoem()
    .then(poem => {

        var lines = poem.content.split("\n");
        lines = addBreaks(lines);

        author.innerHTML = `Tác giả: ${poem.author}`;
        title.innerHTML = poem.title;
        if (poem.poem === false) {
            verses.innerHTML = lines;
        } else {
            typing(lines, verses);
        }

    })
    .catch(err => console.log(err.message))
