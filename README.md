# wkThreeCodeChallenge
# Flatdango

## Table of content
* Installation requirement
* Technology used
* Licence
* Authors info

## Index.css
Used it to syle the main box,character list box and the character details box.

## Index.js 
First fetch this `"http://localhost:3000/characters")`at then make the db.json file into an object which will return the characters. We then call the function "displayCharacterNames" that will receive the characters array as argument and process it to display the names in html.

Inside the function `displayCharacterNames` we loop through the characters array using `forEach` and for every character object an `li` HTML element is created. The character name is enclosed inside the `a` added to the `li` element using `innerHTML` attribute.
Event listeners are added that will listen for a click event on the `li` element and inside the callback function the elements displaying character details are retrieved using `getElementById` and the content is changed to match the current clicked character.
Lastly we add the `li` element using `appendChild` function to the `ul` element we retrieved earlier. And this will run for every character

Another function is created called `addVotes` which adds an event listener to the form element and a callback funciton will be triggered when submit event occurs.
Inside the callback function, we first prevent the default behavior during submit. The value from the votes input is obtained then used to change the content on the element display votes details. When that is done, we clear the value from the votes input by setting its value attribute to empty string
The last line will call the `addVotes` function.

# INSTALLATION PROCESS
## Frontend
* Create your folder using the command `git clone your ssh or https keys`
* Navigate to the code challenge directory using `cd wk2 code challenge`
* copy the path to `index.html` and open it in the browser on a new tab


## Backend
* Install the json-server using the command `npm install -g json-server`
* To get backend started run this command `json-server --watch db.json`
* Test your server by visting this route in the browser `http://localhost:3000/characters`

# TECHNOLOGY USED
Html
css
Javascript


# LICENCE
MIT licence

# AUTHORS INFO
Ian Imbuki