const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = './images/logo.svg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

async function catchJson(){
    const response = await fetch('https://ghibliapi.herokuapp.com/films');
    const movies = await response.json();
  
movies.forEach(movie => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const h1 = document.createElement('h1');
    h1.textContent = movie.title;

    const p = document.createElement('p');
    movie.description = movie.description.substring(0, 400);
    p.textContent = `${movie.description}...`;

    const h2 = document.createElement('h2');
    h2.textContent = movie.director;

    const h3 = document.createElement('h3');
    h3.textContent = movie.release_date;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    card.appendChild(h2);
    card.appendChild(h3);
    });
}
      
catchJson();