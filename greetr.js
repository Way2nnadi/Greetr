//the greeter JS library generates formal and informal greeting
//based of you a given first and last name
//supports both English and Spanish
//it is open source and can be used by anyone

;(function(global, jquery){

    var Greetr = function(firstname, lastname, language){
        return new Greetr.init(firstname, lastname, language);
    };
    // hidden variables within scope of the IIFE and never directly accessible 
    var supportedLangs = ['en', 'es'];
    
    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };
    
    var formalGreetings = {
        en: 'Greeting',
        es: 'Saludos',
    };
    
    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    };
    //create a bunch of useable methods for our library
    Greetr.prototype = {
        fullName: function(){
            return this.firstname + ' ' + this.lastname
        },
        //checking to see if the language is in our supported language array
        validate: function(){
            if (supportedLangs.indexOf(this.language) === -1){
        throw "Invalid Language";}
        },
        
        greeting: function(){
            return greetings[this.language] + ' '+ this.firstname + '!';
        },
        
        formalGreeting: function(){
            return formalGreetings[this.language] + ', ' + this.fullName()
        },
        //the formal in this method is checkign for truthiness
        //meaning formal either equals true or false
        greet: function(formal){
            var msg;
            if (formal){
                msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            if (console){
            console.log(msg);
            }
            return this;
        },
        //checks to see if there is a console variable first before executing the code
        //the return this makes it chainable
        log: function(){
            if(console){
                console.log(logMessages[this.language] + ': '+ this.fullName());
            };
            return this;
        },
        //use to reset the language 
        setLang: function(lang){
            this.language = lang;
            this.validate();
            return this
        },
        //some html magic, that I don't completely understand yet
        HTMLGreeting: function(selector, formal){
            if(!$){
            throw 'JQuery not loaded';
            }
            if(!selector){
             throw 'Missing JQuery Selector';
            }
            var msg;
            if(formal) {
                 msg = this.formalGreeting();
            }
            else{
                msg = this.greeting();
            }
            $(selector).html(msg);
            
            return this;
        },
                            
    };
    
    //initialize the Greetr function

    Greetr.init =function(firstname, lastname, language){
        var self = this
        self.firstname = firstname || '';
        self.lastname = lastname || '';
        self.language = language || 'en';
        
        self.validate();
    
    };
    //setting the Greetr.init prototype to the same spot on as the Greetr prototype
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;
    
    
}(window, $));