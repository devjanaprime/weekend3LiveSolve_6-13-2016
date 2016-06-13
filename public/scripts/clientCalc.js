console.log( 'clientCalc.js sourced!' );
var operation = "add";

$( document ).ready( function(){
  console.log( "JQuery is HEERE!");
  $('#calculateButton').on('click', function(){
    console.log( 'calculateButton clicky... weeeeeeeee!' );
    // get numbers from input fields
    var x = $('#input1').val();
    var y = $('#input2').val();

    // assemble input into object
    var inputObject = {
      "x": x,
      "y": y,
      "operation": operation
    };
    console.log( "inputObject - x:" + inputObject.x + " y: " + inputObject.y + " operation: " + inputObject.operation );
    sendObject( inputObject );
  }); // end calculateButton

  // change operation global variable depending on what operation button was clicked
  $('#addButton').on('click', function(){
    console.log( 'addButton clicked' );
    operation = "add";
  });
  $('#subtractButton').on('click', function(){
    console.log( 'subtractButton clicked' );
    operation = "subtract";
  });
  $('#multiplyButton').on('click', function(){
    console.log( 'multiplyButton clicked' );
    operation = "multiply";
  });
  $('#divideButton').on('click', function(){
    console.log( 'divideButton clicked' );
    operation = "divide";
  });

  function displayAnswer( answer ){
    // answer comes from ajax call
    console.log( 'in displayAnswer: ' + answer );
    var newParagraph = document.createElement('p');
    newParagraph.textContent = "The answer is: " + answer;
    $('#outputDiv').append( newParagraph );
  }

  // do something with inputObject here
  function sendObject( objectToSend ){
    console.log( 'in sendObject: ' + objectToSend.operation );
    $.ajax({
      type: "POST",
      url: "/calcNow",
      data: objectToSend,
      success: function( data ){
        console.log( "success: " + data );
        displayAnswer( data );
      }, // end success
      error: function()
      {
        console.log( 'error connecting...');
      } // end error
    });
  }
}); // end JQuery
