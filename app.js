// // CHAPTER # 1
// // Question 1:

alert("Welcome to my website !!")

// Question 2:

alert("Error! Please enter a valid Password.")

//Question 3:

alert("Welcome to JS Land... \n Happy Coding!!")

//Question 4:

alert(" Welcome to JS Land... ")
alert(" Happy Coding!! ")

//Question 5:
//solved this on console
//alert(" Hello... I can run JS through my web browser's console.")

//Question 6:
//solution in index.html file


//Question 7:
//solution in index.html file

// CHAPTER # 2
// Question 1:

var username;

// Question 2:

var myName = "Khizra Mumtaz";

// Question 3:

 var message;
message = "Hello World!!";
alert (message);

// Question 4:

var student_name = "Jhone Doe";
var student_age = "15 years old";
var student_skill = "Certified Mobile Application Development";

alert(student_name);
alert(student_age);
alert(student_skill);

//Question 5:

var food = "PIZZA";
alert (food+"\n"+food.slice(0,4)+"\n"+food.slice(0,3)+"\n"+food.slice(0,2)+"\n"+food.slice(0,1))

//Question 6:

var email
email = "khizramumtaz09@gmail.com"
alert("My email address is "+email)

//Question 7:

var book =  "A smarter way to learn JavaScript"
alert("I am trying to learn from the book "+book)

//Question 7:

document.write("Yah!! I can write HTML content through JavaScript.")


//Question 9:

var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design)

//Chapter 3
//Question 1:

var age = 20;
alert ( "I am "+ age + " years old.")

//Question 2:

var num = 10;
alert ("You have visited this page "+num+ " times.")

//Question 3:

var birthYear = 2000;
document.write("My birth year is "+birthYear+"<br>")

document.write("Datatype of my birthYear is number.")

//Question 4:

var visitor_name = "Johne Doe"
var product_title = " Shoes "
var quantity = 4
document.write("<br>"+visitor_name+" has bougth "+ quantity,product_title+ " from XYZ Clothing store.")

//Chapter 4
//Question 1:

var a,b,c;

//Question 2:

// var _name, $city, myName , country1, _a_
// var 2name , my#password , 44 , for , @city

//Question 3:

document.write("<h1>Rules for naming JS variables</h1>"+"<br>"+"Variable names can only contain number, letter, $ and _.For example $my_1stVariable "+"<br>"+"Variables must begin with a letter , $ or _.  For example $name, _name or name "+"<br>"+"Variable names are case sensitive"+"<br>"+" Variable names should not be JS keywords.")

//Chapter 5
//Question 1:

var a = +prompt("enter 1st no.: ")
var b = +prompt("enter 2nd no.: ")
document.write("Sum of "+a+ " and "+b+ " is "+(a+b)+"<br>")

//Question 2:
var a = +prompt("enter 1st no.: ")
var b = +prompt("enter 2nd no.: ")
document.write("Minus of "+a+ " and "+b+ " is "+(a-b)+"<br>")
document.write("Product of "+a+ " and "+b+ " is "+(a*b)+"<br>")
document.write("Ratio of "+a+ " and "+b+ " is "+(a/b)+"<br>")
document.write("Modulus of "+a+ " and "+b+ " is "+(a%b)+"<br>")

//Question 3:
var value;
document.write("Value after variable declaration is: "+value+"<br>")
value=10;
document.write("Initial value: "+ value+"<br>")
value++
document.write("Value after increment is: "+value+"<br>")
value=value+7
document.write("Value after addition is: "+value+"<br>")
value--
document.write("Value after decrement is: "+value+"<br>")
value= value%3
document.write("The remainder is: "+value+"<br>")

//Question 4:
var cost = 300;
var quantity = 5;
document.write("Total cost of "+quantity+ " tickets is "+(cost*quantity))

//Question 5:

num = +prompt("Enter number: ")
for(var i=1; i<= 10; i++ )
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>")
}

//Question 6:

C_temp = 100 
var F_temp = C_temp*(1.8)+32
document.write(C_temp+ " <sup>o</sup>C is "+F_temp+" <sup>o</sup>F "+"<br>")
C_temp = (F_temp-32) * (5/9)
document.write(F_temp+ " <sup>o</sup>F is "+C_temp+" <sup>o</sup>C ")

//Question 7:

var price_1 = 100
var price_2 = 200
var quantity_1 = 3
var quantity_2 = 4
var shipping_charges = 200
var total = price_1*quantity_1 + price_2*quantity_2 + shipping_charges

