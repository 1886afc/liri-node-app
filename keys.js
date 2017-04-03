//twitter key

// var Twitter = require('twitter');

// function twit() {
// 	var client = new Twitter({
//   		consumer_key: 'vGnalooZUdLIr5DW1euPTJqr1',
//   		consumer_secret: 'V2d9KeDq4vBs9XSeTaHsoxm4Szz5paq4OJchw1irCcOFLdIuAP',
//   		access_token_key: '274765598-NX1Iz12LZDtSX4b4ukyj93xvrKP37tJwp7PosoV4',
//   		access_token_secret: 'VF2KpU38OOV9p3cLEHHHmzjeXoyuMUkwRMO93PU0PjwQx'
// 		});
 
// 	var params = {AFC__1886: 'nodejs'};
// 	client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   		if (!error) {

//   			for (var key in tweets) {
  
//   			console.log(JSON.stringify(tweets[key].text + "  created:  " + tweets[key].created_at, null, 3));
// 			}

//    		}

// 	});
// }

//Omdb api

// var request = require("request");

// // Grab the movieName which will always be the third node argument.
// var movieName = process.argv.splice(2);
// console.log("movie! " + movieName);
// // Then run a request to the OMDB API with the movie specified
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

// // This line is just to help us debug against the actual URL.
// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {

//   	// If the request is successful
//   	if (!error && response.statusCode === 200) {

//     	// Parse the body of the site and recover just the imdbRating
//    	 	// (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).

//     	console.log(JSON.parse(body).Title);
//     	console.log(JSON.parse(body).Year);	 	
//     	console.log(JSON.parse(body).imdbRating);	 	
//     	console.log(JSON.parse(body).Country);	 	
//     	console.log(JSON.parse(body).Language);	 	 
//     	console.log(JSON.parse(body).Plot);	 	 
//     	console.log(JSON.parse(body).Actors);	 	 
//     	console.log(JSON.parse(body).Ratings[1].Value);	 	 
//     	console.log(JSON.parse(body).Ratings[1].Source); 	

    	
//   	}
// });


//Spotify Api

var spotify = require('spotify');

var songName = process.argv.splice(2);
 
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
		}

 	console.log(JSON.stringify(data.tracks.items[0], null, 2));

 	// console.log(JSON.stringify(data.tracks[0].items.artists.name, null, 3));

 	// console.log(JSON.stringify(data.tracks[0].items.artists.href, null, 3));

 	// console.log(JSON.stringify(data.tracks[0].items.album.name, null, 3));

    // Do something with 'data' 
});






// console.log("this is loaded");


// exports.twitterKeys = {
//   	consumer_key: 'vGnalooZUdLIr5DW1euPTJqr1',
//   	consumer_secret: 'V2d9KeDq4vBs9XSeTaHsoxm4Szz5paq4OJchw1irCcOFLdIuAP',
//   	access_token_key: '274765598-NX1Iz12LZDtSX4b4ukyj93xvrKP37tJwp7PosoV4',
//   	access_token_secret: 'VF2KpU38OOV9p3cLEHHHmzjeXoyuMUkwRMO93PU0PjwQx',
// 	};
