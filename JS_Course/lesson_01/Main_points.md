## 1. What is JavaScript?

**Javascript** is a scripting language that is primarily run in the browser as the scripting language of websites. It is transmitted from the Server to the Client computer and ran in the browser on the client together with HTML and CSS to add website functionality.

## 2. Why Javascript?

It was invented in 1995 to add animations to website and during the years it evolved as a useful scripting language for the web. Easy to use and very diverse ecosystem which was widely adopted and has support for 99,99% of use cases.

## 3. Javascript versions

There exist multiple javascript versions and standards - Most websites are finalized in ECMA 2015 (ES5) script to add support for older browser even though they are written in newer standards. Multiple versions exist to add and change the language during the years for additional functionality while mantaining a decent level of backwards compatibility (in layman's terms this means supporting older browsers with new versions - in programmer terms: not **breaking** support).

## 4. What are the variable types in javascript?

Javascript is a weakly typed language (this means the variables are mushy - easier to change from one to another). It has a few different primitive variable types:
1. Boolean: It has 2 values: true or false (in chrome Dev tools you can know something is boolean if the true or false when printed out is blue/purple)
2. Number: A regular number - it also has a blue/purple tint when printed out in dev tools
3. String: A string of characters - words, sentences, etc. - in Dev tools it has a white tint when printed out. A string also is assigned using ticks(') or quotation marks(") like this: 
    
    ```let a = ` 'AAF AF'; let b = "fsdgsdg"; let c = "1";```

    **IMPORTANT:** Note that if you assign 1 you will assign a number to a variable, not a string.

    ```let a = 1;```

And also another primitive variable type: Symbol - which is rarely used.

## 5. What is assignment?

Assignment is the process of assigning a value to a variable in javascript. As javascript is weakly typed and by default implicitly (this means the type is defined by assigning some value)before you assign a variable a definitive value - Javascript will treat it as undefined:

```let a; console.log(a)```

This code prints out 'undefined' as the value and it's type is undefined.

## 6. How to determine the type of a variable?

There exist a function **typeof()** :

```typeof(a)```

This will get you the type of variable a.

## 7. How to assign a variable in JS?

Assignment in Javascript is done using the equality sign in conjuction with the variable creation keywords - **let**, **const** and **var**:

```let a = 1; const b = 2; var c = 3```

This code assigns values using the 3 different keywords.

## 8. How do the variable creation keywords differ from each other?

- **const** creates a variable with a name that shouldn't be used anywhere else in the code, but its value can be changed in the code.

- **let** is the easiest to use and most mutable, but shouldn't be used in strict mode (more on that in later lessons).

- **var** is the original way to define a variable in JS but todays since ES5 it has been superseded by let and const since it can cause weird bugs sometimes and as a rule of thumb shouldn't be used in new code.

## 9. How to use Javascript?

The easiest way to use javascript is to just open any webpage in chrome or chromium-based browsers (like Edge, Brave, Opera and most other browsers except Firefox and Safari) and fire up Dev tools (usually F12 key). Go to the console tab and you will get a Console where you can write out JS and use it with the code from the website.

## 10. How to print out a variable value in JS?

Use the console.log() function:

```console.log(a)```