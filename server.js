const app = require("./app");
var port = 5000;

//spin up our app
app.listen(port, function(err){
  if(err){
      console.log(err);
  }
  console.log('App listening on port: ' + port);
});