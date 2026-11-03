
const poemsContainer = document.getElementsByClassName("poems-list")[0];
poemsContainer.innerHTML = '<i class="fa-solid fa-scroll fa-2xl fa-fade"></i>'

getPoems()
    .then(poems => {
        poemsContainer.innerHTML = null

        for (const poem of poems) {
            const li = document.createElement('li');
            li.innerHTML = `
                <a href="./?key=${poem.key}">
                    <i class="fa-solid fa-feather-pointed"></i>
                    <span class="poem-title">${poem.title}</span>
                </a>`;
            poemsContainer.appendChild(li);
        }
    })
    .catch(err => console.log(err.message))
