
var friends = require('../data/friends.js');

function apiRoutes(app) {

  app.get('/api/friends', function (req, res) {
    res.json(friends);
  });

  app.post('/api/friends', function (req, res) {

    var possibleFriendsArray = [];
    var user = req.body
      
    var eachComparison = 0;
    for(var i=0; i < req.body.scores.length; i++){
      user.scores[i] = parseInt(req.body.scores[i])
    }
   

    for(var i=0; i < friends.length; i++){

    
      for(var j=0; j < user.scores.length; j++){
        eachComparison += Math.abs( user.scores[j] - friends[i].scores[j] );
      }

      // Do comparison between each friend
      possibleFriendsArray.push(eachComparison);
    }


    var bestFriendIndex = 0; 
    for(var i=1; i < possibleFriendsArray.length; i++){
      
      // Lower number equals better match
      if(possibleFriendsArray[i] <= possibleFriendsArray[bestFriendIndex]){
        bestFriendIndex = i;
      }
    }

    var bestFriendMatch = friends[bestFriendIndex];

  // send data
    res.json(bestFriendMatch);
    // Push the new friend to array of friends
    friends.push(user);

  });

}

module.exports = apiRoutes;