document.write("<h1>SHOPPING CART</h1>"+"Price of item 1 : "+price_1+"<br>"+" Ordered quantity of item 1 : "+quantity_1+ "<br>"+" Price of item 2 "+price_2+"<br>"+" Ordered quantity of item 2 : "+quantity_2+"<br>"+"Shipping charges : "+shipping_charges+"<br>"+"Total cost : "+total)

//Question 8:

var total_marks = 500
var marks_oblained = 440
var per = (marks_oblained/total_marks)*100
document.write("<h1>Mark Sheet</h1>"+"<br>"+"Total marks: "+total_marks+"<br>"+"Marks Obtained: "+marks_oblained+"<br>"+"Your percentage is: "+per+" %")

//Question 9:

var dollar = 10
var riyal = 25
var total = dollar*104.80 + riyal*28
document.write("Total Currency in PKR = "+total)

//Question 10:

var num = 4
document.write("result is: "+( ((num+5)*10)/2))

//Question 11:

var c_year = 2020
var b_year = 2001
var age = c_year - b_year
document.write("Current year: "+c_year+"<br> Birth year: "+b_year+"<br>Your age: "+age)

//Question 12:

var radius = 10
var circum = 2*(3.142)*radius
var area = 3.142*radius*radius

document.write("Radius of circle is: "+radius+ "<br>Circumference os circle is: "+circum+"<br>Area of circle is: "+area)

//Question 13:

var fav_snack = "Samosa"
var c_age = 20
var e_age = 45
var snack_per_day = 2
var total = ((e_age - c_age)* 365)*snack_per_day

document.write("You will need "+total+" "+fav_snack+" to last you until the ripe old age of "+e_age)

//Chapter 6 - 9:
//Question 1:

var a=10
document.write("<h3>Result: </h3> <br> Value of 'a' is: "+a+"<br> <br>*******************<br>")
document.write("<br>The value of ++a is: "+(++a)+"<br>Now the value of 'a' is: "+a+"<br><br>")
document.write("<br>The value of a++ is: "+(a++)+"<br>Now the value of 'a' is: "+a+"<br><br>")
document.write("<br>The value of --a is: "+(--a)+"<br>Now the value of 'a' is: "+a+"<br><br>")
document.write("<br>The value of a-- is: "+(a--)+"<br>Now the value of 'a' is: "+a+"<br><br>")

//Question 2:

var a = 2, b = 1; 
var result = --a - --b + ++b + b--; 
//--a;    = 1
// --a - --b;    = 1 - 0 = 1
//--a - --b + ++b;   = 1 - 0 + 1 = 2
//--a - --b + ++b + b--;    = 1 - 0 + 1 + 1 = 3

document.write(" a is: "+a+"<br> b is: "+b+"<br> Result is: "+result)

//Question 3:

var user = prompt("Enter your name: ")
alert("welcome "+user+ " to our page !!")

//Question 5:

var num = +prompt("Enter a number for table: ")
if(num == ""){
    for(var i=1; i<= 10; i++ )
{
     document.write(5+" x "+i+" = "+(5*i)+"<br>")
}}

else {
    for(var i=1; i<= 10; i++ )
    {
         document.write(num+" x "+i+" = "+(num*i)+"<br>")
    } 
}


//Question 6:
var sub1=prompt("Enter 1st subject name: ")
 var mark1 = +prompt("Enter "+sub1+ " marks: ")
 var sub2=prompt("Enter 2nd subject name: ")
 var mark2 = +prompt("Enter "+sub2+ " marks: ")
 var sub3=prompt("Enter 3rd subject name: ")
 var mark3 =+ prompt("Enter "+sub3+ " marks: ")
 var total = 100
document.write("<h2>Mark Sheet</h2><br> <table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>100</td><td>"+mark1+"</td><td>"+((mark1/100)*100)+"</td></tr><tr><td>"+sub2+"</td><td>100</td><td>"+mark2+"</td><td>"+((mark2/100)*100)+"</td></tr><tr><td>"+sub3+"</td><td>100</td><td>"+mark3+"</td><td>"+((mark3/100)*100)+"</td></tr><tr><td></td><th>300</th><th>"+(mark1+mark2+mark3)+"</th><th>"+(((mark1+mark2+mark3)/300)*100)+"</th></tr></table>")
  
//Chapter 9 - 11:
//Question 1:

