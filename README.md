# &lt;\salt&gt;

## Vowels
This kata is a simple game of splitting and mixing words by the first vowel.

Some examples

Word 1 | Word 2 | Result 1 | Result 2
:---:  | :---:  | :---:    | :---:
towel  | car    | tor      | cawel
apple  | melon  | alon     | mepple
black  | white  | blate    | whick
mms    | sms    | mms      | sms

## Constraints

### Interface
The public function in the vowels module must be called `transform` and it should take _two parameters_ - one for each word that should be transformed.
The input parameters must be words with the caracters from the english alphabet. 
No spaces or special characters are allowed. 
However, empty strings are allowed.

The output of the `transform` function should be _an array with two items_, which are the tranformations of the two input parameters.
All output items should be lower case strings.

### Errors
The module should report any errors (including bad input) to the client by throwing.

## Linter
The linter rules in this project are based on Air Bnb's set of rules. 
It is a very popular set of rules, but more stringent that what you have been using so far.
__Don't not change these rules!__
