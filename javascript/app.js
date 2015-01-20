
var main = function() {
    "use strict";
    
    var toDos = [
        "Finish writing this book",
        "Take Gracie to the park",
        "Answer emails",
        "Prep for Monday's class",
        "Get Groceries"
    ];
    
    
    $(".tabs a span").toArray().forEach(function(element){
        
        //create a click handler for this element
        $(element).on("click", function(){
            
            //temporary variable for jQuery version of element
            var $element = $(element);
            
            // make all the tabs interactive
            $(".tabs span").removeClass("active");
        
            // make the first tab active
            $element.addClass("active");
        
            // empty the main content so we can recreate it
            $("main .content").empty();
            
            if ($element.parent().is(":nth-child(1)")) {
                var index = toDos.length;
                var content = $("<ul>");
                // Loop through toDos array backwards
                for (index = index -1; index >= 0; index--)
                {
                   content.append("<li class='remove'> <button>x</button> "+toDos[index]+"</li>");
                    //Original jquery
                    //content.append($("<li>").text(toDos[index]));
                    
                }
                $("main .content").append(content);

                
            } else if ($element.parent().is(":nth-child(2)")) {
                var content = $("<ul>");
                
                // Loops through toDOS array forward and puts in a list.
                toDos.forEach(function (todo) {
                content.append($("<li>").text(todo));
                });
                $("main .content").append(content);  
                
            } else if ($element.parent().is(":nth-child(3)")) {
                // Loads input box and add button
                $("main .content").append("<input type='text' id='newToDo'><button>+</button>");
                
                // When '+' clicked the value in input type is stored in toDOs[];
                $("main .content button").on("click", function (){
                   
                   // Checks to see if the input box isn't blank and then pushes value to array toDos.
                   if ($("#newToDO").val() != "") {
                    toDos.push($("#newToDo").val());
                    // Clears value to enter more
                    $("#newToDo").val("");
                   }
                   
                });
            } 
            
            
        
            // return false so we don't follow the link
            return false;
        
        });
    
    
        
    });
    
    // Triggers the 1st tab to display the toDo list backwards. This is the
    // default display.
    $(".tabs a:first-child span").trigger("click");
    
    // Removes todo entries by hiding them
    $(".remove").on("click",function(){
        $(this).hide();
    });
    
};

$(document).ready(main);