var city = prompt("enter city name: ")
if(city === "karachi" || city === "Karachi")
{
    alert("WELCOME TO THE CITY OF LIGHTS !!!")
}

else{}

//Question 2:

var gender = prompt("enter gender : ")
if(gender === 'male'){
    alert("GOOD MORNING SIR!!!")
}
else if(gender === 'female')
{
    alert("GOOD MORNING MA'AM")
}

//Question 3:

var color = prompt("Enter the colour of traffic signal: ")
if(color === 'Red')
{
alert("Must Stop")
}
else if(color === 'Yellow')
{
    alert("Ready to move ")
}
else if(color === 'Green')
{
    alert("Move now ")
}

//Question 4:

var fuel_level = +prompt("Enter fuel level in liters: ")
if(fuel_level < 0.25){
    alert("Please refill the fuel in your car!!!")
}
else {
    alert("Fuel level is OK..")
}

//Question 5:

//The condition is true
var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 
//the condition is not true
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 

var c = 12;
//the condition is not true
 if (c++ === 13){ alert("condition 1 is true"); } 
//The condition is true
if (c === 13){ alert("condition 2 is true"); } 
//The condition is not true
if (++c < 14){ alert("condition 3 is true"); }
//The condition is true
 if(c === 14){ alert("condition 4 is true"); } 
 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
//The condition is not true
if (totalCost === laborCost + materialCost)
{ alert("The cost equals"); } 
 
//The condition is true
if (true){ alert("True"); }
//The condition is not true
if (false){ alert("False"); }

//The condition is true
if("car" < "cat")
{ alert("car is smaller than cat");}

//Question 6:

var obtained_marks = +prompt("enter marks obtained in 3 subjects: ")
var total_marks = +prompt("enter total marks of 3 subjects: ")
var per = (obtained_marks/total_marks)*100
document.write("<h1> <b> Mark Sheet </b> </h1> <br> <br> Marks Obtained: "+obtained_marks+"<br>Total Marks: "+total_marks+"<br>Percentage: "+per+" %")
if( per >=80)
{
document.write("<br>Grade: A+1 <br> Remarks: Excellent")
} 
 
else if(per >= 70)
{
    document.write("<br>Grade: A <br> Remarks: Good")
}

else if(per >= 60)
{
    document.write("<br>Grade: B <br> Remarks: You need to improve")
}
else if(per < 60)
{
    document.write("<br>Grade: Fail <br> Remarks: Sorry")
}

//Question 7:

var num1 = +prompt("Enter a number from 1 to 10 : ")
var num2 = 8

if(num1 === num2)
{
    alert("Bingo! Correct answer.")
}
else if(num1+1 === num2)
{
    alert("Very close to the number.")
}

//Question 8:

var num = +prompt("enter a number: ")
if(num%3 == 0)
{
    alert("number you entered is divisible by '3'")
}

//Question 9:

var num = +prompt("enter a number: ")
if(num%2 == 0)
{
    alert("number you entered is EVEN")
}
else {
    alert("number you entered is ODD")
}

//Question 10:

var t = +prompt("enter temperature : ")
if(t > 40)
{
    alert("Its too hot outside.")
}
else if(t > 30)
{
    alert("The Weather today is Normal.")
}
else if(t > 20)
{
    alert("Today’s Weather is cool")
}
else if(t > 10)
{
    alert("OMG! Today’s weather is so Cool")
}

//Question 11:

var n1 = +prompt("enter 1st number: ")
var n2 = +prompt("enter 2nd number: ")
var op = prompt("enter the operator: ")

if(op === "+")
document.write("Result is: "+(n1+n2))

else if(op === "-")
document.write("Result is: "+(n1-n2))

else if(op === "*")
document.write("Result is: "+(n1*n2))

else if(op === "/")
document.write("Result is: "+(n1/n2))

else if(op === "%")
document.write("Result is: "+(n1%n2))

// Chapter 12 - 13:
//Question 1:

var char = prompt("Enter a character: ")
if(char >=0 || char <= 9)
{
    alert ("input is a number.")
}

else if(char >= 'A' && char <= 'Z')
{
    alert("input is uppercase letter.")
}

else if(char >= 'a' && char <= 'z')
{
    alert("input is lowercase letter.")
}

//Question 2:

var num1 = +prompt("enter 1st number: ")
var num2 = +prompt("enter 2nd number: ")

if(num1>num2)
{alert(num1+" is greater.")}

else if(num2>num1)
{alert(num2+" is greater.")}

