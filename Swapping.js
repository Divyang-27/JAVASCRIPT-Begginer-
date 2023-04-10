//========== User's Code Starts Here ==========
'use strict';

process.stdin.setEncoding('utf-8');

function swap(a, b){
    //write the code to swap two numbers inside this block

    [a,b]=[b,a];
    
    
    //dont change below code
    console.log('a value is =', a);
    console.log('b value is =', b)
}


async function readInput() {
        let inputString = '';
        process.stdin.on('data', inputStdin => {
            inputString += inputStdin;
            const inputArr = inputString.split(/(?:\r\n|\r|\n)/g)
            // console.log(inputArr);
            swap(parseInt(inputArr[0]), parseInt(inputArr[1]))
            process.exit();

        })

}
readInput();
//========== User's Code Ends Here ==========
