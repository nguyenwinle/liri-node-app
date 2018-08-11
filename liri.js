
var keys = require("./keys.js");

var request = require('request');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');
var client = new Twitter(keys.twitter);
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

function twitter(inputs) {
	var params = {screen_name: inputs, count: 20};
	
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
			if (!error) {
				for (i = 0; i < tweets.length; i ++){
					console.log("Tweet: " + "'" + tweets[i].text + "'" + " Created At: " + tweets[i].created_at);
				}
			} else {
				console.log(error);
			}
		});

}

function spotify(inputs) {

	var spotify = new Spotify(keys.spotify);
		if (!inputs){
        	inputs = 'The Weeknd';
    	}
		spotify.search({ type: 'track', query: inputs }, function(err, data) {
			if (err){
	            console.log('Error occurred: ' + err);
	            return;
	        }

	        var songInfo = data.tracks.items;
	        console.log("Artist(s): " + songInfo[0].artists[0].name);
	        console.log("Song Name: " + songInfo[0].name);
	        console.log("Preview Link: " + songInfo[0].preview_url);
	        console.log("Album: " + songInfo[0].album.name);
	});
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
        
    fs.readFile('random.txt', "utf8", function(error, data){

		if (error) {
    		return console.log(error);
  		}
		var dataArr = data.split(",");

		if (dataArr[0] === "spotify-this-song") {
			var check = dataArr[1].slice(1, -1);
			spotify(check);
		} else if (dataArr[0] === "my-tweets") {
			var tweetname = dataArr[1].slice(1, -1);
			twitter(tweetname);
		} else if(dataArr[0] === "movie-this") {
			var movie_name = dataArr[1].slice(1, -1);
			movie(movie_name);
		} 
		
  	});
}