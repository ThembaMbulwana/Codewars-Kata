/*              Reversed sequence

Get the number n to return the reversed sequence from n to 1.

Example : n=5 >> [5,4,3,2,1]
*/

const reverseSeq = n => {
    let output = []

    while(n != 0) {
      output.push(n)
      n--
    }

    return output
}
