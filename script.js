document.addEventListener("DOMContentLoaded", function () {
    // DOM
    const moviePoster = document.getElementById("movie-poster");
    const movieTitle = document.getElementById("movie-title");
    const movieRuntime = document.getElementById("movie-runtime");
    const movieShowtime = document.getElementById("movie-showtime");
    const ticketButton = document.getElementById("buy-ticket");
    const filmsList = document.getElementById("films");
    const movieAvailableTickets = document.getElementById("movie-available-tickets");
  
    let selectedFilm;
  
    // Fetching movie data from JSON file
    async function getMovieData() {
      try {
        const response = await fetch(" http://localhost:3000/films");
        const data = await response.json();
        renderFilmList(data);
        updateMovieDetails(data[0]);
        selectedFilm = data[0];
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
  
    // Function to render film items in the films list
    function renderFilmList(data) {
      data.forEach((filmItem) => {
        const filmListItem = document.createElement("li");
        filmListItem.textContent = filmItem.title;
        filmListItem.classList.add("film", "item");
        filmListItem.setAttribute("data-id", filmItem.id);
        filmListItem.addEventListener("click", async () => {
          try {
            const response = await fetch(` http://localhost:3000/films/${filmItem.id}`);
            const filmData = await response.json();
            updateMovieDetails(filmData);
            selectedFilm = filmData;
            ticketButton.textContent = "Buy Ticket";
            filmsList.querySelectorAll("li.film.item").forEach((film) => film.classList.remove("sold-out"));
          } catch (error) {
            console.error("Error fetching film details:", error);
          }
        });
        filmsList.appendChild(filmListItem);
      });
    }
  
    // Function to update movie details
    function updateMovieDetails(film) {
      moviePoster.src = film.poster;
      movieTitle.textContent = film.title;
      movieRuntime.textContent = `Runtime: ${film.runtime} mins`;
      movieShowtime.textContent = `Showtime: ${film.showtime}`;
      movieAvailableTickets.textContent = `Available Tickets: ${film.capacity - film.tickets_sold}`;
    }
  
    // Function to handle ticket button click
    function handleTicketButtonClick() {
      if (selectedFilm && selectedFilm.capacity) {
        let availableTickets = selectedFilm.capacity - selectedFilm.tickets_sold;
        if (availableTickets > 0) {
          selectedFilm.tickets_sold += 1;
          availableTickets -= 1;
          movieAvailableTickets.textContent = `Available Tickets: ${availableTickets}`;
          if (availableTickets === 0) {
            movieAvailableTickets.textContent = "Available Tickets: 0";
            ticketButton.textContent = "Sold Out";
            filmsList.querySelector(`li[data-id="${selectedFilm.id}"]`).classList.add("sold-out");
          }
        }
      }
    }
  
    // Add event listener to the ticket button
    ticketButton.addEventListener("click", handleTicketButtonClick);
  
    // Fetch and render movie data
    getMovieData().catch((error) => console.log("Error:", error));
  });
  