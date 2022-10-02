window.onload = function fn(){
    var a = document.getElementById("service");
    a.addEventListener('change', function(){
        if (a.value === "Coding Solution"){ 
          document.getElementById("time-para").style.display = "block";
          document.getElementById("date-para").style.display = "block";
          document.getElementById("company-para").style.display = "block";
          document.getElementById("date-label").innerHTML = "Exam Date";
          document.getElementById("project-type-para").style.display = "none";
          document.getElementById("semester-para").style.display = "none";
          document.getElementById("placeholder").placeholder = "Tell us about your exam details like exam structure, exam name and job role...";
        }
        else if (a.value === "College Project"){
          document.getElementById("company-para").style.display = "none";
          document.getElementById("time-para").style.display = "none";
          document.getElementById("date-para").style.display = "block";
          document.getElementById("semester-para").style.display = "none";
          document.getElementById("project-type-para").style.display = "block";
          document.getElementById("date-label").innerHTML = "Project Deadline Date";
          document.getElementById("placeholder").placeholder = "Tell us more about your project like project name, how you want it, or anything you wanna inform us...";
        }
        else if (a.value === "College Assignment"){
          document.getElementById("company-para").style.display = "none";
          document.getElementById("date-para").style.display = "block";
          document.getElementById("time-para").style.display = "none";
          document.getElementById("project-type-para").style.display = "none";
          document.getElementById("semester-para").style.display = "block";
          document.getElementById("date-label").innerHTML = "Assignment Submission Date";
          document.getElementById("placeholder").placeholder = "Tell us more about your assignment like assignment name, how you want it, or anything you wanna inform us...";
        }
        else if (a.value === "Reasoning & Aptitude"){
          document.getElementById("date-para").style.display = "block";
          document.getElementById("semester-para").style.display = "none";
          document.getElementById("project-type-para").style.display = "none";
          document.getElementById("time-para").style.display = "block";
          document.getElementById("date-label").innerHTML = "Exam Date";
          document.getElementById("placeholder").placeholder = "Tell us about your exam details like exam structure, exam name, number of questions and job role...";
        }
        else{
          document.getElementById("company-para").style.display = "none";
          document.getElementById("semester-para").style.display = "none";
          document.getElementById("project-type-para").style.display = "none";
          document.getElementById("time-para").style.display = "none";
          document.getElementById("date-para").style.display = "none";
          document.getElementById("placeholder").placeholder = "Let us know about what type of service you need or ask any query...";
        }
      });
    }