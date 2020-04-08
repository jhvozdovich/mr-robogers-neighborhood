# **Mr. Roboger's Neighborhood**

### _Arrays & Looping - Week 3 Project at Epicodus_

#### Author: **_Jessica Hvozdovich_**
#### April 7, 2020

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
| **Returns a user input number** | User Input:”3” | Output: “3” |
| **Displays a warning for blank fields** | User Input:”” | Output: “Please fill out this field” |
| **Does not accept letter or special character input** | User Input:”Hello!” | Output: “(no display)" |
| **Displays a warning for negative numbers** | User Input:”-11” | Output: “Mr. R.0.Boger can't count negative numbers!" |
| **Returns a range of numbers from 0 to the user input** | User Input:”3” | Output: “0, 1, 2, 3” |
| **Transforms a number containing a 3 to "Won't you be my neighbor?"** | User Input:”3” | Output: “Won't you be my neighbor?” |
| **Transforms a number containing a 2 to "Boop!"** | User Input:”72” | Output: “Boop!” |
| **Transforms a number containing a 1 to "Beep!"** | User Input:”11" | Output: “Beep!” |
| **Creates hierarchy for number rules - 3 supersedes 1** | User Input:”31” | Output: “Won't you be my neighbor?” |
| **Creates hierarchy for number rules - 2 supersedes 1** | User Input:”12” | Output: “Boop” |
| **Creates hierarchy for number rules - 3 supersedes 2** | User Input:”23” | Output: “Won't you be my neighbor?” |
| **Returns a range of numbers between 0 and the input with aforementioned transformations applied** | User Input:”6” | Output: “0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6” |
| **Displays the option to return to the starting screen and enter a new number** | User Input:”Play again?'” | Output: “Enter your number: ___” |
| **Toggles display of rules** | User Input:”Click-Need to see the rules?” | Output: “Message describing the rules for numbers with digits 1, 2, or 3” |
| **Counts count backwards or forwards depending on button clicked** | User Input:”6 + 'Count Backwards!'” | Output: “6, 5, 4, Won't you be my neighbor?, Boop!, Beep!, 0” |
| **Displays an image and message for odd user inputs** | User Input:”7” | Output: “How odd!” |
| **Displays an image and message for even user inputs** | User Input:”2” | Output: “Even better!” |

#### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Jessica Hvozdovich_**