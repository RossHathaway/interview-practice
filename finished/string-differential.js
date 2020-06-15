/* Character edits

Suppose there are three types of edits that can be performed on strings:
    1. insert a character "insert(int offset, char c)",
    2. remove a character "deleteCharAt(int index)", or
    3. replace a character "setCharAt(int index, char c)"
 
 Given two strings, write a function to check if they are one edit (or zero edits) away.
 
** EX: 
      pale, ple -> true 
      pales, pale -> true 
      pale, bale -> true 
      pale, bae -> false
      pales, ale -> false
 
Hint: Try working identifying when we would need to use the  "replace" logic
*/

/* pale bale should be true*/
/* "ale -&gt; pales should be false*/
function solution2(firstWord, secondWord) {
    const longerWord = firstWord.length >= secondWord.length ? firstWord : secondWord
    const shorterWord = firstWord.length < secondWord.length ? firstWord : secondWord
    let differenceCount = 0

    for (let i = 0; i < longerWord.length; i++) {
        const longerWordChar = longerWord[i]
        const shorterWordChar = shorterWord[i]

        if (longerWordChar !== shorterWordChar) {
            differenceCount++

            if (longerWord.slice(i + 1) === shorterWord.slice(i + 1)) {
                return true
            } else if (longerWord.slice(i + 1) === shorterWord.slice(i)) {
                return true
            } else {
                return false
            }
        }
    }
    return true
}

function solution1(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        // check insert and delete
        const longerWord = firstWord.length > secondWord.length ? firstWord : secondWord
        // console.log('longerWord', longerWord)
        const shorterWord = firstWord.length < secondWord.length ? firstWord : secondWord
        // console.log('shorterWord', shorterWord)

        let differenceCount = 0
        // iterate through both words 
        for (let i = 0, j = 0; i < longerWord.length && j < shorterWord.length; i++, j++) {
            const longerWordChar = longerWord[i]
            const shorterWordChar = shorterWord[j]
            // console.log('longerWordChar', longerWordChar)
            if (longerWordChar !== shorterWordChar) {
                differenceCount++
                if (differenceCount > 1) return false
                j--
            }
        }
        return true
    } else {
        let differenceCount = 0
        for (let i = 0; i < firstWord.length; i++) {
            const firstChar = firstWord[i]
            const secondChar = secondWord[i]

            if (firstChar !== secondChar) {
                differenceCount++
            }
            if (differenceCount > 1) return false
        }
        return true
    }
}


console.log(`Transformation       Actual      Expected`)
console.log('pales -> paes        ', solution2('pales', 'paes'), '      true')
console.log('pale -> bale        ', solution2('pale', 'bale'), '      true')
console.log('pales -> pale       ', solution2('pales', 'pale'), '       true')
console.log('ale -> pale         ', solution2('ale', 'pale'), '       true')
console.log('pal -> pale         ', solution2('pal', 'pale'), '       true')
console.log('pale -> bae         ', solution2('pale', 'bae'), '      false')
console.log('ale -> ples         ', solution2('ale', 'ples'), '      false')
console.log('pales -> ale        ', solution2('pales', 'ale'), '      false')
console.log('ale -> pales        ', solution2('ale', 'pales'), '      false')
console.log('cat -> dog          ', solution2('cat', 'dog'), '      false')
console.log('cat -> act          ', solution2('cat', 'act'), '      false')
console.log('cat -> tact         ', solution2('cat', 'tact'), '      false')
