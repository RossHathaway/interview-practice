/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(braces) {
    //     debugger

    let openedBraces = []
    for (let char of braces) {
        //     check type and direction of brace

        if (['[', '{', '('].includes(char)) {
            openedBraces.push(char)
        } else {
            let partnerBrace
            if (char === ']') {
                partnerBrace = '['
            } else if (char === '}') {
                partnerBrace = '{'
            } else if (char === ')') {
                partnerBrace = '('
            }

            const partnerIndex = openedBraces.lastIndexOf(partnerBrace)
            // make sure that all braces inside that are closed
            if (partnerIndex !== openedBraces.length - 2) {
                return false
            }
            // remove all closed braces from openBraces
            openedBraces = openedBraces.slice(partnerIndex, openedBraces.length)

        }
    }
}

console.log(validBraces("([)]")) // false
console.log(validBraces("()")) // true
console.log(validBraces("{}[]()")) // true
console.log(validBraces("{[}]")) // false
console.log(validBraces("{[}]")) // false
console.log(validBraces("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")) // true
console.log(validBraces("{}[]()")) // true