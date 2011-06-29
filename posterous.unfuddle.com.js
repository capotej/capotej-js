//Keeps you logged in to unfuddle

var keepAlive = function(){
  $.get('/api/v1/people/current.json', {}, function(){})
}

$(function(){
  setInterval(keepAlive, 30000)
})
