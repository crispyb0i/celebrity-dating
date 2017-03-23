$(document).ready(function(){
  $("#dating").submit(function(event){
    $(".mario, .david, .will, .danny, .jennifer, .betty, .melissa").hide()
    var age = $("#age").val();
    var gender = $("#gender").val();
    var beach = $("#beach").val();

    if (age === "18-35" && gender === "Female" && beach === "Hell yeah!"){
    $(".jennifer").show();
    }
    else if (age === "A little older..." && gender === "Female" && beach === "Hell yeah!"){
    $(".betty").show()
    }
    else if ((age === "A little older..." || age === "18-35") && gender === "Female" && beach === "Absolutely not"){
    $(".melissa").show()
    }
    else if (age === "18-35" && gender === "Male" && beach === "Hell yeah!"){
    $(".david").show();
    }
    else if (age === "A little older..." && gender === "Male" && beach === "Hell yeah!"){
    $(".danny").show()
    }
    else if ((age === "A little older..." || age === "18-35") && gender === "Male" && beach === "Absolutely not"){
    $(".will").show()
    }
    else{
      $(".mario").show()
    }
  event.preventDefault();
 })
});
