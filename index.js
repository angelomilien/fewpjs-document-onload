// Your code goes here



  function changeElementText() {
    let ele = document.getElementById( "text" )
    ele.innerHTML = "This is really cool!";
    return ele
  };

  document.addEventListener("DOMContentLoaded", function() {
    changeElementText()
  });



