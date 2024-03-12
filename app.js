//Chapter 17 - 20
//q1





//q2

var matrix = [
    [0 , 1 , 2 , 3 +"<br>"]+
    [1 , 0 , 1 , 2 +"<br>"]+
    [2 , 1 , 0 , 1]


];

document.write(matrix);


//q3
// Print numeric counting from 1 to 10
for (let i = 1; i <= 10; i++) {
    document.write("<br>"+i);
}

//q4
var userInput = +prompt("Enter a number to generate a multiplication table");      

var tableRange = +prompt("Enter table range..");   
    
for (var i = 1; i <= tableRange; i++) {   
  document.write(userInput + "x" + i + "=" + userInput * i + "<br>");            
}

//q5
var arr = ["apple", "banana", "mango", "orange","strawberry"];

for (var i = 0; i < arr.length; i++) {
  document.write("<br>"+arr[i]);
}
document.write("<br>"+ "Element of index 0 is apple"+"<br>"+ "Element of index 1 is banana"+"<br>"+ "Element of index 2 is mango"+"<br>"+ "Element of index 3 is orange"+"<br>"+ "Element of index 4 is strawberry")



//q6
document.write("<br><h1>Counting:</h1>")
for (let i = 1; i <= 15; i++) {
    document.write(i + ", ");
}

document.write("<br><h1>Reverse Counting:</h1>")
for (let i = 10; i >= 1; i--) {
    document.write(i + ", ");
}

document.write("<br><h1>Even Number:</h1>")
for (let i = 0; i <= 20; i+=2) {
    document.write(i + ", ");
}

document.write("<br><h1>Odd Number:</h1>")
for (let i = 1; i <= 19; i+=2) {
    document.write(i + ", ");
}

document.write("<br><h1>Series:</h1>")
for (let i = 2; i <= 19; i+=2) {
    document.write(i + "k, ");
}

//q7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Welcome to XYZ Bakery.What do you want to order sir/mam?");
userInput = userInput.toLowerCase();
var index = A.indexOf(userInput);

var found = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === userInput) {
        found = true;
       
    }
}
if (found) {
    alert(userInput+" is available at index "+ index +" in our bakery.");
} else {
    alert("We are sorry."+userInput+" is not available in our bakery");
}

//q8
var Ar = [24, 53, 78, 91, 12];

var largest = Ar[0];

for (var i = 1; i < Ar.length; i++) {
    if (Ar[i] > largest) {
        largest = Ar[i];
    }
}

document.write("<br>","The largest number in the array is:", largest);


//q9
var Ar1 = [24, 53, 78, 91, 12];
var smallest = Ar1[0];

for (let i = 1; i < Ar1.length; i++) {
    if (Ar1[i] < smallest) {
        smallest = Ar1[i];
    }
}
document.write("<br>","The largest number in the array is:", smallest);


//q10
for (var i = 5; i <= 100; i += 5) {
    document.write("<br>",i +",");
  }


// home pdf ch 17

//q1
document.write("<br><h1>Q1</h1>")
for (var i = 0; i < 10; i++) {
  document.write("<br>",i)
}


//q2
document.write("<br><h1>Q2</h1>")
for (var i = 0; i <= 11; ++i) {
 document.write("<br>",i)
}

//q3
document.write("<br><h1>Q3</h1>")
for (var i = 0; i <= 4; i++) {
    document.write("<br>",i)
  }

//q4
for (var counter = 0; counter < 100; ++counter) {}

//q5
for (var i = 3; i > 0; i--) {
}

//q6
document.write("<br><h1>Q6</h1>")
var array = [3,4,5,7,"umaima","Ramzan Mubarak"];
var numberOfElements = array.length;
document.write("<br>",numberOfElements)

//q7
var flag = true;

//q8
document.write("<br><h1>Q8</h1>")
var pets=["cat","panda","parrot","zebra"]
for (var i = 0; i < pets.length; i++) {
    document.write("<br>",i)
}

//q9
for (var i = 0; i < 10; i++) {
    if (i === 1) {
        alert(i);
        break;    
    }
}

//q10
var userNames2 = ["Hammad", "Zunair", "Junaid", "Ali", "Jhon"];
var firstName3 = prompt("Enter first name");


for (var i = 0; i < userNames2.length; i++) {
    if (userNames2[i] === firstName3) {
        alert("Enter")
    break;}

    else {
        
        alert("Please write correct user name");
        break;}
}

//Q11



//q12
document.write("<br><h1>Q12</h1>")

var firstArr = ["a", "b", "c", "d", "e", "f"]; 
var secondArr = [1, 2, 3, 4, 5, 6];

// First line of the main loop
for (var i = 0; i < firstArr.length; i++) {
    // Nested loop
    for (var j = 0; j < secondArr.length; j++) {
        // Concatenate the elements from both arrays
        document.write("<br>",firstArr[i] + secondArr[j]);
    }
}



