
function submit_marks() {
    var sub1 = parseInt(document.getElementById('s1').value);
    var sub2 = parseInt(document.getElementById('s2').value);
    var sub3 = parseInt(document.getElementById('s3').value);
    var sub4 = parseInt(document.getElementById('s4').value);
    var sub5 = parseInt(document.getElementById('s5').value);
    var sub6 = parseInt(document.getElementById('s6').value);
    var total = sub1+sub2+sub3+sub4+sub5+sub6;
    var per  = total/6;
    var grade;
    
    if (per>=35 && per<=60) {
    grade = 'F';
    }     
                
    else if(per>=61 && per<=70){
    grade = 'D';
    }
         
    else if(per>=71 && per<=80){
    grade = 'C';
    }
          
    else if(per>=81 && per<=90){
    grade = 'B';
    }
          
    else if(per>=91 && per<=100){
    grade = 'A';
    }
           
    else{
    grade = "Invalid or Failed";
    }
    document.getElementById("demo").innerHTML = "Your Total Marks : "+total+"<br>Your Percentage : "+per+"<br>Your Grade : "+grade;
    // document.write("Your Total Marks : "+total);
    // document.write("<br>Your Percentage : "+per);
    // document.write("<br>Your Grade : "+grade);
                          
    }