var ran=0;
time=30;
var question=[
    {
    declaration:"when did the french revolution take place ?",
    choice1:"1759",
    choice2:"1769",
    choice3:"1779",
    choice4:"1789",
    answer:"1789",
    gifwin:"",
    giflose:""

    },
    {
        declaration:"what is the name of the tallest montaign in the world",
        choice1:"Evrest",
        choice2:"Evian",
        choice3:"Fuji",
        choice4:"Hogar",
        answer:"evrest",
        gifwin:"",
        giflose:""
    
        },
        {
            declaration:"Who whon the soccer world cup in 2006 ?",
            choice1:"France",
            choice2:"Spain",
            choice3:"Italy",
            choice4:"Germany",
            answer:"Italy",
            gifwin:"",
            giflose:""
        
            },
            {
                declaration:"what is the name of the biggest planet in the solat system",
                choice1:"Mars",
                choice2:"venus",
                choice3:"Jupiter",
                choice4:"satur",
                answer:"Jupiter",
                gifwin:"",
                giflose:""
            
                },
];
console.log(question.length);
trivia();
function trivia(){
    ran = Math.floor(Math.random() * question.length);
    timeRemaining=$("<H1>");
    questionDisplay=$("<H1>");
    firstChoice=$("<H1>");
    secondChoice=$("<H1>");
    thirdChoice=$("<H1>");
    fourthChoice=$("<H1>");
    timeRemaining.html(time);
    questionDisplay.html(question[ran].declaration);
    firstChoice.html(question[ran].choice1);
    firstChoice.attr("class","choice");
    secondChoice.html(question[ran].choice2);
    secondChoice.attr("class","choice");
    thirdChoice.html(question[ran].choice3);
    thirdChoice.attr("class","choice");
    fourthChoice.html(question[ran].choice4);
    fourthChoice.attr("class","choice");
    $("#content").append(timeRemaining,questionDisplay,firstChoice,secondChoice,thirdChoice,fourthChoice);
     intervalId=setInterval(timer, 1000);
      function  timer () {
        time--;
        timeRemaining.html(time);
        if(time==0){
            clearInterval(intervalId);
            timeOut();
        }
       
    }

    $(".choice").on("click",function(){
        if($(this).html()== question[ran].answer)
        {    clearInterval(intervalId);
            win();
        }
        else{
            clearInterval(intervalId);
            lose();
        }
    });
    
    
}

function win(){
    firstChoice.remove();
    secondChoice.remove();
    thirdChoice.remove();
    fourthChoice.remove();

    bravo=$("<H1>");
    bravoImg=$("<img>");
}