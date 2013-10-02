$(function(){

  function updateZen(){
    function onSuccess(data){
      $("#zen-area").html('');
      $("#zen-area").html(data);
    };

    $.ajax({
      method : "GET",
      url : "https://api.github.com/zen",
      success : onSuccess
    });
  }

  setInterval(updateZen(),5000);
  updateZen();

});