else if(num2==num1)
{alert(num2+" and "+num1+" are equal.")}

//Question 3:

var num = +prompt("enter a number: ")
if(num > 0 )
{alert("number is positive. ")}
else if(num < 0)
{
    alert("number is negative.")
}
else if(num == 0)
{
    alert("number is 0.")
}

//Question 4:

var ch = prompt("enter a character: ")
if(ch.length > 1 || ch.length == 0 )
{
    alert("Enter a single character.")
}
else{

    if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u')
    {
        alert("TRUE")
    }
    else
    alert("FALSE")
}

//Question 5:

var pass2 = prompt("Enter password: ")
var pass1 = 'pass123'

if( pass2.length == 0 )
{
    alert("please enter password..")
}
else {
    if(pass1 === pass2)
    {
        alert("Correct! The password you entered matches the original password.")
    }
    else{
        alert("Incorrect password..")
    }
}

// Question 6:

var greeting; 
var hour = 13;
if (hour < 18) 
{greeting = "Good day";
alert(greeting)}
else 
{greeting = "Good evening"; 
 alert(greeting)}
 
// Question 7:


var time = +prompt("Enter time in 24 hours format: ")
 
if(time >= 0000 && time <= 1200)
{
    alert("good morning!!")
}
else if(time >= 1200 && time < 1700)
{
    alert("good afternoon!!")
}
else if( time>=1700 && time<=2100)
{
    alert("good evening!!")
}
else if( time > 2100 && time <=2359)
{
    alert("good night!!")
}

// Chapter 14 - 16:
//Question 1:

var arr = []

// //Question 2:

var arr = new Array()

// //Question 3:

var arr = ["karachi" , "lahore" , "islamabad" ]

// //Question 4:

var arr = [2 , 4 , 6 , 8 , 10]

// //Question 5:

var arr = [true , false , true , true , false]

// //Question 6:

var arr = ["karachi" , 25 , true]

//Question 7:

var Qualification = ["SSC" , "HSC" , "BCS" , "BS" , "BCom" , "MS" , "M.Phil" , "Phd"]
document.write("<h1>Qualification: </h1>")

for(i=1 ; i<=Qualification.length ; i++)
{
    document.write("<br>"+i+")"+Qualification[i-1])
}

//Question 8:

var name1 = [ 'Ali' , 'Hassan' , 'Komal']
var marks = [ 350 , 468 , 488 ]
for (var i=0 ; i<3 ; i++)
{
    document.write("Score of "+name1[i]+" is "+marks[i]+". Percentage is "+(((marks[i])/500)*100)+" %<br>")
}

// Question 9:

