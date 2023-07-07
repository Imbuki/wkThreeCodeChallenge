//fetching data from json file 
fetch('http://localhost:3000/films')
.then(res=> res.json())
.then(films=>{
    films.forEach((film)=>displayFilmList(film))
})

//creating a variable for menu
const menu = document.getElementById("menu")
const filmList =document.getElementById("filmlist")

//adding event listener to the menu 
//when clicked it will display or not if clicked again
menu.addEventListener("click", function(){
    if(filmList.style.display!=="none"){
        filmList.style.display="none"
    }
    else{
        filmList.style.display="block"
    }
})

//function for displaying the movie details
function displayFilmList(film){
    
 //creating a li element
    const listName = document.createElement("li")
    filmList.appendChild(listName)

    //linking the names on the list with the json file objects
    const link = document.createElement("a")
    link.href = `http://localhost:3000/films${film.id}`
    link.textContent = `${film.title}`
    listName.appendChild(link)

//adding an event listener to the link
    link.addEventListener("click", (e) =>{
        e.preventDefault()


        //creating variables for the objects in the json file
        const name = document.querySelector("#headers h3")
        name.innerHTML=`${film.title}`
        console.log(name)

        //displaying the run time
        const runtime =document.getElementById("runtime")
        console.log(runtime)
        runtime.textContent=`Runtime : ${film.runtime}`

        //displaying the show time
        const showtime = document.getElementById("showtime")
        console.log(showtime)
        showtime.textContent=`Showtime : ${film.showtime}`

        //displaying the number of available seats
        const availableTickets =document.getElementById("availabletickets")
        const result = film.capacity - film.tickets_sold
        console.log(result)
        availableTickets.textContent=`Available Tickets : ${result}`

        //displaying the image
        const image = document.querySelector("#section img")
        image.src=film.poster
        console.log(image)

        const description = document.querySelector("p")
        description.textContent=`description : ${film.description}`

        //creating a button using inner html
        const mybutton = document.getElementById("mybutton")
        mybutton.innerHTML=`
        <button id="button">BUY TICKET</button>
        `
        //styling the button
        let count = result
        const button = document.getElementById("button")
        button.style.backgroundColor="green"
        button.style.width="150px"
        button.style.height="50px"
        button.style.fontSize="20px"

        //adding event listener to the button 
        button.addEventListener("click", function(){

            //subtracting the the number of available seats
            count--;
            availableTickets.textContent=`Available Tickets : ${count}`

            //preventing the available number from reducing below 0
            if(count <= 0){
                button.textContent="Sold out"
                availableTickets.textContent="Available Tickets : Sold out"
                button.style.backgroundColor="red"
            }
            
        })
    })
}