



//  search component
const form= document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputElement = document.querySelector('.input');
  const input = inputElement.value;
  const container = document.querySelector('.container');
  const API_KEY = "a39925116080fc916713d22a74090de8";

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(input)}`;

  inputElement.value = "";


async function fetchdata() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    container.innerHTML = '';
    
    if (!data.results || data.results.length === 0) {
      container.innerHTML = '<p>No results found.</p>';
      return;
    }
    data.results.forEach((item) => {
      const poster = document.createElement('div');
      poster.innerHTML = `<div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="placeholder">
        <h5>title: ${item.original_title}</h5>
        <p>releasedate: ${item.release_date}</p>
        </div>`;
        
      container.append(poster);
    });
    
  } catch (error) {
    console.log(error);
    container.innerHTML = `<p>Error: ${error.message}</p>`;
    return null;
  }
}


fetchdata();

});

 





















          
          













