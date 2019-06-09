
var langDicts = {
  0 : "Javascript",
  1 : "Csharp",
  2 : "Java",
  3 : "Ruby",
  4 : "Python",
  5 : "C",
  6 : "Cplusplus",
  7 : "Haskell"
}

$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault();

    //delete previous results
    $(".result").remove();
    $(".javascriptBox").addClass("hideBox");
    $(".csharpBox").addClass("hideBox");
    $(".pythonBox").addClass("hideBox");
    $(".haskellBox").addClass("hideBox");
    $(".cplusplusBox").addClass("hideBox");
    $(".rubyBox").addClass("hideBox");
    $(".cBox").addClass("hideBox");
    $(".javaBox").addClass("hideBox");


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
      $(".firstPage").slideToggle();

      var languagesArray = [];
      var numberOfLanguages = 15;
      for (var i = 0; i < numberOfLanguages; i++){
        languagesArray.push(0);
      }

      //bias:
      languagesArray[2] += 2;

      languagesArray[0] += q1answer;

      languagesArray[0] += q2answer * .5;
      languagesArray[1] += q2answer * 1.5;
      languagesArray[2] += q2answer * 1;
      languagesArray[6] += q2answer * 1;

      languagesArray[2] += q3answer * -1;
      languagesArray[1] += q3answer * -1;
      languagesArray[4] += q3answer * 1;
      languagesArray[5] += q3answer * 1;
      languagesArray[6] += q3answer * 1;
      languagesArray[7] += q3answer * 1;


      languagesArray[4] += q5answer * 1;

      languagesArray[7] += q6answer * 3;

      var listOfBestLanguages = [];
      while (listOfBestLanguages.length < 3){
        var highests = getValuesAndSetToLow(findMaxValueArray(languagesArray), languagesArray);
        for (var i = 0; i < highests.length; i++){
          listOfBestLanguages.push(highests[i]);
        }
      }
          switch (langDicts[listOfBestLanguages[2]]) {
            case "Javascript":
            $(".javascriptBox").slideToggle();
            $(".javascriptBox").addClass("firstBox");
            break;
            case "Csharp":
            $(".csharpBox").slideToggle();
            $(".csharpBox").addClass("firstBox");
            break;
            case "Java":
            $(".javaBox").slideToggle();
            $(".javaBox").addClass("firstBox");
            break;
            case "Python":
            $(".pythonBox").slideToggle();
            $(".pythonBox").addClass("firstBox");
            break;
            case "Ruby":
            $(".rubyBox").slideToggle();
            $(".rubyBox").addClass("firstBox");
            break;
            case "Cplusplus":
            debugger;
            $(".cplusplusBox").slideToggle();
            $(".cplusplusBox").addClass("firstBox");
            break;
            case "Haskell":
            $(".haskellBox").slideToggle();
            $(".haskellBox").addClass("firstBox");
            break;
            case "C":
            $(".cBox").slideToggle();
            $(".cBox").addClass("firstBox");
            break;
            default:
          }


          switch (langDicts[listOfBestLanguages[1]]) {
            case "Javascript":
            $(".javascriptBox").slideToggle();
            $(".javascriptBox").addClass("firstBox");
            break;
            case "Csharp":
            $(".csharpBox").slideToggle();
            $(".csharpBox").addClass("secondBox");
            break;
            case "Java":
            $(".javaBox").slideToggle();
            $(".javaBox").addClass("secondBox");
            break;
            case "Python":
            $(".pythonBox").slideToggle();
            $(".pythonBox").addClass("secondBox");
            break;
            case "Ruby":
            $(".rubyBox").slideToggle();
            $(".rubyBox").addClass("secondBox");
            break;
            case "C++":
            debugger;
            $(".cplusplusBox").slideToggle();
            $(".cplusplusBox").addClass("secondBox");
            break;
            case "Haskell":
            $(".haskellBox").slideToggle();
            $(".haskellBox").addClass("secondBox");
            break;
            case "C":
            $(".cBox").slideToggle();
            $(".cBox").addClass("firstBox");
            default:
          }


          switch (langDicts[listOfBestLanguages[0]]) {
            case "Javascript":
            $(".javascriptBox").slideToggle();
            $(".javascriptBox").addClass("thirdBox");
            break;
            case "Csharp":
            $(".csharpBox").slideToggle();
            $(".csharpBox").addClass("thirdBox");
            break;
            case "Java":
            $(".javaBox").slideToggle();
            $(".javaBox").addClass("thirdBox");
            break;
            case "Python":
            $(".pythonBox").slideToggle();
            $(".pythonBox").addClass("thirdBox");
            break;
            case "Ruby":
            $(".rubyBox").slideToggle();
            $(".rubyBox").addClass("thirdBox");
            break;
            case "Cplusplus":
            debugger;
            $(".cplusplusBox").slideToggle();
            $(".cplusplusBox").addClass("thirdBox");
            break;
            case "Haskell":
            $(".haskellBox").slideToggle();
            $(".haskellBox").addClass("thirdBox");
            break;
            case "C":
            $(".cBox").slideToggle();
            $(".cBox").addClass("firstBox");
            default:
          }

      langDicts[6] = "C++";
      $("#firstBest").after("<span style= 'font-style: italic' class = 'result italic'>" + langDicts[listOfBestLanguages[0]] + "!" + "</span>");
      $("#secondBest").after("<span style= 'font-style: italic' class = 'result italic'>" + langDicts[listOfBestLanguages[1]] + "!" + "</span>");
      $("#thirdBest").after("<span  style= 'font-style: italic' class = 'result italic'>" + langDicts[listOfBestLanguages[2]] + "!" + "</span>");
      $(".results").removeClass("hideBox");
      $(".resultsTitle").removeClass("hideBox");
      // window.scrollBy(0, 1500);


    }

  });
});

function getValuesAndSetToLow(value, array){
  var keys = [];
  for (var i = 0; i < array.length; i++){
    if (array[i] === value){
      keys.push(i);
      array[i] = -10000;
    }
  }
  return keys;
}

function findMaxValueArray(array){
  var maxValue = array[0];
  for (var i = 1; i < array.length; i++)
  {
    if (array[i] > maxValue){
      maxValue = array[i];
    }
  }
  return maxValue;
}
