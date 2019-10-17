
var friends = require("../data/friends");

module.exports = function(app) {
  // Return all friends found in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var user = req.body;
    var total = 0
    var matchTotal = 0
    var possibleFriends = []

  var score = (user.scores)
  for (i=0; i < score.length; i++) {
    score[i] = parseInt(score[i])
    total = total + score[i]
  }
  console.log(score)
  console.log(total) 

for (i=0; i<friends.length; i++) {
  var name = friends[i].name
 var scores = friends[i].scores
  for (i=0; scores.length; i++) {
   matchTotal = matchTotal + parseInt(friends[i].scores)
  }
  
possibleFriends.push({
  "matchTotal" : matchTotal,
  "name": name
})
console.log(possibleFriends)
}
    console.log(friends)
    friends.push(user);

    // send back to browser the best friend match
    // res.json(friends[bestFriendIndex]);
  });
};
