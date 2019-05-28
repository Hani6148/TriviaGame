main()
function main(){
var qnumb=0;
var time=30;
var correctAnswer=0;
var wrongAnswer=0;
var queryURL = "https://opentdb.com/api.php?amount=10&type=multiple";
var myquestion = new Array();


$.ajax({
      
    url: queryURL,
    method: "GET"
  }).then(function(response) {
      
$.ajax({
      
    url: "https://api.tenor.com/v1/search?q=win&key=7028GSBQOFUX&limit=10&anon_id=3a76e56901d740da9e59ffb22b988242",
    method: "GET"
  }).then(function(pics) {

     
    gifs=pics.results;
    console.log(gifs);
    myquestion=response.results;
    for(i=0;i<10;i++){
        rand = Math.floor(Math.random() * 3);  
        myquestion[i].incorrect_answers.splice(rand,0,myquestion[i].correct_answer);
        myquestion[i].choices=myquestion[i].incorrect_answers;
        myquestion[i].gifwin=gifs[i].url;
        
        delete myquestion[i].incorrect_answers;
        

        
        
    }
    console.log(myquestion);

    trivia();
    function trivia(){
        time=30;
        $("#content").empty();
        if(qnumb==10){
            total();
            return;
        }
        timeRemaining=$("<H1>");
        timeRemaining.attr("class","time");
        myquestionDisplay=$("<H1>");
        myquestionDisplay.attr("class","question");
        
        firstChoice=$("<H1>");
        secondChoice=$("<H1>");
        thirdChoice=$("<H1>");
        fourthChoice=$("<H1>");
        timeRemaining.html(time);
        myquestionDisplay.html(myquestion[qnumb].question);
        firstChoice.html(myquestion[qnumb].choices[0]);
        firstChoice.attr("class","choice 1");
        secondChoice.html(myquestion[qnumb].choices[1]);
        secondChoice.attr("class","choice 2");
        thirdChoice.html(myquestion[qnumb].choices[2]);
        thirdChoice.attr("class","choice 3");
        fourthChoice.html(myquestion[qnumb].choices[3]);
        fourthChoice.attr("class","choice 4");
        $("#content").append(timeRemaining,myquestionDisplay,firstChoice,secondChoice,thirdChoice,fourthChoice);
         intervalId=setInterval(timer, 1000);
          function  timer () {
            time--;
            timeRemaining.html(time);
            if(time==0){
                clearInterval(intervalId);
                firstChoice.remove();
                secondChoice.remove();
                thirdChoice.remove();
                fourthChoice.remove();
                timeOut();
            }
           
        }
    
        $(".choice").on("click",function(){
            
            firstChoice.remove();
            secondChoice.remove();
            thirdChoice.remove();
            fourthChoice.remove();
            if($(this).html()== myquestion[qnumb].correct_answer)
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
        
        correctAnswer++;
        console.log(correctAnswer);
        
        bravo=$("<H1>");
        bravoImg=$("<img>");
        bravo.text("Good Answer");
        bravoImg.attr("src",myquestion[qnumb].gifwin);
        $("#content").append(bravo,bravoImg);
       
        console.log(myquestion);
        qnumb++;
    
        setTimeout(trivia,3000);
    }
    
    function lose(){
        
        wrongAnswer++;
        toobad=$("<H1>");
        toobadImg=$("<img>");
        correct=$("<h1>");
        toobad.text("Wrong Answer");
        correct.text("The correct answer is: "+myquestion[qnumb].correct_answer);
        toobadImg.attr("src",myquestion[qnumb].giflose);
        $("#content").append(toobad,correct,toobadImg);
        qnumb++;
    
        setTimeout(trivia,3000);
    }
    
    function timeOut(){
    wrongAnswer++;
    toobad=$("<H1>");
    toobadImg=$("<img>");
    correct=$("<h1>");
    toobad.text("Time's Out");
    correct.text("The correct answer is: "+myquestion[qnumb].correct_answer);
    toobadImg.attr("src",myquestion[qnumb].giflose);
    $("#content").append(toobad,correct,toobadImg);
    qnumb++;
    setTimeout(trivia,3000);
    }
    
    function total(){
    var score=$("<h1>");
    var correct=$("<h1>");
    var wrong=$("<h1>");
    score.text("Your score is: ");
    correct.text("Correct Answers: "+correctAnswer);
    wrong.text("Wrong Answers: "+wrongAnswer);
    $("#content").append(score,correct,wrong);
    setTimeout(main,3000);
    }

  });
  
});}