
# Movie Ticket Booking App

This is a JavaScript application that allows users to browse and book movie tickets. It fetches movie data from a JSON file and dynamically updates the movie details based on user selection. The application also keeps track of available tickets and updates the ticket count when a user purchases a ticket.

## Prerequisites

Before running the application, make sure you have the following:

- Web browser with JavaScript enabled
- JSON file containing movie data
- Web server to host the JSON file (e.g., Apache, Nginx)

## Getting Started

To get started with the Movie Ticket Booking App, follow these steps:

1. Clone the repository or download the JavaScript file to your local machine.
2. Host the JSON file containing movie data on a web server (e.g., http://localhost:3000/films).
3. Open the JavaScript file (e.g., `movie-ticket-booking.js`) in a text editor.
4. Update the `fetch` URLs in the code to point to your hosted JSON file.
5. Save the changes to the JavaScript file.

## Usage

To use the Movie Ticket Booking App, follow these steps:

1. Open the HTML file that includes the JavaScript code in a web browser.
2. The app will fetch movie data from the JSON file and display a list of movies.
3. Click on a movie title in the list to view its details (poster, title, runtime, showtime, and available tickets).
4. If tickets are available for the selected movie, click the "Buy Ticket" button to purchase a ticket.
5. The available ticket count will be updated, and if all tickets are sold out, the button will change to "Sold Out" and the movie will be marked as sold out in the list.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- This project was created as a demonstration of JavaScript and DOM manipulation.
- It utilizes Fetch API to retrieve movie data from a JSON file.
- The code structure and functionality are based on a movie ticket booking system.

# AUTHORS INFO
Ian Imbuki