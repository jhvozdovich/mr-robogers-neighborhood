# **Mr. Roboger's Neighborhood**

### _Arrays & Looping - Week 3 Project at Epicodus_

#### Author: **_Jessica Hvozdovich_**
#### April 3, 2020

### Description

_The purpose of this webpage is to accept a number as user input and return a range of numbers from zero to said number with certain transformations as described in the specifications below. It demonstrates the use of conditionals and loops to manipulate an array with JavaScript and jQuery._

### Instructions for use:

1. Clone this repository from GitHub.
2. Open the downloaded directory in a text editor of your choice.
  (VSCode, Atom, etc.)
3. Open a live server of the webpage.

_Alternatively_
* After downloading the file preview the webpage by right clicking and opening index.html in the browser of your choice.
* Visit https://jhvozdovich.github.io/mr-robogers-neighborhood/

### Known Bugs

No bugs have been identified at the time of this update.

### Support and Contact Information

Please contact me with any suggestions or questions at jhvozdovich@gmail.com. Thank you for your input!

### Technologies Used

* HTML
* CSS with Bootstrap Framework
* Git and GitHub
* JavaScript with jQuery Library

### Specs
| Spec | Input | Output |
| :------------- | :------------- | :------------- |
| **1- Create a form that accepts numerical user input** | User Input:”3” | JS Data: “ ‘3’ (a string)” |
| **2- Convert the string value to an integer** | JS Data: "‘3’ (a string)" | Transformed Data: “3 (a number)” |
| **3- Create an array of the all numbers between zero and the integer** | Transformed Data: “3” | Number Array: “[0, 1, 2, 3]” |
| **4- Convert the array of numbers into an array of strings** | Number Array: “3” | String Array: “[‘0’, ‘1’, ‘2’, ‘3’]“ |
| **5- Split each number string into an array of digits** | String Array: “[‘0’…’10’, ’11’, ’12’] | Array of arrays: “[[‘0’]…[’1’, ‘0’], [’1’, ‘1’],[’1’, ‘2’]]” |
| **6- Evaluate rule: numbers that contain a ‘3’ all digits are replaced with “Won’t you be my neighbor?” (highest priority)** | Array: “[’1’, ‘3’]” | Output: “Won’t you be my neighbor?” |
| **7- Evaluate rule: numbers that contain a ‘2’ all digits are replaced with “Boop!” (middle priority)** | Array: “[’1’, ‘2’]” | Output: “Boop!” |
| **8- Evaluate rule: numbers that contain a ‘1’ all digits are replaced with “Beep!” (lowest priority)** | Array: “[’1’, ‘1’]” | Output: “Beep!” |
| **9- If none of these rules are met, return the original number by joining the array and using parseInt** | Array: “[’5’, ‘0’]” | Output: “50 (number)” |
| **10- Display an error if a negative number is entered** | Input: “-1” | Output: “Please enter a non-negative number.” |
| **11- Round down if a number is a decimal** | Input: “1.2” | Output: “1” |
| **12- Option to count backwards with prepend** | Input: “5” | Output: "5, 4, Won't you be my neighbor?, Boop!, Beep!, 0" |

#### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Jessica Hvozdovich_**