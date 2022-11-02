

function get_Fahrenheit(){
    var c = parseInt(document.getElementById('c1').value);
    var f;
    //(f-32)/9 = c/5; 
    f = c/5*(9)+32;
    document.write("Fahrenheit : "+f);

}


function get_Celsius(){
    var f = parseInt(document.getElementById('f1').value);
    var c;
    //(f-32)/9 = c/5; 
    c = ((f-32)/9)*5;
    document.write("Celsius : "+c);
}
