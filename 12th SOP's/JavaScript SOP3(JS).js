function getVowels() {
    var vowelsCount = 0;
    var str = document.getElementById("t1").value;
    var string = str.toString();
    for (var i = 0; i <= string.length - 1; i++) {
      if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
        vowelsCount += 1;
      }
    } 
    //document.write("Total Vowels : "+vowelsCount);
   document.getElementById('demo').innerHTML = "Total no. of Vowels in string are: "+vowelsCount;
    return vowelsCount;
  }