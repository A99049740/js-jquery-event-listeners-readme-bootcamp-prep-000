//define functions here

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
// call functions here

});
function getIt(){
  $('p').on("click",function(){
    alert("Hey!")
  })
}
function frameIt(){
  $('img').on("load",function(){
    $('img').addClass("tasty")
  })
}
function pressIt(){
  $('input').on("keydown",function(e){
    if (e.key.toLoweCase() === 'g'){
      alert("blah blah bal")
    }
  })
}
function submitIt(){
  $('form').on("submit",function(){
    alert("Your form is going to be submitted now.")
  })
}
