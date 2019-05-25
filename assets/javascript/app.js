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
    gifwin:"https://media.giphy.com/media/rypyVNU547qrC/giphy.gif",
    giflose:"https://media1.giphy.com/media/mVsZhzKf4HaZa/giphy.gif"

    },
    {
        declaration:"what is the name of the tallest montaign in the world",
        choice1:"Evrest",
        choice2:"Evian",
        choice3:"Fuji",
        choice4:"Hogar",
        answer:"Evrest",
        gifwin:"https://media.giphy.com/media/rypyVNU547qrC/giphy.gif",
        giflose:"https://media1.giphy.com/media/mVsZhzKf4HaZa/giphy.gif"
    
        },
        {
            declaration:"Who whon the soccer world cup in 2006 ?",
            choice1:"France",
            choice2:"Spain",
            choice3:"Italy",
            choice4:"Germany",
            answer:"Italy",
            gifwin:"https://media.giphy.com/media/rypyVNU547qrC/giphy.gif",
            giflose:"https://media1.giphy.com/media/mVsZhzKf4HaZa/giphy.gif"
        
            },
            {
                declaration:"what is the name of the biggest planet in the solat system",
                choice1:"Mars",
                choice2:"venus",
                choice3:"Jupiter",
                choice4:"satur",
                answer:"Jupiter",
                gifwin:"https://media.giphy.com/media/rypyVNU547qrC/giphy.gif",
                giflose:"https://media1.giphy.com/media/mVsZhzKf4HaZa/giphy.gif"
            
                },
];
console.log(question.length);
trivia();
function trivia(){
    time=30;
    $("#content").empty();
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
        firstChoice.remove();
        secondChoice.remove();
        thirdChoice.remove();
        fourthChoice.remove();
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
   

    bravo=$("<H1>");
    bravoImg=$("<img>");
    bravo.text("Good Answer");
    bravoImg.attr("src",question[ran].gifwin);
    $("#content").append(bravo,bravoImg);

    setTimeout(trivia,3000);
}

function lose(){
   

    toobad=$("<H1>");
    toobadImg=$("<img>");
    correct=$("<h1>");
    toobad.text("Wrong Answer");
    correct.text("The correct answer is: "+question[ran].answer);
    toobadImg.attr("src",question[ran].giflose);
    $("#content").append(toobad,correct,toobadImg);

    setTimeout(trivia,3000);
}