var colors = ["Red" , "Blue" , "Green"]
document.write("<h3>  COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


var new_color = prompt("Enter color to add at beginning of list: ")
colors.unshift(new_color)
document.write("<h3> a) Now COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


new_color1 = prompt("Enter color to add at end of list: ")
colors.push(new_color1)
document.write("<h3> b) Now COLOURS are: </h3><br>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")


new_color2 = prompt("Enter another color to add at start of list: ")
new_color3 = prompt("Enter another color to add at start of list: ")
colors.unshift(new_color2,new_color3)
document.write("<h3> c) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

colors.shift()
document.write("<h3> d) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

colors.pop()
document.write("<h3> e) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

new_color4 = prompt("Enter a color to add in the list: ")
new_index = +prompt("At which no. you want to add color: ")
colors.splice( new_index,0,new_color4 )
document.write("<h3> f) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

var start = +prompt("Enter starting index: ")
var count = +prompt("Enter number of elements to be deleted: ")
colors.splice( start, count )
document.write("<h3> g) Now COLOURS are: </h3>")
for(i=0 ; i<colors.length ; i++)
document.write(colors[i]+"<br>")

// Question 10:

var num = [230, 450 , 670 , 100 , 900, 500]
document.write("Score of students: "+num)
num.sort()
document.write("<br>Ordered Score of students: "+num)

// Question 11:

var cities = ["khi" , "lah" , "isl" , "que" , "sibi"]
var selected_cities = cities.slice(1,3)
document.write("Cities are: <br>"+cities+"<br>Selected cities are: <br>"+selected_cities)

// Question 12:

var arr = ["this","is","my","cat"]
var str = arr.join(" ")
document.write("Array:<br>"+arr)
document.write("<br>String:<br>"+str)

// Question 13:

var device = ["keyboard" , "mouse" , "monitor" , "speaker" , "printer"]
document.write("Devices: <br>"+device)
for (var i = 0 ; i < 5 ; i++)
{
var out = device.shift();
document.write("<br>Out:<br>"+out)
}

// Question 14:

var device = ["keyboard" , "mouse" , "monitor" , "speaker" , "printer"]
document.write("Devices: <br>"+device)
for (var i = 0 ; i < 5 ; i++)
{
var out = device.pop();
document.write("<br>Out:<br>"+out)
}

// Question 15:

var arr = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony ','Haier']
document.write("<select><Option>"+arr[0]+"</Option><Option>"+arr[1]+"</Option><Option>"+arr[2]+"</Option><Option>"+arr[3]+"</Option><Option>"+arr[4]+"</Option><Option>"+arr[5]+"</Option></select>")


// Chapter 17 - 20:
//Question 1:

var mul_arr = []
mul_arr[0] = ['Khizra' , 20]
mul_arr[1] = ['Assad' , 23]
mul_arr[2] = ['Sidra' , 25]
document.write(mul_arr)

//Question 2:

var mul_arr = []
mul_arr[0] = [0 , 1 , 2 , 3]
mul_arr[1] = [1 , 0 , 1 , 2]
mul_arr[2] = [2 , 1 , 0 , 1]
for( var x = 0 ; x < 3 ; x++)
{
    for(var y = 0 ; y < 4 ; y++)
    {
        document.write(mul_arr[x][y]+" ")
    }
    document.write("<br>")
}

//Question 3:

for(var i=1 ; i<=10 ; i++)
{
    document.write(i+"<br>")
}

//Question 4:

var num = +prompt("enter a number for table: ")
var len = +prompt("enter lenth of table: ")
document.write("Number = "+num+"<br>Length = "+len+"<br>")
for( var i=1;i<=len;i++)
{
    document.write(num+" x "+i+" = "+(num*i)+"<br>")
}

//Question 5:

var fruit = ['“apple”', '“banana”', '“mango”' , '“orange”' , '“strawberry”' ] 

for(var i=0 ; i<fruit.length ; i++)
{document.write(fruit[i]+"<br>")}


for(var i=0 ; i<fruit.length ; i++)
{document.write("<br>Element at index "+i+" is "+fruit[i]+"<br>")}



//Question 6:

document.write("<h3>Counting:</h3>")
for (var i=1 ; i<=15 ; i++)
{
    document.write(i+" , ")
}

document.write("<h3>Reverse Counting:</h3>")
for (var i=10 ; i>0 ; i--)
{
    document.write(i+" , ")
}

document.write("<h3>Even:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 == 0){
    document.write(i+" , ")
}
}

document.write("<h3>Odd:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 !== 0){
    document.write(i+" , ")
}
}

document.write("<h3>Series:</h3>")
for (var i=1 ; i<=20 ; i++)
{if(i % 2 == 0){
    document.write(i+"k , ")
}
}
//Question 7:

var bake = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var search = prompt("Welcome to ABC bakers!!!  Enter what doyou want to order: ")
var count = 0
for(var i=0 ; i<bake.length ; i++)
{
    if(search===bake[i])
    {
        document.write(search+" is <b>available</b> in our bakery at index :"+i)
        break;
    }
    else{
        count++
    }
    }
    if(count == 5)  
      document.write(search+" is <b>not available</b> in our bakery.")

//Question 8:

var arr = [240 , 76 , 13 , 90 , 100 , 320]
var max = arr[0] , temp
for ( var i =0 ; i<arr.length-1 ; i++)
{
    if(arr[i] < arr[i+1])
    {
        if(max < arr[i+1])
        max = arr[i+1]
    }
    else if(arr[i] > arr[i+1])
    {
        if(max < arr[i])
        max = arr[i]
    }
}
document.write("Array numbers are :"+arr+"<br>Maximum number is: "+max)

//Question 9:

var arr = [240 , 76 , 13 , 90 , 100 , 320]
var max = arr[0] , temp
for ( var i =0 ; i<arr.length-1 ; i++)
{
    if(arr[i] > arr[i+1])
    {
        if(max > arr[i+1])
        max = arr[i+1]
    }
    else if(arr[i] < arr[i+1])
    {
        if(max > arr[i])
        max = arr[i]
    }
}
document.write("Array numbers are :"+arr+"<br>Minimum number is: "+max)


//Question 5:

for (var i=1 ; i<=100 ; i++)
{
    if(i%5 == 0)
    {
        document.write(i+" , ")
    }
}