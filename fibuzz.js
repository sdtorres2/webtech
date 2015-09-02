var j;

for (j=1; j<101; ++j) {
//Begins the for loop and adds a one value if the number is less than 100

if (j % 3 == 0 && j % 5 == 0) 
    console.log ("Fizzbuzz");
    //Checks to see if the number can be divided by 3 and 5
    
    else if (j%3 == 0)
    console.log ("fizz")
    //checks to see if the number can be divided by only 3
    
    else if (j%5 == 0)
    console.log ("buzz")
    //checks to see if the number can be diveded by 5 only
    
    else 
    console.log (j);
    //if the number can not be diveded by the other
}
    
