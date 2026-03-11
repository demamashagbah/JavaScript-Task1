//task two
let mark =80;
let grade;
if(mark<= 50){
    grade="fail";
}
else if(50<mark<59){
    garde="D";
}
else if (60<=mark<69){
    grade="C";
}
else if(70<=mark<79){
    grade="B";
}
else if (80<=mark<89){
    grade="A";
}
else if(90<=mark<100){
    grade="A+";
}

document.writeln("Your Grade"+grade);



