//inputs and input commands
var inputCom = process.argv[2];
var input = process.argv.splice(3);

// switch to determine which function runs
switch (inputCom) {
	case "my-tweets":
		console.log(input);
		twits();
		break;

	case "spotify-this-song":
		console.log(input);
		spot();
		break;

	case "movie-this":
		console.log(input);
		omdb();
		break;

	case "do-what-it says":
		console.log(input);
		break;
}



//functions

//twitter



function twits() {
	var twit = require("./keys.js");

var Twitter = require('twitter');
//key vars
var ck = twit.twitterKeys.consumer_key;
var cs = twit.twitterKeys.consumer_secret;
var atk = twit.twitterKeys.access_token_key;
var ats = twit.twitterKeys.access_token_secret;

var client = new Twitter({
  	consumer_key: ck,
  	consumer_secret: cs,
  	access_token_key: atk,
  	access_token_secret: ats,
});	
	var params = {AFC__1886: 'nodejs'};

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
  		if (!error) {
  			// for loop for 20 tweets
  			for (var key in tweets) {
  
  			console.log(JSON.stringify(tweets[key].text, null, 3));
  			console.log("created: " + JSON.stringify(tweets[key].created_at, null, 3));
  			console.log("______________________________________________")
			}

   		}

	});
};

//Omdb api

function omdb() {

	var request = require("request");

	// Then run a request to the OMDB API with the movie specified
	var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&r=json";

	// This line is just to help us debug against the actual URL.
	console.log(queryUrl);

	request(queryUrl, function(error, response, body) {

  		// If the request is successful
  		if (!error && response.statusCode === 200) {

    		// console logs
   	 		

    		console.log(JSON.parse(body).Title);
    		console.log(JSON.parse(body).Year);	 	
    		console.log(JSON.parse(body).imdbRating);	 	
    		console.log(JSON.parse(body).Country);	 	
    		console.log(JSON.parse(body).Language);	 	 
    		console.log(JSON.parse(body).Plot);	 	 
    		console.log(JSON.parse(body).Actors);	 	 
    		console.log(JSON.parse(body).Ratings[1].Value);	 	 
    		console.log(JSON.parse(body).Ratings[1].Source); 	

    	
  		}
	});
}

//spotify

function spot() {

	var spotify = require('spotify');

	spotify.search({ type: 'track', query: input }, function(err, data) {
    	if ( err ) {
        	console.log('Error occurred: ' + err);
        	return;
		}
		//console logs
 		//console.log(JSON.stringify(data.tracks.items[0], null, 2));
 		console.log(JSON.stringify("Artist: " + data.tracks.items[0].album.artists[0].name, null, 2));
 		console.log(JSON.stringify("Track: " + data.tracks.items[0].name, null, 2));
 		console.log(JSON.stringify("Album: " + data.tracks.items[0].album.name, null, 2));
 		console.log(JSON.stringify("Preview link: " + data.tracks.items[0].preview_url, null, 2));

 	 });
}