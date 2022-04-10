 function addNumbers(numbers) {

    // return 0 when imput is empty
    if (!numbers) return 0;

    // if not empty calcute sum anc check for any negatives
    let {negativeNumbers, sum } = parseInput(numbers);

    // if there are -ve, throw exception
    if (negativeNumbers.length>0) {
         throw `negatives not allowed ${[...negativeNumbers]}` 
    }
    // if no -ve numbers return the sum calculated
    return sum;

}

function parseInput(number) {

    let sum = 0;
    let k = 0;
    let negativeNumbers = [];
    // iterate through string and calculate sum of +ve numbers
    let temp = "";

    // check for new line characters \n and replace \n in the enitre string to " "
    number = number.replace(/\n/g, " ");
    while(k<number.length) {
        if (!isNaN(Number(number[k])) && number[k] != " ") { // check if the present element is a digit

            temp += number[k] + "";
            // sum += Number(number[k]);
            k++;
        } else if(number[k] === '-') { // check for negative
            let j = k+1;
            while(j <number.length && !isNaN(Number(number[j]))) {
                j++;
            }
            if (j > k+1) { // e.g -; should not return an exception whereas -12 should
                negativeNumbers.push(number.substring(k,j));
            }
          
            k = j-1;
        } else {
            sum += Number(temp);
            k++;
            temp ="";
        }
    }

    // if temp is not null indicating that the entire input has parsed and temp is holding the last digits value
    if (temp != "" ) {
        sum += Number(temp);
    }
    return {
        negativeNumbers,
        sum
    }
}