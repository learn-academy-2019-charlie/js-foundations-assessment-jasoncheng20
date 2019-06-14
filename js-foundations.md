# Javascript Foundations Assessments

### Without using Google answer the following:

1. List the data types in Javascript. Indicate which are primitives.

Primitive data types include numbers (i.e.: 0, -3, 100, 5.3), strings ("this is a string"), boolean (true or false), and arrays (["string", 1, true]).
Objects are a data type that exists as the union between behavior (a method), and data. 
They are written in key:value pairs, with an assignment (the key) corresponding to a value, which is a piece of data that can be accessed and manipulated.

2. What's the difference between =, ==, and === in JavaScript?

= is used in assignment. The phrase "var num = 2" is setting the variable called num to be a value of 2.

== is a more lenient comparison that returns true or false. T
his will return true even for values across data types (i.e.: "2" == 2 is true).

=== is a strict comparison that returns true or false. 
This will return false if data types do not match (i.e.: "2" === 2 is false, but "2" === "2" is true).

3. What is the difference between an array's index and length?

An array's index refers to the position of a certain element found in that array. 
The index of the array changes (increasing by 1) as you move along the array. 
The first element of an array has an index of 0, and the index of the next element is 1, then 2, etc.
The length of the array represents the number of elements within the array. An array with one element has a length of 1.

4. What are the three parts of a for loop?

<!--for(let i=0; i<10; i++)-->

A for loop has three parts within parentheses that are separated by semicolons:
First, a start value (let i = 0 )
Second, a stop value ( "as long as" i < 10)
Lastly, a directionality (i++ means i is ascending by 1)

5. What is a function's declaration, argument, and call?

A function's declaration where its main functionality is built in. 
When writing a function declaration, one can describe what arguments (and how many) it takes, what happens to the argument,
and what the function outputs (return).

A function's argument is its input. A general descriptive placeholder is placed in the function declaration, and the actual input is written
in the function call.

A function call is the way to actually use the declared function with a specific argument, and it will return a certain output.

6. What are the three main steps in saving work to github?

git add .
git commit -m"put your message here"
git push

7. What is the terminal command to move directories?

"cd <name of directory>" will enter into a certain directory.
"cd .." will go one layer out of whatever directory you are in.

8. Do you have a suggestion for a Check In question?



9. What was your favorite topic this week?

My favorite topic was learning about class inheritance and react states. 
I think that previous topics were pretty quickly intuitive to me, but not these topics. 
I look forward to trying to understand them over time!

10. What was your "A-ha!" moment this week?

My "A-ha!" moment came on the second day of pig Latin. I was working in a group of four, and on the first afternoon, we were all pretty tired
and not running on all cylinders, but it seemed like we all were ready to go on the morning of the second day! I learned a lot about how to
manage expectations and how to better communicate within the group, and I had a much better time.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. Look at this Javascript and try to predict, what will the browser's console show?

``` javascript
var text = 'outside'
function logIt(){
    console.log(text)
    var text = 'inside'
}

logIt()
```

I predicted that the text would read "outside" because of scope but I had no idea if it's correct. Turns out, the idea of scope was correct.
Upon testing, however, it also turns out that I missed how there are a couple things wrong with this javascript to prevent any sort of text to be displayed
on the console. First, "text" is undefined in the console.log on line 82, because in line 81, there is no input of "text" in the function declaration.
No argument is declared.
Secondly, in the function cal on line 86, there is no input "text" - it should be written as logIt(text) in order to actually tell the function to take the variable as an argument.

2. What is JSON? How does it relate to javascript objects?
JSON stands for Javascript Object Notation, and it is a way of representing an object. 
It is often written as a list of key-value pairs, which makes it easy to see and understand.

3. Describe a closure, what is it good for and how do you recognize one?
Before Googling, I had no idea what a closure is.
Based on what I read, a closure is "the combination of a function and the lexical environment that it was created in."
I read about functions that can be used to create other functions with more specificity upon inputting an argument, and with each created function, 
it maintains some specific local variables that were previously global and general.
