var friends = require("../data/friends");
module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

app.post("/api/friends", function(req, res){
    
    var newFriend = req.body;
   /*  var newScore = 0; */
    var total = 0;
    var matchName;
    var matchPhoto;
    var matchDiff = 100;

     for (i = 0; i< friends.length; i++){
        total=0;

       for (j=0; j < friends[i].scores.length; j++) {
           total += Math.abs(friends[i].scores[j] - newFriend.scores[j]);
       } 

       if (total <= matchDiff) {
           matchName = friends[i].name;
           matchPhoto = friends[i].photo;
           matchDiff = total;
       }
       
    }
    
    res.json({name: matchName, photo: matchPhoto});
    console.log("Match Name" + matchName + matchDiff);
        friends.push(newFriend);
});
 
}