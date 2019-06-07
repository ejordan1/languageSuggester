var dict = {
  "java": 0,
  "python":0,
  "csharp": 0,
  "ruby": 0,
  "javascript": 0
}

$(document).ready(function(){
  $("#form").submit(function(event){
debugger;
    var q1answer = parseInt($("input:radio[name=q1]:checked").val());
    var q2answer = parseInt($("input:radio[name=q2]:checked").val());
    var q3answer = parseInt($("input:radio[name=q3]:checked").val());
    var q4answer = parseInt($("input:radio[name=q4]:checked").val());
    var q5answer = parseInt($("input:radio[name=q5]:checked").val());
    var q6answer = parseInt($("input:radio[name=q6]:checked").val());

    var allAnswered = true;
    if(!q1answer && q1answer != 0){
      allAnswered = false;
    }
    if(!q2answer && q2answer != 0){
      allAnswered = false;
    }
    if(!q3answer && q3answer != 0){
      allAnswered = false;
    }
    if(!q4answer && q4answer != 0){
      allAnswered = false;
    }
    if(!q5answer && q5answer != 0){
      allAnswered = false;
    }
    if(!q6answer && q6answer != 0){
      allAnswered = false;
    }
    if (!allAnswered){

      alert("answer all the questions");
      allAnswered = true;
    } else {

      dict["java"]+= q1answer;
      dict["java"]+= q2answer;
      dict["java"]+= q4answer;

      dict["c#"] += q1answer;
      dict["c#"] += q2answer;
      dict["c#"] += q3answer;
      dict["c#"] += q4answer;

      dict["ruby"] += q6answer;
      dict["javascript"] += q5answer;
      dict["python"] += q5answer;


    }

  event.preventDefault();

  });
});
