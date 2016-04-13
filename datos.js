$(document).ready(function() {
  // Enter the API key from the Google Develoepr Console - to handle any unauthenticated
  // requests in the code.
  // The provided key works for this sample only when run from
  // https://google-api-javascript-client.googlecode.com/hg/samples/authSample.html
  // To use in your own application, replace this API key with your own.
  var apiKey = 'AIzaSyBMw42rEkhXtqkV7d5v2zYm6qveV85q82c';

  // Use a button to handle authentication the first time.
  var handleClientLoad = function() {
    gapi.client.setApiKey(apiKey);
    makeApiCall();
  };

  // Load the API and make an API call.  Display the results on the screen.
  var makeApiCall = function() {
    gapi.client.load('plus', 'v1', function() {
      var request = gapi.client.plus.activities.list({
        'userId': '108086881826934773478',
        'collection':'public'
        // For instance:
        // 'userId': '+GregorioRobles'
      });
      request.execute(function(resp) {
        loadActivities(resp.items);
      });
    });
  };

  var loadActivities = function(items){
    for(i in items){
      console.log("entra");
      console.log(items[i].title);
      console.log(items[i].actor.displayName);
      console.log(items[i].published);
      $('#activities').append('<h2>'+ items[i].title +'</h2>');
      $('#activities').append('<p>'+ items[i].actor.displayName +'</p>');
      $('#activities').append('<p>'+ items[i].published +'</p>');
    }
  };
  handleClientLoad();
});
