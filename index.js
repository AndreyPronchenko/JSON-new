const but = document.getElementById('btn');
const cont = document.getElementById('cont');

function getPost(col){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    
    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        col(response);
        });
    
    xhr.addEventListener('error', () => {
    console.log (error);
    });
    xhr.send();
    }

    function createPost(body, col){
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
        
        xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        col(response);
        });

        
    xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    xhr.addEventListener('error', () => {
        console.log('error');
    });
    xhr.send(JSON.stringify(body));
}

function show_card(post){
const card = document.createElement('div');
card.classList.add('card');
const cardName = document.createElement('div');
const name = document.createElement('h6');
name.classList.add('card-name');
name.textContent = post.name;
const username = document.createElement('h6');
username.classList.add('card-username');
username.textContent = post.username;
const email = document.createElement('h6');
email.classList.add('card-email');
email.textContent = post.email;
cardName.appendChild(name);
cardName.appendChild(username);
cardName.appendChild(email);
card.appendChild(cardName);
return card;
}


but.addEventListener('click', e => { 
getPost(response => {
    const posts = document.createDocumentFragment();
    response.forEach((post) => {
        const card = show_card(post);
        posts.appendChild(card);
        });

cont.appendChild(posts);
});
});