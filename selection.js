$(document).ready(function(){
    $("#courses_list").hide();
 
    $.getJSON("faculties.php", "", function(j){
      for (var i = 0; i < j.length; i++) {
        $("select#faculty").append('<option value="' + j[i].optionValue + '">' + j[i].optionDisplay + '</option>');
      }
    });
    
    $("select#faculty").change(function(){
        var test = $("select#faculty :selected").text();
        if (test != "Veuillez faire un choix") {
            $.getJSON("courses.php", {faculty: test}, function(j){
              $("#courses_list_title").html('Cours disponibles ('+ j.length +')');
              $("#courses_list:ul").html('');
              for (var i = 0; i < j.length; i++) {
                   $("#courses_list:ul").append('<li>' + j[i].name + ' : ' + j[i].description + '</li>');
              }
              if (j.length > 0) {
                  $("#courses_list").slideDown("fast");
              } else {
                  $("#courses_list").slideUp("fast");
              }
            })
        }
    });
});




