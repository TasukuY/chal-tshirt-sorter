// Write your solution below:
/*
Write a function that will take in a string containing only s, m, and l characters. Ex: slsmmsllsmsmlmsls
This string essentially represents a bunch of t-shirts in an unsorted pile. 
Your function should return this pile of t-shirts sorted by small, then medium, then large. 
The above example would be returned sssssssmmmmmlllll.
The given string will never include characters outside of the lowercase s, m, and l. The string will also never contain any spaces.

>>> tshirtSorter('lms')
// sml

>>> tshirtSorter('smllms')
// ssmmll
*/

const tshirtSorter = str => {
    let sStr = '';
    let mStr = '';
    let lStr = '';

    for(let i = 0; i < str.legnth; i++){
        if(str[i] === 's'){
            sStr += str[i];
        }else if(str[i] === 'm'){
            mStr += str[i];
        }else{
            lStr += str[i];
        }
    }
    return sStr+mStr+lStr;
}

const tshirtSorter2 = str => str.replaceAll('l', '').replaceAll('m', '') + str.replaceAll('l', '').replaceAll('s', '') + str.replaceAll('s', '').replaceAll('m', '')

let sorter = str => str.split('').sort().reverse().join('')
console.log(sorter('slsmmsllsmsmlmsls'));


