function turkeymap() {
  $("#turkeymap path").hover(function() {
    $(".names").html("<div> City name : " + $(this).parent().data("cityname") + " </br> Plate code : "+ $(this).parent().data("platecode") + 
	" </br> Phone code : "+ $(this).parent().data("phonecode") +"</div>");
    $(this).on("mousemove", function(event) {
      $(".names").css("top", (event.pageY + 25));
      $(".names").css("left", event.pageX);
    });
  },function(){
    $(".names").html("");
  });
  $("#turkeymap path").on("click", function(event) {
    var id = $(this).parent().attr("id");
    var cityname = $(this).parent().data("cityname");
    var platecode = $(this).parent().data("platecode");
    var phonecode = $(this).parent().data("phonecode");
    window.location = "#" + id + "-" + platecode;
  });
}
