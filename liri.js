
var keys = require("./keys.js");

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var client = new Twitter(keys.twitterKeys);
var input = process.argv;
var action = input[2];
var inputs = input[3];

switch (action) {
	case "my-tweets":
	twitter(inputs);
	break;

	case "spotify-this-song":
	spotify(inputs);
	break;

	case "movie-this":
	movie(inputs);
	break;

	case "do-what-it-says":
	doit();
	break;
};

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)

// Make it so liri.js can take in one of the following commands:

// * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`
if (command === "movie-this"){
    moviethis(name);
}
if (command === "my-tweets"){
    mytweets();
}
if (command === "spotify-this-song"){
    spotify();
}
if (command === "do-what-it-says"){
    doWhatItSays();
}


function spotify(song_name){
    // This will show the following information about the song in your terminal/bash window

    // Artist(s)
    // The song's name
    // A preview link of the song from Spotify
    // The album that the song is from


    // If no song is provided then your program will default to "The Sign" by Ace of Base.
    // You will utilize the node-spotify-api package in order to retrieve song information from the Spotify API.

}

function moviethis(movie_name){
    // You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use trilogy.

//     This will output the following information to your terminal/bash window:
  
    //  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    
    
    //  If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
    
    //  It's on Netflix!
    // Include the request npm package (Don't forget to run "npm install request" in this folder first!)

    // Then run a request to the OMDB API with the movie specified
    request("http://www.omdbapi.com/?t=" + movie_name + "&y=&plot=short&apikey=trilogy", function(error, response) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
        var responseMovie = JSON.parse(response.body);
        console.log(responseMovie);
        
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
        console.log("Title: " + responseMovie.Title);
        console.log("Release Date: " + responseMovie.Released);
        console.log("Country: " + responseMovie.Country);
        console.log("Producer: " + responseMovie.Director);
        console.log("Plot: " + responseMovie.Plot);
        console.log("Language: " + responseMovie.Language);
        console.log("Rotten Tomatoes: " + responseMovie.Ratings[1].Value);
        console.log("The movie's rating is: " + responseMovie.imdbRating);
        //     * Title of the movie.
//     * Year the movie came out.
//     * IMDB Rating of the movie.
//     * Rotten Tomatoes Rating of the movie.
//     * Country where the movie was produced.
//     * Language of the movie.
//     * Plot of the movie.
//     * Actors in the movie.
    }


});

 
 
 
}

function doWhatItSays(){
    // It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
    // Feel free to change the text in that document to test out the feature for other commands.
}