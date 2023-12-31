## Install

The easiest way to use this is to use Github Codespaces:

1. Go to https://github.com/codespaces
2. Click `Use this template` on the Blank template and wait for it to load
3. When the terminal is ready clone the repo: `git clone https://github.com/bwobbones/stringkata.git`
4. `npm i`
5. `npm test` to make sure it works

## Instructions

Work through the kata from https://osherove.com/tdd-kata-1 (listed below)

## The Kata

Hints:

- Start with the simplest test case of an empty string and move to one and two numbers
- Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
- Remember to refactor after each passing test

The zero test is done to kick you off.

1. Create a simple String calculator with a method signature `int add(string numbers)`

   _Note the method can take up to two numbers, separated by commas, and will return their sum. For example “” or “1” or “1,2” as inputs. (for an empty string it will return 0)_

2. Allow the Add method to handle an unknown amount of numbers

3. Allow the Add method to handle new lines between numbers (instead of commas).

- the following input is ok: “1\n2,3” (will equal 6)
- the following input is NOT ok: “1,\n” (not need to prove it - just clarifying)

4. Support different delimiters

- to change a delimiter, the beginning of the string will contain a separate line that looks like this: “//[delimiter]\n[numbers…]” for example “//;\n1;2” should return three where the default delimiter is ‘;’ .
- the first line is optional. all existing scenarios should still be supported

5. Calling Add with a negative number will throw an exception “negatives not allowed” - and the negative that was passed.
   if there are multiple negatives, show all of them in the exception message.

6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001 = 2

7. Delimiters can be of any length with the following format: “//[delimiter]\n” for example: “//[\*\*\*]\n1\*\*\*_2_\*\*\*3” should return 6

8. Allow multiple delimiters like this: “//[delim1][delim2]\n” for example “//[\*][%]\n1\*2%3” should return 6.

- make sure you can also handle multiple delimiters with length longer than one char
