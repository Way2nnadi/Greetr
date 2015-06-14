//lets us use a click event on the button id login
$('#login').click(function(){
    //created a new object and saved it to loginGrtr
    var loginGrtr = G$($('#fname').val(), $('#lname').val())
    
    $('#logindiv').hide();

   //this logs the new greeting to the console and the window
    loginGrtr.setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
});
                                     